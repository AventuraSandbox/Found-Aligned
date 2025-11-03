# 🚀 Email Setup Instructions - 5 Minutes

## You're Getting This Error?

If you see: **"Email Configuration Missing"** or form submission fails, follow these steps:

---

## ✅ Quick Fix (5 Minutes)

### Step 1: Get Your Free Web3Forms Access Key

1. **Visit:** https://web3forms.com
2. **Enter Email:** `hello@foundandaligned.com`
3. **Click:** "Get Started Free"
4. **Check Email:** Verify your email address
5. **Copy:** Your Access Key (looks like: `abc123def-456-789-ghi-jkl012mno345`)

---

### Step 2: Create .env File

In your project root folder (`Found-Aligned`), create a file named `.env` (with the dot):

```bash
# Copy this entire content into your .env file

# Site Configuration
VITE_SITE_URL=https://foundandaligned.com

# Email Configuration - REQUIRED FOR FORMS TO WORK
VITE_WEB3FORMS_ACCESS_KEY=paste_your_key_here

# Environment
NODE_ENV=development
```

**IMPORTANT:** Replace `paste_your_key_here` with your actual access key from Step 1!

---

### Step 3: Restart Your Dev Server

```bash
# Stop the current server (Ctrl+C)
# Then restart:
npm run dev
```

**The server MUST be restarted** for environment variables to load!

---

### Step 4: Test It

1. Go to: `http://localhost:8080/onboarding`
2. Fill out the form
3. Click "Submit"
4. Check `hello@foundandaligned.com` inbox

---

## 🔍 Troubleshooting

### Error: "Email Configuration Missing"

**Problem:** Access key not set or .env file missing  
**Solution:** 
1. Make sure `.env` file exists in project root
2. Make sure you pasted your access key
3. Restart dev server with `npm run dev`

---

### Error: "Failed to send application"

**Problem:** Invalid access key or email not verified  
**Solution:**
1. Check that you verified `hello@foundandaligned.com` in Web3Forms
2. Make sure access key is correct (no extra spaces)
3. Check browser console for detailed error

---

### Email Not Received

**Problem:** Email might be in spam or Web3Forms account not verified  
**Solution:**
1. Check spam folder
2. Verify email was verified in Web3Forms dashboard
3. Make sure free tier limit (250/month) not exceeded
4. Check Web3Forms dashboard for delivery status

---

### Form Submits But No Email

**Problem:** Access key might be for wrong email  
**Solution:**
1. Log into https://web3forms.com
2. Make sure access key is for `hello@foundandaligned.com`
3. Check "Submissions" tab for delivery logs

---

## 📁 File Structure

Your project should look like this:

```
Found-Aligned/
├── .env                    ← Create this file (YOU NEED THIS!)
├── .env.example           ← Template (don't edit)
├── src/
│   └── pages/
│       └── Onboarding.tsx
├── package.json
└── ...
```

---

## 🧪 Testing Commands

```bash
# Check if .env file exists
ls -la .env        # Mac/Linux
dir .env           # Windows

# View environment variables (should show your key)
echo $VITE_WEB3FORMS_ACCESS_KEY     # Mac/Linux
echo %VITE_WEB3FORMS_ACCESS_KEY%    # Windows
```

---

## ✅ Verification Checklist

Before testing the form, make sure:

- [ ] Created `.env` file in project root
- [ ] Added `VITE_WEB3FORMS_ACCESS_KEY=your_key` to .env
- [ ] Replaced `your_key` with actual access key from Web3Forms
- [ ] Verified `hello@foundandaligned.com` email in Web3Forms
- [ ] Restarted dev server (`npm run dev`)
- [ ] Browser console shows no errors

---

## 💰 Cost

**FREE** - Web3Forms Free Tier
- 250 submissions per month
- No credit card required
- Instant delivery
- Perfect for startups

---

## 🆘 Still Having Issues?

### Check Browser Console

1. Open browser dev tools (F12)
2. Go to Console tab
3. Look for error messages
4. Common errors:
   - "Web3Forms access key not configured" → Add key to .env
   - "401 Unauthorized" → Wrong access key
   - "Network error" → Check internet connection

### Check .env File

Your `.env` file should look EXACTLY like this:

```
VITE_WEB3FORMS_ACCESS_KEY=abc123-your-actual-key-here
```

**NOT like this (common mistakes):**
```
# Wrong - has quotes
VITE_WEB3FORMS_ACCESS_KEY="abc123"

# Wrong - has spaces
VITE_WEB3FORMS_ACCESS_KEY = abc123

# Wrong - placeholder still there
VITE_WEB3FORMS_ACCESS_KEY=paste_your_key_here
```

---

## 📧 What the Email Looks Like

When it works, you'll receive:

```
New Application Submission - Found & Aligned
=============================================

CONTACT INFORMATION
-------------------
Name: Test User
Email: test@example.com
Phone: (555) 123-4567

ABOUT YOU
---------
Gender: Woman
Age Range: 30-34
Location: New York, NY

WHO YOU'RE SEEKING
------------------
Looking for: Men

=============================================
Submitted: 11/3/2025, 2:30:15 PM
```

---

## 🎯 Quick Commands

```bash
# Create .env file (Mac/Linux)
touch .env

# Create .env file (Windows PowerShell)
New-Item .env -ItemType File

# Edit .env file
code .env              # VS Code
notepad .env           # Windows
nano .env              # Mac/Linux terminal

# Restart dev server
npm run dev
```

---

**Setup Time:** 5 minutes  
**Cost:** Free  
**Result:** Automatic emails to hello@foundandaligned.com

✨ **That's it!** After these steps, your form will automatically send emails.

