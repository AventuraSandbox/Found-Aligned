import { toast } from "@/hooks/use-toast";

export interface AppError extends Error {
  code?: string;
  details?: any;
}

export class SecurityError extends Error {
  constructor(message: string, public code: string = 'SECURITY_ERROR') {
    super(message);
    this.name = 'SecurityError';
  }
}

export class ValidationError extends Error {
  constructor(message: string, public field?: string) {
    super(message);
    this.name = 'ValidationError';
  }
}

export const handleError = (error: unknown, context?: string) => {
  console.error(`Error in ${context || 'application'}:`, error);
  
  if (error instanceof ValidationError) {
    toast({
      variant: "destructive",
      title: "Validation Error",
      description: error.message,
    });
    return;
  }
  
  if (error instanceof SecurityError) {
    toast({
      variant: "destructive",
      title: "Security Error",
      description: "A security error occurred. Please try again.",
    });
    return;
  }
  
  // Generic error handling - don't expose internal details
  toast({
    variant: "destructive",
    title: "Something went wrong",
    description: "Please try again. If the problem persists, contact support.",
  });
};

export const logSecurityEvent = (event: string, details: Record<string, any>) => {
  const securityLog = {
    timestamp: new Date().toISOString(),
    event,
    details,
    userAgent: navigator.userAgent,
    url: window.location.href,
  };
  
  // In production, send to monitoring service
  console.warn('Security Event:', securityLog);
};