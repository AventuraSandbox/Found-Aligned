import { describe, it, expect, vi, beforeEach } from 'vitest';
import { handleError, SecurityError, ValidationError, logSecurityEvent } from '../errorHandler';

// Mock the toast hook
vi.mock('@/hooks/use-toast', () => ({
  toast: vi.fn(),
}));

describe('Custom Error Classes', () => {
  it('should create SecurityError with default code', () => {
    const error = new SecurityError('Security violation');
    expect(error).toBeInstanceOf(Error);
    expect(error).toBeInstanceOf(SecurityError);
    expect(error.message).toBe('Security violation');
    expect(error.code).toBe('SECURITY_ERROR');
    expect(error.name).toBe('SecurityError');
  });

  it('should create SecurityError with custom code', () => {
    const error = new SecurityError('Access denied', 'ACCESS_DENIED');
    expect(error.code).toBe('ACCESS_DENIED');
  });

  it('should create ValidationError with message', () => {
    const error = new ValidationError('Invalid input');
    expect(error).toBeInstanceOf(Error);
    expect(error).toBeInstanceOf(ValidationError);
    expect(error.message).toBe('Invalid input');
    expect(error.name).toBe('ValidationError');
    expect(error.field).toBeUndefined();
  });

  it('should create ValidationError with field', () => {
    const error = new ValidationError('Invalid email', 'email');
    expect(error.field).toBe('email');
  });
});

describe('handleError', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.spyOn(console, 'error').mockImplementation(() => {});
  });

  it('should handle ValidationError and show toast', async () => {
    const { toast } = await import('@/hooks/use-toast');
    const error = new ValidationError('Invalid email format');

    handleError(error, 'form validation');

    expect(toast).toHaveBeenCalledWith({
      variant: 'destructive',
      title: 'Validation Error',
      description: 'Invalid email format',
    });
    expect(console.error).toHaveBeenCalledWith('Error in form validation:', error);
  });

  it('should handle SecurityError and show generic toast', async () => {
    const { toast } = await import('@/hooks/use-toast');
    const error = new SecurityError('Unauthorized access', 'UNAUTHORIZED');

    handleError(error, 'authentication');

    expect(toast).toHaveBeenCalledWith({
      variant: 'destructive',
      title: 'Security Error',
      description: 'A security error occurred. Please try again.',
    });
    expect(console.error).toHaveBeenCalledWith('Error in authentication:', error);
  });

  it('should handle generic errors with generic message', async () => {
    const { toast } = await import('@/hooks/use-toast');
    const error = new Error('Something broke');

    handleError(error, 'api call');

    expect(toast).toHaveBeenCalledWith({
      variant: 'destructive',
      title: 'Something went wrong',
      description: 'Please try again. If the problem persists, contact support.',
    });
    expect(console.error).toHaveBeenCalledWith('Error in api call:', error);
  });

  it('should handle unknown error types', async () => {
    const { toast } = await import('@/hooks/use-toast');
    const error = { message: 'Weird error' };

    handleError(error, 'unknown');

    expect(toast).toHaveBeenCalledWith({
      variant: 'destructive',
      title: 'Something went wrong',
      description: 'Please try again. If the problem persists, contact support.',
    });
  });

  it('should use default context if not provided', async () => {
    const { toast } = await import('@/hooks/use-toast');
    const error = new Error('Test error');

    handleError(error);

    expect(console.error).toHaveBeenCalledWith('Error in application:', error);
  });
});

describe('logSecurityEvent', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.spyOn(console, 'warn').mockImplementation(() => {});
  });

  it('should log security event with details', () => {
    const details = { userId: '123', action: 'login_attempt' };
    logSecurityEvent('Suspicious activity', details);

    expect(console.warn).toHaveBeenCalledWith(
      'Security Event:',
      expect.objectContaining({
        event: 'Suspicious activity',
        details,
        timestamp: expect.any(String),
        userAgent: expect.any(String),
        url: expect.any(String),
      })
    );
  });

  it('should include timestamp in ISO format', () => {
    const details = { action: 'test' };
    logSecurityEvent('Test event', details);

    expect(console.warn).toHaveBeenCalledWith(
      'Security Event:',
      expect.objectContaining({
        timestamp: expect.stringMatching(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/),
      })
    );
  });
});

