import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
const SECURITY_SECRET = Deno.env.get("EDGE_FUNCTION_SECRET");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-security-token",
  'Content-Security-Policy': "default-src 'self'; script-src 'self'",
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
};

// Rate limiting store
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

interface DiscoveryCallNotificationRequest {
  callId: string;
  callData: {
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    callType?: string;
    preferredTime?: string;
    timezone?: string;
    ageRange?: string;
    location?: string;
    relationshipStatus?: string;
    backgroundInfo?: string;
    questions?: string;
  };
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Security: Verify request signature
    const securityToken = req.headers.get('x-security-token');
    if (!securityToken || securityToken !== SECURITY_SECRET) {
      console.warn('Unauthorized access attempt:', {
        ip: req.headers.get('cf-connecting-ip') || 'unknown',
        userAgent: req.headers.get('user-agent'),
        timestamp: new Date().toISOString()
      });
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
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

    const { callId, callData }: DiscoveryCallNotificationRequest = await req.json();
    
    // Server-side validation
    if (!callId || !callData?.firstName || !callData?.lastName || !callData?.email) {
      console.error("Missing required fields in discovery call notification request");
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
    if (!emailRegex.test(callData.email)) {
      console.error("Invalid email format:", callData.email);
      return new Response(
        JSON.stringify({ error: "Invalid email format" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const supabaseUrl = `https://supabase.com/dashboard/project/temsybfglhylzpxmntka/editor/${callId}`;

    const emailHtml = `
      <h1>New Discovery Call Request</h1>
      <p>A new discovery call has been requested through Found & Aligned.</p>
      
      <h2>Contact Information</h2>
      <p><strong>Name:</strong> ${callData.firstName} ${callData.lastName}</p>
      <p><strong>Email:</strong> ${callData.email}</p>
      <p><strong>Phone:</strong> ${callData.phone || 'Not provided'}</p>
      
      <h2>Call Preferences</h2>
      <p><strong>Call Type:</strong> ${callData.callType || 'Not specified'}</p>
      <p><strong>Preferred Time:</strong> ${callData.preferredTime || 'Not specified'}</p>
      <p><strong>Timezone:</strong> ${callData.timezone || 'Not specified'}</p>
      
      <h2>Background Information</h2>
      <p><strong>Age Range:</strong> ${callData.ageRange || 'Not provided'}</p>
      <p><strong>Location:</strong> ${callData.location || 'Not provided'}</p>
      <p><strong>Relationship Status:</strong> ${callData.relationshipStatus || 'Not provided'}</p>
      
      <p><strong>Background Information:</strong></p>
      <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 10px 0;">
        ${callData.backgroundInfo || 'Not provided'}
      </div>
      
      <p><strong>Questions for the Call:</strong></p>
      <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 10px 0;">
        ${callData.questions || 'No specific questions'}
      </div>
      
      <hr style="margin: 30px 0;">
      
      <p><strong>Discovery Call ID:</strong> ${callId}</p>
      <p><a href="${supabaseUrl}" style="background-color: #007bff; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">View in Supabase Dashboard</a></p>
      
      <p style="color: #666; font-size: 12px; margin-top: 30px;">
        This email was automatically generated when a discovery call was requested through the Found & Aligned website.
      </p>
    `;

    const emailResponse = await resend.emails.send({
      from: "Found & Aligned <noreply@foundandaligned.com>",
      to: ["hello@foundandaligned.com"],
      subject: `Discovery Call Request: ${callData.firstName} ${callData.lastName}`,
      html: emailHtml,
    });

    console.log("Discovery call notification email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, emailId: emailResponse.data?.id }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-discovery-call-notification function:", error);
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