import { z } from "zod";

// Simple sanitization utility that doesn't require DOMPurify for now
// This prevents potential build issues while maintaining security
export const sanitizeHtml = (input: string): string => {
  // Remove script tags and other potentially dangerous content
  return input
    .replace(/<script[^>]*>.*?<\/script>/gi, '')
    .replace(/<iframe[^>]*>.*?<\/iframe>/gi, '')
    .replace(/<object[^>]*>.*?<\/object>/gi, '')
    .replace(/<embed[^>]*>.*?<\/embed>/gi, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+\s*=/gi, '');
};

// Application form validation schema
export const applicationFormSchema = z.object({
  firstName: z.string()
    .min(1, "First name is required")
    .max(50, "First name must be less than 50 characters")
    .regex(/^[a-zA-Z\s-']+$/, "First name contains invalid characters"),
  lastName: z.string()
    .min(1, "Last name is required")
    .max(50, "Last name must be less than 50 characters")
    .regex(/^[a-zA-Z\s-']+$/, "Last name contains invalid characters"),
  email: z.string()
    .email("Please enter a valid email address")
    .max(254, "Email must be less than 254 characters"),
  phone: z.string()
    .min(1, "Phone number is required")
    .refine((val) => /^\+?[\d\s()-]{10,15}$/.test(val), "Please enter a valid phone number"),
  age: z.string()
    .min(1, "Age is required"),
  location: z.string()
    .min(1, "Location is required")
    .max(100, "Location must be less than 100 characters"),
  profession: z.string()
    .min(1, "Profession is required")
    .max(100, "Profession must be less than 100 characters"),
  company: z.string()
    .optional()
    .refine((val) => !val || val.length <= 100, "Company name must be less than 100 characters"),
  education: z.string()
    .min(1, "Education is required")
    .refine((val) => val.length <= 200, "Education must be less than 200 characters"),
  incomeRange: z.string()
    .optional(),
  interests: z.string()
    .min(1, "Interests are required")
    .refine((val) => val.length <= 500, "Interests must be less than 500 characters"),
  lifestyle: z.string()
    .min(1, "Lifestyle is required")
    .refine((val) => val.length <= 500, "Lifestyle must be less than 500 characters"),
  values: z.string()
    .min(1, "Values are required")
    .refine((val) => val.length <= 500, "Values must be less than 500 characters"),
  previousRelationships: z.string()
    .min(1, "Previous relationships are required")
    .refine((val) => val.length <= 1000, "Previous relationships must be less than 1000 characters"),
  relationshipGoals: z.string()
    .min(1, "Relationship goals are required")
    .max(1000, "Relationship goals must be less than 1000 characters"),
  idealPartnerAgeRange: z.string()
    .optional(),
  idealPartnerLocation: z.string()
    .optional()
    .refine((val) => !val || val.length <= 100, "Ideal partner location must be less than 100 characters"),
  idealPartnerProfession: z.string()
    .optional()
    .refine((val) => !val || val.length <= 100, "Ideal partner profession must be less than 100 characters"),
  idealPartnerQualities: z.string()
    .min(1, "Ideal partner qualities are required")
    .refine((val) => val.length <= 1000, "Ideal partner qualities must be less than 1000 characters"),
  timeline: z.string()
    .min(1, "Timeline is required"),
  investmentLevel: z.string()
    .min(1, "Investment level is required"),
  commitmentLevel: z.string()
    .min(1, "Commitment level is required"),
  expectations: z.string()
    .min(1, "Expectations are required")
    .refine((val) => val.length <= 1000, "Expectations must be less than 1000 characters"),
  marketingConsent: z.boolean()
    .refine((val) => val === true, "Marketing consent is required"),
  termsConsent: z.boolean()
    .refine((val) => val === true, "Terms consent is required"),
  privacyConsent: z.boolean()
    .refine((val) => val === true, "Privacy consent is required"),
});

// Discovery call form validation schema
export const discoveryCallSchema = z.object({
  firstName: z.string()
    .min(1, "First name is required")
    .max(50, "First name must be less than 50 characters")
    .regex(/^[a-zA-Z\s-']+$/, "First name contains invalid characters"),
  lastName: z.string()
    .min(1, "Last name is required")
    .max(50, "Last name must be less than 50 characters")
    .regex(/^[a-zA-Z\s-']+$/, "Last name contains invalid characters"),
  email: z.string()
    .email("Please enter a valid email address")
    .max(254, "Email must be less than 254 characters"),
  phone: z.string()
    .min(1, "Phone number is required")
    .refine((val) => /^\+?[\d\s()-]{10,15}$/.test(val), "Please enter a valid phone number"),
  callType: z.string()
    .min(1, "Call type is required"),
  preferredTime: z.string()
    .min(1, "Preferred time is required"),
  timezone: z.string()
    .min(1, "Timezone is required"),
  ageRange: z.string()
    .min(1, "Age range is required"),
  location: z.string()
    .min(1, "Location is required")
    .refine((val) => val.length <= 100, "Location must be less than 100 characters"),
  relationshipStatus: z.string()
    .min(1, "Relationship status is required"),
  backgroundInfo: z.string()
    .min(1, "Background info is required")
    .refine((val) => val.length <= 1000, "Background info must be less than 1000 characters"),
  questions: z.string()
    .optional()
    .refine((val) => !val || val.length <= 1000, "Questions must be less than 1000 characters"),
});

// Auth validation schema
export const authSchema = z.object({
  email: z.string()
    .email("Please enter a valid email address")
    .max(254, "Email must be less than 254 characters"),
  password: z.string()
    .min(8, "Password must be at least 8 characters")
    .max(128, "Password must be less than 128 characters")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      "Password must contain at least one lowercase letter, one uppercase letter, and one number"
    ),
  firstName: z.string()
    .min(1, "First name is required")
    .max(50, "First name must be less than 50 characters")
    .regex(/^[a-zA-Z\s-']+$/, "First name contains invalid characters")
    .optional(),
  lastName: z.string()
    .min(1, "Last name is required")
    .max(50, "Last name must be less than 50 characters")
    .regex(/^[a-zA-Z\s-']+$/, "Last name contains invalid characters")
    .optional(),
});

export type ApplicationFormData = z.infer<typeof applicationFormSchema>;
export type DiscoveryCallFormData = z.infer<typeof discoveryCallSchema>;
export type AuthFormData = z.infer<typeof authSchema>;