# Found & Aligned - Deployment Guide

## 🚀 Pre-Deployment Checklist

### 1. Environment Setup

Create a `.env` file in the project root with the following variables:

```env
# Supabase Configuration
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key_here

# Site Configuration
VITE_SITE_URL=https://foundandaligned.com

# CAPTCHA Configuration (Cloudflare Turnstile)
VITE_TURNSTILE_SITE_KEY=your_turnstile_site_key_here

# Environment
NODE_ENV=production
```

### 2. Supabase Setup

#### Database Migrations
```bash
# Deploy all migrations
supabase db push

# Or run the new security migration manually
supabase db reset
```

#### Edge Functions
```bash
# Deploy edge functions
supabase functions deploy send-application-notification
supabase functions deploy send-discovery-call-notification
```

#### Function Secrets
```bash
# Set required secrets
supabase functions secrets set RESEND_API_KEY=your_resend_api_key
supabase functions secrets set TURNSTILE_SECRET_KEY=your_turnstile_secret_key
```

#### Admin User Setup
```sql
-- Assign admin role to your user
INSERT INTO public.user_roles (user_id, role)
VALUES ('your-auth-user-id', 'admin')
ON CONFLICT (user_id, role) DO NOTHING;
```

### 3. Cloudflare Turnstile Setup

1. Go to [Cloudflare Turnstile](https://dash.cloudflare.com/?to=/:account/turnstile)
2. Create a new site key
3. Add your domain: `foundandaligned.com`
4. Copy the site key and secret key
5. Add site key to `.env` as `VITE_TURNSTILE_SITE_KEY`
6. Add secret key to Supabase function secrets as `TURNSTILE_SECRET_KEY`

### 4. Resend Email Setup

1. Create a [Resend](https://resend.com) account
2. Verify your domain: `foundandaligned.com`
3. Create an API key
4. Add to Supabase function secrets as `RESEND_API_KEY`
5. Configure sender email: `noreply@foundandaligned.com`

## 🔧 Build & Deploy

### Local Testing
```bash
# Install dependencies
npm install

# Type check
npm run typecheck

# Build for production
npm run build

# Preview build
npm run preview
```

### Production Deployment

#### Vercel
1. Connect your GitHub repository
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

#### Netlify
1. Connect your GitHub repository
2. Set environment variables in Netlify dashboard
3. Build command: `npm run build`
4. Publish directory: `dist`

### Security Headers

Add these headers to your hosting platform:

```json
{
  "X-Frame-Options": "DENY",
  "X-Content-Type-Options": "nosniff",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
  "Content-Security-Policy": "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://challenges.cloudflare.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https://*.supabase.co wss://*.supabase.co;",
  "Strict-Transport-Security": "max-age=31536000; includeSubDomains",
  "X-XSS-Protection": "1; mode=block"
}
```

## 🧪 Testing Checklist

### Form Submission Testing
- [ ] Application form submits with all required fields
- [ ] Discovery call form submits with all required fields
- [ ] CAPTCHA verification works correctly
- [ ] Email notifications are sent to `hello@foundandaligned.com`
- [ ] Database records are created in Supabase
- [ ] Error messages display for missing required fields
- [ ] Form validation prevents submission with incomplete data

### Security Testing
- [ ] Rate limiting works (2 app submissions per 5 min, 3 discovery calls per 5 min)
- [ ] CAPTCHA verification prevents bot submissions
- [ ] CORS headers are properly configured
- [ ] Admin route is protected
- [ ] Input sanitization prevents XSS attacks

### Email Testing
- [ ] Application submission emails are received
- [ ] Discovery call request emails are received
- [ ] Email content includes all form data
- [ ] Email includes link to Supabase record
- [ ] Email formatting is professional and readable

## 🔒 Security Features Implemented

### ✅ Fixed Issues
1. **Hardcoded Supabase Keys** - Now using environment variables
2. **Client-Side Security Token** - Replaced with CAPTCHA verification
3. **Missing Environment Setup** - Added `.env` configuration
4. **Toast System Duplication** - Removed Sonner, kept shadcn/ui
5. **Missing Admin Route Protection** - Added ProtectedRoute component
6. **CORS Configuration** - Restricted to `foundandaligned.com`
7. **Database Security** - Added UPDATE/DELETE policies and indexes
8. **Input Validation** - Enhanced with CAPTCHA verification

### 🔧 New Security Features
- **CAPTCHA Protection**: Cloudflare Turnstile integration
- **Rate Limiting**: Client and server-side protection
- **Input Sanitization**: HTML sanitization for all text inputs
- **Protected Routes**: Admin access control
- **Environment Variables**: Secure configuration management
- **Database Constraints**: CHECK constraints and NOT NULL fields
- **Security Headers**: Comprehensive CSP and security headers

## 📧 Email Configuration

Both edge functions now:
- Use CAPTCHA verification instead of security tokens
- Send emails to `hello@foundandaligned.com`
- Include comprehensive applicant data
- Provide direct links to Supabase dashboard
- Use professional HTML formatting

## 🚨 Important Notes

1. **Environment Variables**: Never commit `.env` files to version control
2. **CAPTCHA Keys**: Keep Turnstile secret key secure in function secrets
3. **Domain Verification**: Ensure `foundandaligned.com` is verified in all services
4. **Admin Access**: Set up admin user before deploying
5. **Monitoring**: Monitor function logs for security events

## 🔄 Post-Deployment

1. Test all forms with CAPTCHA
2. Verify email notifications are working
3. Check admin access at `/admin`
4. Monitor function logs for any errors
5. Test rate limiting functionality
6. Verify security headers are applied

The application is now ready for production deployment with comprehensive security measures in place.
