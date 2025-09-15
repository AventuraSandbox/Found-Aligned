import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
const TURNSTILE_SECRET_KEY = Deno.env.get("TURNSTILE_SECRET_KEY");
const TURNSTILE_VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

const corsHeaders = {
  "Access-Control-Allow-Origin": "https://foundandaligned.com",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-turnstile-token",
  'Content-Security-Policy': "default-src 'self'; script-src 'self'",
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
};

// Rate limiting store (in-memory for demo - use Redis in production)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

const isRateLimited = (identifier: string, maxRequests = 5, windowMs = 15 * 60 * 1000): boolean => {
  const now = Date.now();
  const key = identifier;
  const current = rateLimitStore.get(key);
  
  if (!current || now > current.resetTime) {
    rateLimitStore.set(key, { count: 1, resetTime: now + windowMs });
    return false;
  }
  
  if (current.count >= maxRequests) {
    return true;
  }
  
  current.count++;
  return false;
};

interface ApplicationNotificationRequest {
  applicationId: string;
  applicantData: {
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    age?: string;
    location?: string;
    profession?: string;
    education?: string;
    relationshipGoals?: string;
    timeline?: string;
    previousRelationships?: string;
    values?: string;
    lifestyle?: string;
    dealBreakers?: string;
    partnerQualities?: string;
    partnerLifestyle?: string;
    whyFoundAligned?: string;
    investment?: string;
  };
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Security: Verify CAPTCHA token
    const turnstileToken = req.headers.get('x-turnstile-token');
    if (!turnstileToken) {
      console.warn('Missing CAPTCHA token:', {
        ip: req.headers.get('cf-connecting-ip') || 'unknown',
        userAgent: req.headers.get('user-agent'),
        timestamp: new Date().toISOString()
      });
      return new Response(JSON.stringify({ error: 'CAPTCHA verification required' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    // Verify CAPTCHA with Cloudflare Turnstile
    const form = new FormData();
    form.append('secret', Deno.env.get("TURNSTILE_SECRET_KEY") || '');
    form.append('response', turnstileToken);
    
    const verifyResponse = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body: form
    });
    
    const verifyResult = await verifyResponse.json();
    if (!verifyResult.success) {
      console.warn('CAPTCHA verification failed:', {
        ip: req.headers.get('cf-connecting-ip') || 'unknown',
        timestamp: new Date().toISOString(),
        errors: verifyResult['error-codes']
      });
      return new Response(JSON.stringify({ error: 'CAPTCHA verification failed' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    // Rate limiting based on IP
    const clientIP = req.headers.get('cf-connecting-ip') || req.headers.get('x-forwarded-for') || 'unknown';
    if (isRateLimited(clientIP)) {
      console.warn('Rate limit exceeded:', { ip: clientIP, timestamp: new Date().toISOString() });
      return new Response(JSON.stringify({ error: 'Rate limit exceeded' }), {
        status: 429,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    const { applicationId, applicantData }: ApplicationNotificationRequest = await req.json();
    
    // Server-side validation
    if (!applicationId || !applicantData?.firstName || !applicantData?.lastName || !applicantData?.email) {
      console.error("Missing required fields in application notification request");
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(applicantData.email)) {
      console.error("Invalid email format:", applicantData.email);
      return new Response(
        JSON.stringify({ error: "Invalid email format" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const supabaseUrl = `https://supabase.com/dashboard/project/temsybfglhylzpxmntka/editor/${applicationId}`;

    const emailHtml = `
      <h1>New Application Submission</h1>
      <p>A new application has been submitted to Found & Aligned.</p>
      
      <h2>Applicant Information</h2>
      <p><strong>Name:</strong> ${applicantData.firstName} ${applicantData.lastName}</p>
      <p><strong>Email:</strong> ${applicantData.email}</p>
      <p><strong>Phone:</strong> ${applicantData.phone || 'Not provided'}</p>
      <p><strong>Age:</strong> ${applicantData.age || 'Not provided'}</p>
      <p><strong>Location:</strong> ${applicantData.location || 'Not provided'}</p>
      
      <h2>Professional Background</h2>
      <p><strong>Profession:</strong> ${applicantData.profession || 'Not provided'}</p>
      <p><strong>Education:</strong> ${applicantData.education || 'Not provided'}</p>
      
      <h2>Relationship Goals</h2>
      <p><strong>Looking for:</strong> ${applicantData.relationshipGoals || 'Not provided'}</p>
      <p><strong>Timeline:</strong> ${applicantData.timeline || 'Not provided'}</p>
      <p><strong>Relationship History:</strong></p>
      <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 10px 0;">
        ${applicantData.previousRelationships || 'Not provided'}
      </div>
      
      <h2>Values & Lifestyle</h2>
      <p><strong>Core Values:</strong></p>
      <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 10px 0;">
        ${applicantData.values || 'Not provided'}
      </div>
      <p><strong>Lifestyle:</strong></p>
      <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 10px 0;">
        ${applicantData.lifestyle || 'Not provided'}
      </div>
      <p><strong>Non-negotiables:</strong></p>
      <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 10px 0;">
        ${applicantData.dealBreakers || 'Not provided'}
      </div>
      
      <h2>Ideal Partner</h2>
      <p><strong>Important Qualities:</strong></p>
      <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 10px 0;">
        ${applicantData.partnerQualities || 'Not provided'}
      </div>
      <p><strong>Lifestyle Compatibility:</strong></p>
      <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 10px 0;">
        ${applicantData.partnerLifestyle || 'Not provided'}
      </div>
      
      <h2>Investment & Commitment</h2>
      <p><strong>Why Found & Aligned:</strong></p>
      <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 10px 0;">
        ${applicantData.whyFoundAligned || 'Not provided'}
      </div>
      <p><strong>Investment Readiness:</strong> ${applicantData.investment || 'Not provided'}</p>
      
      <hr style="margin: 30px 0;">
      
      <p><strong>Application ID:</strong> ${applicationId}</p>
      <p><a href="${supabaseUrl}" style="background-color: #007bff; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">View in Supabase Dashboard</a></p>
      
      <p style="color: #666; font-size: 12px; margin-top: 30px;">
        This email was automatically generated when a new application was submitted through the Found & Aligned website.
      </p>
    `;

    const emailResponse = await resend.emails.send({
      from: "Found & Aligned <noreply@foundandaligned.com>",
      to: ["hello@foundandaligned.com"],
      subject: `New Application: ${applicantData.firstName} ${applicantData.lastName}`,
      html: emailHtml,
    });

    console.log("Notification email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, emailId: emailResponse.data?.id }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-application-notification function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);