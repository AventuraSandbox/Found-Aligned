import { describe, it, expect } from 'vitest';
import {
  sanitizeHtml,
  applicationFormSchema,
  discoveryCallSchema,
  authSchema,
} from '../validation';

describe('sanitizeHtml', () => {
  it('should remove script tags', () => {
    const input = '<div>Hello</div><script>alert("xss")</script>';
    const result = sanitizeHtml(input);
    expect(result).toBe('<div>Hello</div>');
    expect(result).not.toContain('<script>');
  });

  it('should remove iframe tags', () => {
    const input = '<p>Text</p><iframe src="evil.com"></iframe>';
    const result = sanitizeHtml(input);
    expect(result).toBe('<p>Text</p>');
    expect(result).not.toContain('<iframe>');
  });

  it('should remove javascript: protocol', () => {
    const input = '<a href="javascript:alert(1)">Link</a>';
    const result = sanitizeHtml(input);
    expect(result).not.toContain('javascript:');
  });

  it('should remove event handlers', () => {
    const input = '<div onclick="alert(1)">Click me</div>';
    const result = sanitizeHtml(input);
    expect(result).not.toContain('onclick=');
  });

  it('should preserve safe HTML', () => {
    const input = '<p>Safe content</p><strong>Bold</strong>';
    const result = sanitizeHtml(input);
    expect(result).toBe(input);
  });
});

describe('applicationFormSchema', () => {
  it('should validate a correct application form', () => {
    const validData = {
      firstName: 'John',
      lastName: "O'Brien",
      email: 'john@example.com',
      phone: '+1234567890',
      age: '30',
      location: 'New York',
      profession: 'Engineer',
      company: 'Tech Corp',
      education: 'Bachelor\'s Degree',
      incomeRange: '100k-150k',
      interests: 'Reading, Travel',
      lifestyle: 'Active',
      values: 'Family, Honesty',
      previousRelationships: 'One long-term relationship',
      relationshipGoals: 'Long-term commitment',
      idealPartnerAgeRange: '28-35',
      idealPartnerLocation: 'New York',
      idealPartnerProfession: 'Professional',
      idealPartnerQualities: 'Kind, Intelligent',
      timeline: '6-12 months',
      investmentLevel: 'Premium',
      commitmentLevel: 'High',
      expectations: 'Mutual respect and understanding',
      marketingConsent: true,
      termsConsent: true,
      privacyConsent: true,
    };

    const result = applicationFormSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it('should reject invalid email', () => {
    const invalidData = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'invalid-email',
      phone: '+1234567890',
      age: '30',
      location: 'New York',
      profession: 'Engineer',
      education: 'Bachelor\'s Degree',
      interests: 'Reading',
      lifestyle: 'Active',
      values: 'Family',
      previousRelationships: 'One',
      relationshipGoals: 'Long-term',
      idealPartnerQualities: 'Kind',
      timeline: '6 months',
      investmentLevel: 'Premium',
      commitmentLevel: 'High',
      expectations: 'Mutual respect',
      marketingConsent: true,
      termsConsent: true,
      privacyConsent: true,
    };

    const result = applicationFormSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues.some(issue => issue.path.includes('email'))).toBe(true);
    }
  });

  it('should reject short password equivalent for names', () => {
    const invalidData = {
      firstName: '',
      lastName: 'Doe',
      email: 'john@example.com',
      phone: '+1234567890',
      age: '30',
      location: 'New York',
      profession: 'Engineer',
      education: 'Bachelor\'s Degree',
      interests: 'Reading',
      lifestyle: 'Active',
      values: 'Family',
      previousRelationships: 'One',
      relationshipGoals: 'Long-term',
      idealPartnerQualities: 'Kind',
      timeline: '6 months',
      investmentLevel: 'Premium',
      commitmentLevel: 'High',
      expectations: 'Mutual respect',
      marketingConsent: true,
      termsConsent: true,
      privacyConsent: true,
    };

    const result = applicationFormSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
  });

  it('should reject invalid phone number', () => {
    const invalidData = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      phone: '123', // Too short
      age: '30',
      location: 'New York',
      profession: 'Engineer',
      education: 'Bachelor\'s Degree',
      interests: 'Reading',
      lifestyle: 'Active',
      values: 'Family',
      previousRelationships: 'One',
      relationshipGoals: 'Long-term',
      idealPartnerQualities: 'Kind',
      timeline: '6 months',
      investmentLevel: 'Premium',
      commitmentLevel: 'High',
      expectations: 'Mutual respect',
      marketingConsent: true,
      termsConsent: true,
      privacyConsent: true,
    };

    const result = applicationFormSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues.some(issue => issue.path.includes('phone'))).toBe(true);
    }
  });

  it('should reject if marketing consent is false', () => {
    const invalidData = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      phone: '+1234567890',
      age: '30',
      location: 'New York',
      profession: 'Engineer',
      education: 'Bachelor\'s Degree',
      interests: 'Reading',
      lifestyle: 'Active',
      values: 'Family',
      previousRelationships: 'One',
      relationshipGoals: 'Long-term',
      idealPartnerQualities: 'Kind',
      timeline: '6 months',
      investmentLevel: 'Premium',
      commitmentLevel: 'High',
      expectations: 'Mutual respect',
      marketingConsent: false,
      termsConsent: true,
      privacyConsent: true,
    };

    const result = applicationFormSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues.some(issue => issue.path.includes('marketingConsent'))).toBe(true);
    }
  });

  it('should accept optional fields when provided', () => {
    const validData = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      phone: '+1234567890',
      age: '30',
      location: 'New York',
      profession: 'Engineer',
      education: 'Bachelor\'s Degree',
      interests: 'Reading',
      lifestyle: 'Active',
      values: 'Family',
      previousRelationships: 'One',
      relationshipGoals: 'Long-term',
      idealPartnerQualities: 'Kind',
      timeline: '6 months',
      investmentLevel: 'Premium',
      commitmentLevel: 'High',
      expectations: 'Mutual respect',
      marketingConsent: true,
      termsConsent: true,
      privacyConsent: true,
      company: 'Tech Corp',
      incomeRange: '100k-150k',
    };

    const result = applicationFormSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });
});

