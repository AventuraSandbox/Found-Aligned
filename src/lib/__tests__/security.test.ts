import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import {
  createSecureHeaders,
  setTurnstileToken,
  getTurnstileToken,
  checkClientRateLimit,
  logSecurityEvent,
} from '../security';

describe('Turnstile Token Management', () => {
  beforeEach(() => {
    // Reset token state by accessing internal module state
    setTurnstileToken('');
  });

  it('should set and get turnstile token', () => {
    const token = 'test-token-123';
    setTurnstileToken(token);
    expect(getTurnstileToken()).toBe(token);
  });

  it('should update token value', () => {
    setTurnstileToken('token-1');
    expect(getTurnstileToken()).toBe('token-1');
    
    setTurnstileToken('token-2');
    expect(getTurnstileToken()).toBe('token-2');
  });
});

describe('createSecureHeaders', () => {
  it('should create headers with turnstile token', async () => {
    const token = 'test-token';
    const headers = await createSecureHeaders(token);
    
    expect(headers).toEqual({
      'x-turnstile-token': token,
      'Content-Type': 'application/json',
    });
  });

  it('should create headers without token', async () => {
    const headers = await createSecureHeaders();
    
    expect(headers).toEqual({
      'x-turnstile-token': '',
      'Content-Type': 'application/json',
    });
  });
});

describe('checkClientRateLimit', () => {
  beforeEach(() => {
    // Rate limit tracker is module-level, so we need to wait for timeout or use different identifiers
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('should allow first request', () => {
    const identifier = 'user-1';
    const result = checkClientRateLimit(identifier, 3, 60000);
    expect(result).toBe(false); // false means not rate limited (allowed)
  });

  it('should allow requests within limit', () => {
    const identifier = 'user-2';
    
    // First request
    expect(checkClientRateLimit(identifier, 3, 60000)).toBe(false);
    
    // Second request
    expect(checkClientRateLimit(identifier, 3, 60000)).toBe(false);
    
    // Third request
    expect(checkClientRateLimit(identifier, 3, 60000)).toBe(false);
  });

  it('should rate limit after max requests', () => {
    const identifier = 'user-3';
    
    // Make max requests
    checkClientRateLimit(identifier, 3, 60000);
    checkClientRateLimit(identifier, 3, 60000);
    checkClientRateLimit(identifier, 3, 60000);
    
    // Fourth request should be rate limited
    const result = checkClientRateLimit(identifier, 3, 60000);
    expect(result).toBe(true); // true means rate limited (blocked)
  });

  it('should reset after window expires', () => {
    const identifier = 'user-4';
    vi.useFakeTimers();
    
    // Make max requests
    checkClientRateLimit(identifier, 2, 60000);
    checkClientRateLimit(identifier, 2, 60000);
    expect(checkClientRateLimit(identifier, 2, 60000)).toBe(true);
    
    // Advance time past window
    vi.advanceTimersByTime(60001);
    
    // Should be allowed again
    expect(checkClientRateLimit(identifier, 2, 60000)).toBe(false);
    
    vi.useRealTimers();
  });

  it('should handle different identifiers independently', () => {
    const identifier1 = 'user-5';
    const identifier2 = 'user-6';
    
    // Exhaust limit for user-5
    checkClientRateLimit(identifier1, 2, 60000);
    checkClientRateLimit(identifier1, 2, 60000);
    expect(checkClientRateLimit(identifier1, 2, 60000)).toBe(true);
    
    // user-6 should still be allowed
    expect(checkClientRateLimit(identifier2, 2, 60000)).toBe(false);
  });

  it('should use custom max requests and window', () => {
    const identifier = 'user-7';
    vi.useFakeTimers();
    
    // With max 2 requests and 1000ms window
    checkClientRateLimit(identifier, 2, 1000);
    checkClientRateLimit(identifier, 2, 1000);
    expect(checkClientRateLimit(identifier, 2, 1000)).toBe(true);
    
    vi.advanceTimersByTime(1001);
    expect(checkClientRateLimit(identifier, 2, 1000)).toBe(false);
    
    vi.useRealTimers();
  });
});

describe('logSecurityEvent', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.spyOn(console, 'warn').mockImplementation(() => {});
  });

  it('should log security event with all details', () => {
    const details = { userId: '123', action: 'login_attempt', ip: '192.168.1.1' };
    logSecurityEvent('Suspicious login', details);

    expect(console.warn).toHaveBeenCalledWith(
      'Security Event:',
      expect.objectContaining({
        event: 'Suspicious login',
        details,
        timestamp: expect.any(String),
        userAgent: expect.any(String),
        url: expect.any(String),
      })
    );
  });

  it('should include current URL and user agent', () => {
    Object.defineProperty(window, 'location', {
      value: { href: 'https://example.com/test' },
      writable: true,
    });
    
    Object.defineProperty(navigator, 'userAgent', {
      value: 'Mozilla/5.0',
      writable: true,
    });

    logSecurityEvent('Test event', {});

    expect(console.warn).toHaveBeenCalledWith(
      'Security Event:',
      expect.objectContaining({
        url: 'https://example.com/test',
        userAgent: 'Mozilla/5.0',
      })
    );
  });
});

