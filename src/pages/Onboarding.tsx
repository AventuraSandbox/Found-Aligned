import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, ArrowLeft, Heart, Check } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { handleError, logSecurityEvent } from "@/lib/errorHandler";
import { checkClientRateLimit } from "@/lib/security";
import { sanitizeHtml } from "@/lib/validation";
import { RATE_LIMIT_CONFIG } from "@/lib/constants";

interface OnboardingData {
  // Step 1: Basic Info
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  
  // Step 2: Demographics
  age: string;
  location: string;
  gender: string;
  
  // Step 3: Professional
  profession: string;
  education: string;
  
  // Step 4: Relationship Goals
  relationshipGoal: string;
  timeline: string;
  relationshipStatus: string;
  
  // Step 5: Partner Preferences
  seekingGender: string;
  importantQualities: string;
  
  // Step 6: Values & Lifestyle
  coreValues: string;
  lifestyle: string;
  
  // Step 7: Investment & Next Steps
  investmentLevel: string;
  commitmentLevel: string;
  preferredNextStep: string;
}

const Onboarding = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<OnboardingData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    age: "",
    location: "",
    gender: "",
    profession: "",
    education: "",
    relationshipGoal: "",
    timeline: "",
    relationshipStatus: "",
    seekingGender: "",
    importantQualities: "",
    coreValues: "",
    lifestyle: "",
    investmentLevel: "",
    commitmentLevel: "",
    preferredNextStep: ""
  });

  const updateField = (field: keyof OnboardingData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    // Validate current step
    const validation = validateStep(currentStep);
    if (!validation.isValid) {
      toast({
        variant: "destructive",
        title: "Required Information",
        description: validation.message
      });
      return;
    }
    
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const validateStep = (step: number): { isValid: boolean; message: string } => {
    switch (step) {
      case 0:
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
          return { isValid: false, message: "Please fill in all required fields" };
        }
        if (!formData.email.includes('@')) {
          return { isValid: false, message: "Please enter a valid email address" };
        }
        return { isValid: true, message: "" };
      
      case 1:
        if (!formData.age || !formData.location || !formData.gender) {
          return { isValid: false, message: "Please complete all fields" };
        }
        return { isValid: true, message: "" };
      
      case 2:
        if (!formData.profession || !formData.education) {
          return { isValid: false, message: "Please complete all fields" };
        }
        return { isValid: true, message: "" };
      
      case 3:
        if (!formData.relationshipGoal || !formData.timeline || !formData.relationshipStatus) {
          return { isValid: false, message: "Please complete all fields" };
        }
        return { isValid: true, message: "" };
      
      case 4:
        if (!formData.seekingGender || !formData.importantQualities) {
          return { isValid: false, message: "Please complete all fields" };
        }
        return { isValid: true, message: "" };
      
      case 5:
        if (!formData.coreValues || !formData.lifestyle) {
          return { isValid: false, message: "Please complete all fields" };
        }
        return { isValid: true, message: "" };
      
      case 6:
        if (!formData.investmentLevel || !formData.commitmentLevel || !formData.preferredNextStep) {
          return { isValid: false, message: "Please complete all fields" };
        }
        return { isValid: true, message: "" };
      
      default:
        return { isValid: true, message: "" };
    }
  };

  const formatEmailContent = (data: OnboardingData): string => {
    const ageRangeLabel = data.age;
    const educationLabels: Record<string, string> = {
      'bachelors': "Bachelor's Degree",
      'masters': "Master's Degree",
      'doctoral': "Doctoral Degree",
      'professional': "Professional Degree",
      'other': "Other"
    };
    const relationshipGoalLabels: Record<string, string> = {
      'marriage': 'Marriage',
      'long-term': 'Long-term committed relationship',
      'partnership': 'Life partnership',
      'exploring': 'Exploring serious relationships'
    };
    const timelineLabels: Record<string, string> = {
      'asap': 'As soon as possible',
      '6months': 'Within 6 months',
      '1year': 'Within 1 year',
      'flexible': "Flexible, when it's right"
    };
    const investmentLabels: Record<string, string> = {
      'ready': "Yes, I'm ready to invest $7,500+",
      'considering': "I'm considering it",
      'learn-more': "I'd like to learn more about pricing"
    };
    const commitmentLabels: Record<string, string> = {
      'fully': 'Fully committed to the process',
      'very': 'Very committed',
      'somewhat': 'Somewhat committed',
      'exploring': 'Still exploring options'
    };
    const nextStepLabels: Record<string, string> = {
      'call': 'Schedule a discovery call to learn more',
      'review': 'Have someone review my application',
      'start': "I'm ready to start immediately"
    };

    return `
New Onboarding Application Submission
=====================================

BASIC INFORMATION
-----------------
Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Phone: ${data.phone}

DEMOGRAPHICS
------------
Age Range: ${ageRangeLabel}
Location: ${data.location}
Gender: ${data.gender}

PROFESSIONAL BACKGROUND
-----------------------
Profession: ${data.profession}
Education: ${educationLabels[data.education] || data.education}

RELATIONSHIP GOALS
------------------
Primary Goal: ${relationshipGoalLabels[data.relationshipGoal] || data.relationshipGoal}
Timeline: ${timelineLabels[data.timeline] || data.timeline}
Current Relationship Status: ${data.relationshipStatus}

PARTNER PREFERENCES
-------------------
Open to Dating: ${data.seekingGender}

Important Qualities in a Partner:
${data.importantQualities}

VALUES & LIFESTYLE
------------------
Core Values:
${data.coreValues}

Ideal Lifestyle:
${data.lifestyle}

INVESTMENT & COMMITMENT
-----------------------
Investment Readiness: ${investmentLabels[data.investmentLevel] || data.investmentLevel}
Commitment Level: ${commitmentLabels[data.commitmentLevel] || data.commitmentLevel}
Preferred Next Step: ${nextStepLabels[data.preferredNextStep] || data.preferredNextStep}

=====================================
Submitted: ${new Date().toLocaleString()}
`.trim();
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    try {
      // Rate limiting
      if (checkClientRateLimit('onboarding_submit', RATE_LIMIT_CONFIG.APPLICATION_MAX_REQUESTS, RATE_LIMIT_CONFIG.APPLICATION_WINDOW_MS)) {
        toast({
          variant: "destructive",
          title: "Rate Limit Exceeded",
          description: "Please wait before submitting another application.",
        });
        setIsSubmitting(false);
        return;
      }

      logSecurityEvent('onboarding_submission_started', { email: formData.email });

      // Sanitize text fields
      const sanitizedData = {
        ...formData,
        importantQualities: sanitizeHtml(formData.importantQualities),
        coreValues: sanitizeHtml(formData.coreValues),
        lifestyle: sanitizeHtml(formData.lifestyle)
      };

      // Format email content with questions and answers
      const emailBody = formatEmailContent(sanitizedData);

      // Send email using mailto (opens user's email client)
      // For production, replace this with a proper email service
      const mailtoLink = `mailto:hello@foundandaligned.com?subject=New Onboarding Application - ${sanitizedData.firstName} ${sanitizedData.lastName}&body=${encodeURIComponent(emailBody)}`;
      
      // Alternative: Use Web3Forms or similar service
      // For now, we'll use fetch to send to a simple endpoint
      try {
        // You can replace this with Web3Forms, Formspree, or your own endpoint
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || 'YOUR_WEB3FORMS_ACCESS_KEY',
            subject: `New Onboarding Application - ${sanitizedData.firstName} ${sanitizedData.lastName}`,
            from_name: `${sanitizedData.firstName} ${sanitizedData.lastName}`,
            from_email: sanitizedData.email,
            to_email: 'hello@foundandaligned.com',
            message: emailBody,
          }),
        });

        if (!response.ok) {
          throw new Error('Email service failed');
        }
      } catch (emailError) {
        // Fallback: Open mailto link
        console.error('Email service error, falling back to mailto:', emailError);
        window.location.href = mailtoLink;
      }

      logSecurityEvent('onboarding_submission_success', { email: formData.email });

      // Show success and navigate
      toast({
        title: "Application Submitted Successfully!",
        description: "We'll review your application and contact you within 3-5 business days.",
      });

      // Navigate to success page or home
      setTimeout(() => {
        navigate('/');
      }, 2000);

    } catch (error) {
      handleError(error, 'onboarding submission');
      logSecurityEvent('onboarding_submission_error', { 
        email: formData.email, 
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const RadioOption = ({ value, label, selected, onClick }: { 
    value: string; 
    label: string; 
    selected: boolean;
    onClick: () => void;
  }) => (
    <button
      type="button"
      onClick={onClick}
      className={`
        w-full p-4 text-left rounded-lg border-2 transition-all
        ${selected 
          ? 'border-primary bg-primary/5' 
          : 'border-border hover:border-primary/50 bg-background'
        }
      `}
    >
      <div className="flex items-center justify-between">
        <span className="font-medium">{label}</span>
        {selected && <Check className="h-5 w-5 text-primary" />}
      </div>
    </button>
  );

  const steps = [
    // Step 0: Basic Information
    {
      title: "Let's get started!",
      subtitle: "First, tell us a bit about yourself.",
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName" className="text-base">First Name *</Label>
              <Input
                id="firstName"
                value={formData.firstName}
                onChange={(e) => updateField('firstName', e.target.value)}
                className="mt-2 h-12"
                placeholder="Your first name"
              />
            </div>
            <div>
              <Label htmlFor="lastName" className="text-base">Last Name *</Label>
              <Input
                id="lastName"
                value={formData.lastName}
                onChange={(e) => updateField('lastName', e.target.value)}
                className="mt-2 h-12"
                placeholder="Your last name"
              />
            </div>
          </div>
          <div>
            <Label htmlFor="email" className="text-base">Email Address *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => updateField('email', e.target.value)}
              className="mt-2 h-12"
              placeholder="your.email@example.com"
            />
          </div>
          <div>
            <Label htmlFor="phone" className="text-base">Phone Number *</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => updateField('phone', e.target.value)}
              className="mt-2 h-12"
              placeholder="(555) 123-4567"
            />
          </div>
        </div>
      )
    },
    
    // Step 1: Demographics
    {
      title: "Tell us about yourself",
      subtitle: "This helps us understand who you are.",
      content: (
        <div className="space-y-6">
          <div>
            <Label className="text-base mb-3 block">What's your age range? *</Label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {['25-29', '30-34', '35-39', '40-44', '45-49', '50+'].map((age) => (
                <RadioOption
                  key={age}
                  value={age}
                  label={age}
                  selected={formData.age === age}
                  onClick={() => updateField('age', age)}
                />
              ))}
            </div>
          </div>
          
          <div>
            <Label htmlFor="location" className="text-base">Where are you located? *</Label>
            <Input
              id="location"
              value={formData.location}
              onChange={(e) => updateField('location', e.target.value)}
              className="mt-2 h-12"
              placeholder="City, State"
            />
          </div>

          <div>
            <Label className="text-base mb-3 block">What's your gender? *</Label>
            <div className="grid md:grid-cols-2 gap-3">
              {['Woman', 'Man', 'Non-binary', 'Prefer not to say'].map((gender) => (
                <RadioOption
                  key={gender}
                  value={gender}
                  label={gender}
                  selected={formData.gender === gender}
                  onClick={() => updateField('gender', gender)}
                />
              ))}
            </div>
          </div>
        </div>
      )
    },

    // Step 2: Professional Background
    {
      title: "Your professional life",
      subtitle: "Help us understand your background.",
      content: (
        <div className="space-y-6">
          <div>
            <Label htmlFor="profession" className="text-base">What do you do professionally? *</Label>
            <Input
              id="profession"
              value={formData.profession}
              onChange={(e) => updateField('profession', e.target.value)}
              className="mt-2 h-12"
              placeholder="Your profession or industry"
            />
          </div>

          <div>
            <Label className="text-base mb-3 block">What's your education level? *</Label>
            <div className="space-y-3">
              {[
                { value: 'bachelors', label: "Bachelor's Degree" },
                { value: 'masters', label: "Master's Degree" },
                { value: 'doctoral', label: "Doctoral Degree" },
                { value: 'professional', label: "Professional Degree" },
                { value: 'other', label: "Other" }
              ].map((edu) => (
                <RadioOption
                  key={edu.value}
                  value={edu.value}
                  label={edu.label}
                  selected={formData.education === edu.value}
                  onClick={() => updateField('education', edu.value)}
                />
              ))}
            </div>
          </div>
        </div>
      )
    },

    // Step 3: Relationship Goals
    {
      title: "What are you looking for?",
      subtitle: "Let's understand your relationship goals.",
      content: (
        <div className="space-y-6">
          <div>
            <Label className="text-base mb-3 block">What's your primary goal? *</Label>
            <div className="space-y-3">
              {[
                { value: 'marriage', label: 'Marriage' },
                { value: 'long-term', label: 'Long-term committed relationship' },
                { value: 'partnership', label: 'Life partnership' },
                { value: 'exploring', label: 'Exploring serious relationships' }
              ].map((goal) => (
                <RadioOption
                  key={goal.value}
                  value={goal.value}
                  label={goal.label}
                  selected={formData.relationshipGoal === goal.value}
                  onClick={() => updateField('relationshipGoal', goal.value)}
                />
              ))}
            </div>
          </div>

          <div>
            <Label className="text-base mb-3 block">What's your timeline? *</Label>
            <div className="space-y-3">
              {[
                { value: 'asap', label: 'As soon as possible' },
                { value: '6months', label: 'Within 6 months' },
                { value: '1year', label: 'Within 1 year' },
                { value: 'flexible', label: "Flexible, when it's right" }
              ].map((time) => (
                <RadioOption
                  key={time.value}
                  value={time.value}
                  label={time.label}
                  selected={formData.timeline === time.value}
                  onClick={() => updateField('timeline', time.value)}
                />
              ))}
            </div>
          </div>

          <div>
            <Label className="text-base mb-3 block">Current relationship status? *</Label>
            <div className="space-y-3">
              {['Single', 'Divorced', 'Widowed', 'Separated'].map((status) => (
                <RadioOption
                  key={status}
                  value={status}
                  label={status}
                  selected={formData.relationshipStatus === status}
                  onClick={() => updateField('relationshipStatus', status)}
                />
              ))}
            </div>
          </div>
        </div>
      )
    },

    // Step 4: Partner Preferences
    {
      title: "Who are you looking for?",
      subtitle: "Tell us about your ideal partner.",
      content: (
        <div className="space-y-6">
          <div>
            <Label className="text-base mb-3 block">Who are you open to dating? *</Label>
            <div className="grid md:grid-cols-2 gap-3">
              {['Women', 'Men', 'Non-binary individuals', 'Open to all'].map((seeking) => (
                <RadioOption
                  key={seeking}
                  value={seeking}
                  label={seeking}
                  selected={formData.seekingGender === seeking}
                  onClick={() => updateField('seekingGender', seeking)}
                />
              ))}
            </div>
          </div>

          <div>
            <Label htmlFor="importantQualities" className="text-base">
              What qualities are most important in a partner? *
            </Label>
            <Textarea
              id="importantQualities"
              value={formData.importantQualities}
              onChange={(e) => updateField('importantQualities', e.target.value)}
              className="mt-2 min-h-[120px]"
              placeholder="Describe the emotional, intellectual, and character qualities you value most..."
            />
          </div>
        </div>
      )
    },

    // Step 5: Values & Lifestyle
    {
      title: "Your values matter",
      subtitle: "Help us find someone who shares your worldview.",
      content: (
        <div className="space-y-6">
          <div>
            <Label htmlFor="coreValues" className="text-base">
              What are your core values? *
            </Label>
            <Textarea
              id="coreValues"
              value={formData.coreValues}
              onChange={(e) => updateField('coreValues', e.target.value)}
              className="mt-2 min-h-[120px]"
              placeholder="What principles guide your life and decisions?..."
            />
          </div>

          <div>
            <Label htmlFor="lifestyle" className="text-base">
              Describe your ideal lifestyle *
            </Label>
            <Textarea
              id="lifestyle"
              value={formData.lifestyle}
              onChange={(e) => updateField('lifestyle', e.target.value)}
              className="mt-2 min-h-[120px]"
              placeholder="How do you like to spend your time? What does your ideal day look like?..."
            />
          </div>
        </div>
      )
    },

    // Step 6: Investment & Next Steps
    {
      title: "Investment & commitment",
      subtitle: "Let's discuss how we'll work together.",
      content: (
        <div className="space-y-6">
          <div>
            <Label className="text-base mb-3 block">
              Are you prepared to invest in premium matchmaking? *
            </Label>
            <div className="space-y-3">
              {[
                { value: 'ready', label: "Yes, I'm ready to invest $7,500+" },
                { value: 'considering', label: "I'm considering it" },
                { value: 'learn-more', label: "I'd like to learn more about pricing" }
              ].map((inv) => (
                <RadioOption
                  key={inv.value}
                  value={inv.value}
                  label={inv.label}
                  selected={formData.investmentLevel === inv.value}
                  onClick={() => updateField('investmentLevel', inv.value)}
                />
              ))}
            </div>
          </div>

          <div>
            <Label className="text-base mb-3 block">
              How committed are you to the process? *
            </Label>
            <div className="space-y-3">
              {[
                { value: 'fully', label: 'Fully committed to the process' },
                { value: 'very', label: 'Very committed' },
                { value: 'somewhat', label: 'Somewhat committed' },
                { value: 'exploring', label: 'Still exploring options' }
              ].map((com) => (
                <RadioOption
                  key={com.value}
                  value={com.value}
                  label={com.label}
                  selected={formData.commitmentLevel === com.value}
                  onClick={() => updateField('commitmentLevel', com.value)}
                />
              ))}
            </div>
          </div>

          <div>
            <Label className="text-base mb-3 block">
              What would you like as your next step? *
            </Label>
            <div className="space-y-3">
              {[
                { value: 'call', label: 'Schedule a discovery call to learn more' },
                { value: 'review', label: 'Have someone review my application' },
                { value: 'start', label: "I'm ready to start immediately" }
              ].map((next) => (
                <RadioOption
                  key={next.value}
                  value={next.value}
                  label={next.label}
                  selected={formData.preferredNextStep === next.value}
                  onClick={() => updateField('preferredNextStep', next.value)}
                />
              ))}
            </div>
          </div>
        </div>
      )
    }
  ];

  const currentStepData = steps[currentStep];
  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <nav className="border-b border-border/30 bg-background/80 backdrop-blur-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="font-serif text-xl font-semibold text-primary">
              Found & Aligned
            </Link>
            <div className="text-sm text-muted-foreground">
              Step {currentStep + 1} of {steps.length}
            </div>
          </div>
        </div>
      </nav>

      {/* Progress Bar */}
      <div className="fixed top-16 left-0 right-0 h-1 bg-secondary z-40">
        <div 
          className="h-full bg-primary transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Main Content */}
      <div className="pt-24 pb-16 min-h-screen flex items-center">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 w-full">
          <Card className="p-8 lg:p-12 border-0 shadow-elegant bg-card/50 backdrop-blur-sm">
            {/* Welcome Icon */}
            {currentStep === 0 && (
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-primary" />
              </div>
            )}

            {/* Title & Subtitle */}
            <div className="text-center mb-8">
              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-primary mb-3">
                {currentStepData.title}
              </h1>
              <p className="text-lg text-muted-foreground">
                {currentStepData.subtitle}
              </p>
            </div>

            {/* Step Content */}
            <div className="mb-8">
              {currentStepData.content}
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between gap-4 pt-6 border-t">
              <Button
                variant="outline"
                size="lg"
                onClick={handleBack}
                disabled={currentStep === 0}
                className="w-32"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>

              {currentStep < steps.length - 1 ? (
                <Button
                  variant="hero"
                  size="lg"
                  onClick={handleNext}
                  className="w-32"
                >
                  Next
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button
                  variant="hero"
                  size="lg"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-40"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                  <Check className="ml-2 h-4 w-4" />
                </Button>
              )}
            </div>
          </Card>

          {/* Privacy Note */}
          <p className="text-center text-sm text-muted-foreground mt-6">
            Your information is completely confidential and will only be used for matchmaking purposes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;