describe('discoveryCallSchema', () => {
  it('should validate a correct discovery call form', () => {
    const validData = {
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane@example.com',
      phone: '+1987654321',
      callType: 'Initial Consultation',
      preferredTime: 'Morning',
      timezone: 'EST',
      ageRange: '30-40',
      location: 'Boston',
      relationshipStatus: 'Single',
      backgroundInfo: 'Looking for a meaningful connection',
      questions: 'What is the process?',
    };

    const result = discoveryCallSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it('should accept form without optional questions field', () => {
    const validData = {
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane@example.com',
      phone: '+1987654321',
      callType: 'Initial Consultation',
      preferredTime: 'Morning',
      timezone: 'EST',
      ageRange: '30-40',
      location: 'Boston',
      relationshipStatus: 'Single',
      backgroundInfo: 'Looking for a meaningful connection',
    };

    const result = discoveryCallSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it('should reject invalid email format', () => {
    const invalidData = {
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'not-an-email',
      phone: '+1987654321',
      callType: 'Initial Consultation',
      preferredTime: 'Morning',
      timezone: 'EST',
      ageRange: '30-40',
      location: 'Boston',
      relationshipStatus: 'Single',
      backgroundInfo: 'Looking for a meaningful connection',
    };

    const result = discoveryCallSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
  });
});

describe('authSchema', () => {
  it('should validate a correct auth form', () => {
    const validData = {
      email: 'user@example.com',
      password: 'Password123',
      firstName: 'John',
      lastName: 'Doe',
    };

    const result = authSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it('should validate auth form without optional name fields', () => {
    const validData = {
      email: 'user@example.com',
      password: 'Password123',
    };

    const result = authSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it('should reject password without uppercase letter', () => {
    const invalidData = {
      email: 'user@example.com',
      password: 'password123',
    };

    const result = authSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues.some(issue => issue.path.includes('password'))).toBe(true);
    }
  });

  it('should reject password without lowercase letter', () => {
    const invalidData = {
      email: 'user@example.com',
      password: 'PASSWORD123',
    };

    const result = authSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
  });

  it('should reject password without number', () => {
    const invalidData = {
      email: 'user@example.com',
      password: 'Password',
    };

    const result = authSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
  });

  it('should reject password shorter than 8 characters', () => {
    const invalidData = {
      email: 'user@example.com',
      password: 'Pass123',
    };

    const result = authSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
  });

  it('should reject invalid email', () => {
    const invalidData = {
      email: 'not-an-email',
      password: 'Password123',
    };

    const result = authSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
  });

  it('should reject names with invalid characters', () => {
    const invalidData = {
      email: 'user@example.com',
      password: 'Password123',
      firstName: 'John123',
      lastName: 'Doe',
    };

    const result = authSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
  });
});

