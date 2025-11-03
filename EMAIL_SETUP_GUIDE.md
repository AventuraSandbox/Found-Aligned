# Email Setup Guide for Onboarding Form

## Overview

The onboarding form now sends formatted emails to `hello@foundandaligned.com` with all questions and answers from the application.

## Email Format

Each submission includes:

### Structured Sections:
1. **Basic Information** - Name, Email, Phone
2. **Demographics** - Age, Location, Gender
3. **Professional Background** - Profession, Education
4. **Relationship Goals** - Goals, Timeline, Status
5. **Partner Preferences** - Seeking, Important Qualities
6. **Values & Lifestyle** - Core Values, Ideal Lifestyle
7. **Investment & Commitment** - Investment Level, Commitment Level, Next Steps

All responses show both the question and the user's answer in a clean, readable format.

## Setup Options

### Option 1: Web3Forms (Recommended - Free & Easy)

**Why Web3Forms?**
- ✅ Free tier (250 submissions/month)
- ✅ No backend required
- ✅ No credit card needed
- ✅ Simple setup (2 minutes)
- ✅ Instant email delivery
- ✅ Spam protection included

**Setup Steps:**

1. **Get Your Access Key**
   - Visit: https://web3forms.com
   - Click "Get Started Free"
   - Enter your email: `hello@foundandaligned.com`
   - Verify your email
   - Copy your Access Key

2. **Add to Environment Variables**
   ```bash
   # In your .env file (or .env.local)
   VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
   ```

3. **Restart Development Server**
   ```bash
   npm run dev
   ```

4. **Test the Form**
   - Go to `/onboarding`
   - Fill out the form
   - Submit
   - Check `hello@foundandaligned.com` for the email

**That's it!** ✨

---

### Option 2: Formspree (Alternative)

If you prefer Formspree:

1. Sign up at: https://formspree.io
2. Create a new form
3. Update the fetch URL in `src/pages/Onboarding.tsx`:
   ```typescript
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({
       email: sanitizedData.email,
       name: `${sanitizedData.firstName} ${sanitizedData.lastName}`,
       message: emailBody,
     }),
   });
   ```

---

### Option 3: Resend (Professional)

For production use with custom domains:

1. Sign up at: https://resend.com
2. Verify your domain: `foundandaligned.com`
3. Get your API key
4. Create a serverless function (Netlify/Vercel):

**Example: Netlify Function**

Create `netlify/functions/send-email.ts`:

```typescript
import { Handler } from '@netlify/functions';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const data = JSON.parse(event.body || '{}');

  try {
    await resend.emails.send({
      from: 'noreply@foundandaligned.com',
      to: 'hello@foundandaligned.com',
      subject: data.subject,
      text: data.message,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send email' }),
    };
  }
};
```

Then update the fetch URL in `Onboarding.tsx`:
```typescript
const response = await fetch('/.netlify/functions/send-email', {
  method: 'POST',
  body: JSON.stringify({
    subject: `New Onboarding Application - ${sanitizedData.firstName} ${sanitizedData.lastName}`,
    message: emailBody,
  }),
});
```

---

### Option 4: Mailto Fallback (No Setup)

If no email service is configured, the form automatically falls back to opening the user's email client with a pre-filled email. This works without any setup but requires the user to manually send the email.

---

## Email Content Example

Here's what the email will look like:

```
New Onboarding Application Submission
=====================================

BASIC INFORMATION
-----------------
Name: Jane Doe
Email: jane.doe@example.com
Phone: (555) 123-4567

DEMOGRAPHICS
------------
Age Range: 30-34
Location: New York, NY
Gender: Woman

PROFESSIONAL BACKGROUND
-----------------------
Profession: Software Engineer
Education: Master's Degree

RELATIONSHIP GOALS
------------------
Primary Goal: Marriage
Timeline: Within 1 year
Current Relationship Status: Single

PARTNER PREFERENCES
-------------------
Open to Dating: Men

Important Qualities in a Partner:
Emotionally intelligent, communicative, values family,
shares similar life goals...

VALUES & LIFESTYLE
------------------
Core Values:
Honesty, growth mindset, work-life balance, family...

Ideal Lifestyle:
Active lifestyle with time for both career and personal life...

INVESTMENT & COMMITMENT
-----------------------
Investment Readiness: Yes, I'm ready to invest $7,500+
Commitment Level: Fully committed to the process
Preferred Next Step: I'm ready to start immediately

=====================================
Submitted: 11/3/2025, 2:30:15 PM
```

---

## Testing

### Quick Test (Web3Forms):
1. Set up Web3Forms access key (5 minutes)
2. Fill out the onboarding form
3. Check `hello@foundandaligned.com`
4. Email should arrive within 30 seconds

### Troubleshooting:

**Email not arriving?**
- Check spam folder
- Verify Web3Forms access key is correct
- Check browser console for errors
- Verify environment variable is loaded (restart dev server)

**Fallback to mailto?**
- This means the email service couldn't send
- Check your access key and internet connection
- The user's email client will open as a backup

---

## Production Deployment

### Environment Variables

Make sure to set in your hosting platform:

**Netlify:**
- Go to: Site settings → Environment variables
- Add: `VITE_WEB3FORMS_ACCESS_KEY`

**Vercel:**
- Go to: Settings → Environment Variables
- Add: `VITE_WEB3FORMS_ACCESS_KEY`

---

## Security Notes

✅ **Built-in Protection:**
- Rate limiting (2 submissions per 5 minutes)
- Input sanitization (prevents XSS)
- Client-side validation
- Security event logging

✅ **Email Security:**
- Web3Forms includes spam protection
- reCAPTCHA integration available
- Submission limits on free tier

---

## Support

**Web3Forms Support:**
- Documentation: https://docs.web3forms.com
- Email: hello@web3forms.com

**Found & Aligned:**
- Email: hello@foundandaligned.com

---

## Quick Start (TL;DR)

1. Get free key: https://web3forms.com
2. Add to `.env`: `VITE_WEB3FORMS_ACCESS_KEY=your_key`
3. Restart: `npm run dev`
4. Test: Submit form at `/onboarding`
5. Done! ✨

**Time to setup: ~5 minutes**

