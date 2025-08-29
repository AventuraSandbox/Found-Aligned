// Security utilities for edge function communication
export const createSecureHeaders = async (turnstileToken?: string) => ({
  'x-turnstile-token': turnstileToken || '',
  'Content-Type': 'application/json',
});

// CAPTCHA token management
let turnstileToken: string | null = null;

export const setTurnstileToken = (token: string) => {
  turnstileToken = token;
};

export const getTurnstileToken = () => turnstileToken;

// Client-side rate limiting
const requestTracker = new Map<string, { count: number; resetTime: number }>();

export const checkClientRateLimit = (identifier: string, maxRequests = 3, windowMs = 60000): boolean => {
  const now = Date.now();
  const current = requestTracker.get(identifier);
  
  if (!current || now > current.resetTime) {
    requestTracker.set(identifier, { count: 1, resetTime: now + windowMs });
    return false;
  }
  
  if (current.count >= maxRequests) {
    return true;
  }
  
  current.count++;
  return false;
};

// Security event logging
export const logSecurityEvent = (event: string, details: Record<string, any>) => {
  const securityLog = {
    timestamp: new Date().toISOString(),
    event,
    details,
    userAgent: navigator.userAgent,
    url: window.location.href,
  };
  
  console.warn('Security Event:', securityLog);
  
  // In production, send to monitoring service
  if (process.env.NODE_ENV === 'production') {
    // Send to your monitoring/logging service
  }
};