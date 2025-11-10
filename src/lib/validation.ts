import { z } from "zod";
import { VALIDATION_LIMITS } from "./constants";
import DOMPurify from "dompurify";

// Robust HTML sanitization using DOMPurify
export const sanitizeHtml = (input: string): string => {
  // Configure DOMPurify to be strict
  return DOMPurify.sanitize(input, {
    ALLOWED_TAGS: [], // Strip all HTML tags
    ALLOWED_ATTR: [], // Strip all attributes
    KEEP_CONTENT: true, // Keep text content
  });
};

// Application form validation schema
export const applicationFormSchema = z.object({
  firstName: z.string()
    .min(1, "First name is required")
    .max(VALIDATION_LIMITS.NAME_MAX_LENGTH, `First name must be less than ${VALIDATION_LIMITS.NAME_MAX_LENGTH} characters`)
    .regex(/^[a-zA-Z\s-']+$/, "First name contains invalid characters"),
  lastName: z.string()
    .min(1, "Last name is required")
    .max(VALIDATION_LIMITS.NAME_MAX_LENGTH, `Last name must be less than ${VALIDATION_LIMITS.NAME_MAX_LENGTH} characters`)
    .regex(/^[a-zA-Z\s-']+$/, "Last name contains invalid characters"),
  email: z.string()
    .email("Please enter a valid email address")
    .max(VALIDATION_LIMITS.EMAIL_MAX_LENGTH, `Email must be less than ${VALIDATION_LIMITS.EMAIL_MAX_LENGTH} characters`),
  phone: z.string()
    .min(1, "Phone number is required")
    .refine((val) => {
      const phoneRegex = new RegExp(`^\\+?[\\d\\s()-]{${VALIDATION_LIMITS.PHONE_MIN_LENGTH},${VALIDATION_LIMITS.PHONE_MAX_LENGTH}}$`);
      return phoneRegex.test(val);
    }, "Please enter a valid phone number"),
  age: z.string()
    .min(1, "Age is required"),
  location: z.string()
    .min(1, "Location is required")
    .max(VALIDATION_LIMITS.LOCATION_MAX_LENGTH, `Location must be less than ${VALIDATION_LIMITS.LOCATION_MAX_LENGTH} characters`),
  profession: z.string()
    .min(1, "Profession is required")
    .max(VALIDATION_LIMITS.PROFESSION_MAX_LENGTH, `Profession must be less than ${VALIDATION_LIMITS.PROFESSION_MAX_LENGTH} characters`),
  company: z.string()
    .optional()
    .refine((val) => !val || val.length <= VALIDATION_LIMITS.COMPANY_MAX_LENGTH, `Company name must be less than ${VALIDATION_LIMITS.COMPANY_MAX_LENGTH} characters`),
  education: z.string()
    .min(1, "Education is required")
    .refine((val) => val.length <= VALIDATION_LIMITS.EDUCATION_MAX_LENGTH, `Education must be less than ${VALIDATION_LIMITS.EDUCATION_MAX_LENGTH} characters`),
  incomeRange: z.string()
    .optional(),
  interests: z.string()
    .min(1, "Interests are required")
    .refine((val) => val.length <= VALIDATION_LIMITS.INTERESTS_MAX_LENGTH, `Interests must be less than ${VALIDATION_LIMITS.INTERESTS_MAX_LENGTH} characters`),
  lifestyle: z.string()
    .min(1, "Lifestyle is required")
    .refine((val) => val.length <= VALIDATION_LIMITS.LIFESTYLE_MAX_LENGTH, `Lifestyle must be less than ${VALIDATION_LIMITS.LIFESTYLE_MAX_LENGTH} characters`),
  values: z.string()
    .min(1, "Values are required")
    .refine((val) => val.length <= VALIDATION_LIMITS.VALUES_MAX_LENGTH, `Values must be less than ${VALIDATION_LIMITS.VALUES_MAX_LENGTH} characters`),
  previousRelationships: z.string()
    .min(1, "Previous relationships are required")
    .refine((val) => val.length <= VALIDATION_LIMITS.PREVIOUS_RELATIONSHIPS_MAX_LENGTH, `Previous relationships must be less than ${VALIDATION_LIMITS.PREVIOUS_RELATIONSHIPS_MAX_LENGTH} characters`),
  relationshipGoals: z.string()
    .min(1, "Relationship goals are required")
    .max(VALIDATION_LIMITS.RELATIONSHIP_GOALS_MAX_LENGTH, `Relationship goals must be less than ${VALIDATION_LIMITS.RELATIONSHIP_GOALS_MAX_LENGTH} characters`),
  idealPartnerAgeRange: z.string()
    .optional(),
  idealPartnerLocation: z.string()
    .optional()
    .refine((val) => !val || val.length <= VALIDATION_LIMITS.IDEAL_PARTNER_LOCATION_MAX_LENGTH, `Ideal partner location must be less than ${VALIDATION_LIMITS.IDEAL_PARTNER_LOCATION_MAX_LENGTH} characters`),
  idealPartnerProfession: z.string()
    .optional()
    .refine((val) => !val || val.length <= VALIDATION_LIMITS.IDEAL_PARTNER_PROFESSION_MAX_LENGTH, `Ideal partner profession must be less than ${VALIDATION_LIMITS.IDEAL_PARTNER_PROFESSION_MAX_LENGTH} characters`),
  idealPartnerQualities: z.string()
    .min(1, "Ideal partner qualities are required")
    .refine((val) => val.length <= VALIDATION_LIMITS.IDEAL_PARTNER_QUALITIES_MAX_LENGTH, `Ideal partner qualities must be less than ${VALIDATION_LIMITS.IDEAL_PARTNER_QUALITIES_MAX_LENGTH} characters`),
  timeline: z.string()
    .min(1, "Timeline is required"),
  investmentLevel: z.string()
    .min(1, "Investment level is required"),
  commitmentLevel: z.string()
    .min(1, "Commitment level is required"),
  expectations: z.string()
    .min(1, "Expectations are required")
    .refine((val) => val.length <= VALIDATION_LIMITS.EXPECTATIONS_MAX_LENGTH, `Expectations must be less than ${VALIDATION_LIMITS.EXPECTATIONS_MAX_LENGTH} characters`),
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
    .max(VALIDATION_LIMITS.NAME_MAX_LENGTH, `First name must be less than ${VALIDATION_LIMITS.NAME_MAX_LENGTH} characters`)
    .regex(/^[a-zA-Z\s-']+$/, "First name contains invalid characters"),
  lastName: z.string()
    .min(1, "Last name is required")
    .max(VALIDATION_LIMITS.NAME_MAX_LENGTH, `Last name must be less than ${VALIDATION_LIMITS.NAME_MAX_LENGTH} characters`)
    .regex(/^[a-zA-Z\s-']+$/, "Last name contains invalid characters"),
  email: z.string()
    .email("Please enter a valid email address")
    .max(VALIDATION_LIMITS.EMAIL_MAX_LENGTH, `Email must be less than ${VALIDATION_LIMITS.EMAIL_MAX_LENGTH} characters`),
  phone: z.string()
    .min(1, "Phone number is required")
    .refine((val) => {
      const phoneRegex = new RegExp(`^\\+?[\\d\\s()-]{${VALIDATION_LIMITS.PHONE_MIN_LENGTH},${VALIDATION_LIMITS.PHONE_MAX_LENGTH}}$`);
      return phoneRegex.test(val);
    }, "Please enter a valid phone number"),
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
    .refine((val) => val.length <= VALIDATION_LIMITS.LOCATION_MAX_LENGTH, `Location must be less than ${VALIDATION_LIMITS.LOCATION_MAX_LENGTH} characters`),
  relationshipStatus: z.string()
    .min(1, "Relationship status is required"),
  backgroundInfo: z.string()
    .min(1, "Background info is required")
    .refine((val) => val.length <= VALIDATION_LIMITS.BACKGROUND_INFO_MAX_LENGTH, `Background info must be less than ${VALIDATION_LIMITS.BACKGROUND_INFO_MAX_LENGTH} characters`),
  questions: z.string()
    .optional()
    .refine((val) => !val || val.length <= VALIDATION_LIMITS.QUESTIONS_MAX_LENGTH, `Questions must be less than ${VALIDATION_LIMITS.QUESTIONS_MAX_LENGTH} characters`),
});

// Auth validation schema
export const authSchema = z.object({
  email: z.string()
    .email("Please enter a valid email address")
    .max(VALIDATION_LIMITS.EMAIL_MAX_LENGTH, `Email must be less than ${VALIDATION_LIMITS.EMAIL_MAX_LENGTH} characters`),
  password: z.string()
    .min(VALIDATION_LIMITS.PASSWORD_MIN_LENGTH, `Password must be at least ${VALIDATION_LIMITS.PASSWORD_MIN_LENGTH} characters`)
    .max(VALIDATION_LIMITS.PASSWORD_MAX_LENGTH, `Password must be less than ${VALIDATION_LIMITS.PASSWORD_MAX_LENGTH} characters`)
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      "Password must contain at least one lowercase letter, one uppercase letter, and one number"
    ),
  firstName: z.string()
    .min(1, "First name is required")
    .max(VALIDATION_LIMITS.NAME_MAX_LENGTH, `First name must be less than ${VALIDATION_LIMITS.NAME_MAX_LENGTH} characters`)
    .regex(/^[a-zA-Z\s-']+$/, "First name contains invalid characters")
    .optional(),
  lastName: z.string()
    .min(1, "Last name is required")
    .max(VALIDATION_LIMITS.NAME_MAX_LENGTH, `Last name must be less than ${VALIDATION_LIMITS.NAME_MAX_LENGTH} characters`)
    .regex(/^[a-zA-Z\s-']+$/, "Last name contains invalid characters")
    .optional(),
});

export type ApplicationFormData = z.infer<typeof applicationFormSchema>;
export type DiscoveryCallFormData = z.infer<typeof discoveryCallSchema>;
export type AuthFormData = z.infer<typeof authSchema>;