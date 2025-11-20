import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, ArrowLeft, Heart, Check } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { handleError, logSecurityEvent } from "@/lib/errorHandler";
import { checkClientRateLimit } from "@/lib/security";
import { RATE_LIMIT_CONFIG } from "@/lib/constants";

interface OnboardingData {
  // Basic Info
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  
  // Simple Questions (Tawkify-style)
  gender: string;
  seekingGender: string;
  age: string;
  location: string;
  
  // Additional Questions
  birthday: string;
  zipcode: string;
  profession: string;
  professionalStatus: string; // Retired, Student, Unemployed, or empty
  annualIncome: string;
  matchmakingBudget: string;
  
  // Security: Honeypot field (hidden from users, catches bots)
  website?: string;
}

const Onboarding = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [formData, setFormData] = useState<OnboardingData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "",
    seekingGender: "",
    age: "",
    location: "",
    birthday: "",
    zipcode: "",
    profession: "",
    professionalStatus: "",
    annualIncome: "",
    matchmakingBudget: "",
    website: "" // Honeypot field
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
        if (!formData.gender || !formData.seekingGender) {
          return { isValid: false, message: "Please complete all fields" };
        }
        return { isValid: true, message: "" };
      
      case 2:
        if (!formData.age || !formData.location) {
          return { isValid: false, message: "Please complete all fields" };
        }
        return { isValid: true, message: "" };
      
      case 3:
        if (!formData.birthday) {
          return { isValid: false, message: "Please enter your birthday" };
        }
        return { isValid: true, message: "" };
      
      case 4:
        if (!formData.zipcode) {
          return { isValid: false, message: "Please enter your zip code" };
        }
        if (formData.zipcode.length < 5) {
          return { isValid: false, message: "Please enter a valid zip code" };
        }
        return { isValid: true, message: "" };
      
      case 5:
        if (!formData.annualIncome) {
          return { isValid: false, message: "Please select your annual income range" };
        }
        return { isValid: true, message: "" };
      
      case 6:
        if (!formData.matchmakingBudget) {
          return { isValid: false, message: "Please select your matchmaking budget range" };
        }
        return { isValid: true, message: "" };
      
      default:
        return { isValid: true, message: "" };
    }
  };

  const formatEmailContent = (data: OnboardingData): string => {
    return `
New Application Submission - Found & Aligned
=============================================

CONTACT INFORMATION
-------------------
Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Phone: ${data.phone}
Birthday: ${data.birthday}
Zip Code: ${data.zipcode}

ABOUT YOU
---------
Gender: ${data.gender}
Age Range: ${data.age}
Location: ${data.location}

PROFESSIONAL INFORMATION
------------------------
${data.profession ? `Profession: ${data.profession}` : ''}
${data.professionalStatus ? `Status: ${data.professionalStatus}` : ''}
Annual Income: ${data.annualIncome}
Matchmaking Budget: ${data.matchmakingBudget}

WHO YOU'RE SEEKING
------------------
Looking for: ${data.seekingGender}

=============================================
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

      // Security: Check honeypot field (bots will fill this, humans won't see it)
      if (formData.website) {
        console.warn('Bot detected - honeypot field filled');
        logSecurityEvent('bot_submission_blocked', { email: formData.email });
        // Silently fail - don't tell bot it was caught
        setIsSubmitting(false);
        return;
      }

      // Check if Web3Forms access key is configured
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
      if (!accessKey || accessKey === 'YOUR_WEB3FORMS_ACCESS_KEY') {
        toast({
          variant: "destructive",
          title: "Email Configuration Missing",
          description: "Please set up Web3Forms access key. See QUICK_START.md for instructions.",
        });
        console.error('Web3Forms access key not configured. Please add VITE_WEB3FORMS_ACCESS_KEY to your .env file.');
        console.error('Get your free access key from: https://web3forms.com');
        setIsSubmitting(false);
        return;
      }

      // Format email content with questions and answers
      const emailBody = formatEmailContent(formData);

      // Send email via Web3Forms
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New Application - ${formData.firstName} ${formData.lastName}`,
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          to_email: 'hello@foundandaligned.com',
          message: emailBody,
          // Security: Bot spam filtering
          botcheck: false,
          // Security: Honeypot field (if filled, it's a bot)
          honey: formData.website || '',
        }),
      });

      const result = await response.json();

      if (!response.ok || result.success === false) {
        console.error('Web3Forms API Error:', result);
        throw new Error(result.message || 'Failed to send application. Please try again.');
      }

      logSecurityEvent('onboarding_submission_success', { email: formData.email });

      // Show success and navigate
      toast({
        title: "Application Submitted Successfully!",
        description: "We'll review your application and contact you within 1-3 business days.",
      });

      // Navigate to success page or home
      setTimeout(() => {
        navigate('/');
      }, 2000);

    } catch (error) {
      console.error('Form submission error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: errorMessage,
      });
      
      handleError(error, 'onboarding submission');
      logSecurityEvent('onboarding_submission_error', { 
        email: formData.email, 
        error: errorMessage
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
        w-full p-4 text-center rounded-lg border-2 transition-all
        ${selected 
          ? 'border-primary bg-primary/5' 
          : 'border-border hover:border-primary/50 bg-background'
        }
      `}
    >
      <div className="flex items-center justify-center gap-2">
        <span className="font-medium">{label}</span>
        {selected && <Check className="h-5 w-5 text-primary" />}
      </div>
    </button>
  );

  const steps = [
    // Step 0: Basic Information
    {
      title: "We can't wait to help you find your person",
      subtitle: "Let's start with your contact information.",
      content: (
        <div className="space-y-6">
          {/* Honeypot field - Hidden from users, catches bots */}
          <input
            type="text"
            name="website"
            value={formData.website || ''}
            onChange={(e) => updateField('website', e.target.value)}
            style={{ display: 'none' }}
            tabIndex={-1}
            autoComplete="off"
          />
          
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
    
    // Step 1: Gender & Preferences
    {
      title: "What's your gender?",
      subtitle: "Your answers help us determine matches in our community.",
      content: (
        <div className="space-y-8">
          <div>
            <Label className="text-base mb-4 block">What's your gender? *</Label>
            <div className="space-y-3">
              {['Woman', 'Man', 'Trans Woman', 'Trans Man', 'Intersex', 'Non-binary/Non-conforming'].map((gender) => (
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

          <div>
            <Label className="text-base mb-4 block">Who are you open to dating? *</Label>
            <div className="space-y-3">
              {['Women', 'Men', 'Trans Women', 'Trans Men', 'Intersex', 'Non-binary/Non-conforming', 'Open to all'].map((seeking) => (
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
        </div>
      )
    },

    // Step 2: Age & Location
    {
      title: "Just a bit more about you",
      subtitle: "Help us find the best matches in your area.",
      content: (
        <div className="space-y-8">
          <div>
            <Label className="text-base mb-4 block">What's your age range? *</Label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {['18-24', '25-29', '30-34', '35-39', '40-44', '45-49', '50-54', '55-59', '60+'].map((age) => (
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
        </div>
      )
    },

    // Step 3: Birthday
    {
      title: "When's your birthday?",
      subtitle: "",
      content: (
        <div className="space-y-6">
          <div className="max-w-xs mx-auto">
            <Label htmlFor="birthday" className="text-base">Birthday *</Label>
            <Input
              id="birthday"
              type="date"
              value={formData.birthday}
              onChange={(e) => updateField('birthday', e.target.value)}
              className="mt-2 h-12"
              placeholder="mm/dd/yyyy"
            />
          </div>
        </div>
      )
    },

    // Step 4: Zipcode
    {
      title: "What's your zip code?",
      subtitle: "We ask so we can make sure we have great matches in your area.",
      content: (
        <div className="space-y-6">
          <div className="max-w-xs mx-auto">
            <Label htmlFor="zipcode" className="text-base">Zip Code *</Label>
            <Input
              id="zipcode"
              type="text"
              value={formData.zipcode}
              onChange={(e) => updateField('zipcode', e.target.value)}
              className="mt-2 h-12"
              placeholder=""
              maxLength={5}
            />
          </div>
        </div>
      )
    },

    // Step 5: Professional Information
    {
      title: "How would you describe your professional situation?",
      subtitle: "Describe what you do for a living as if you were on a first date with a match.",
      content: (
        <div className="space-y-6">
          <div>
            <Label htmlFor="profession" className="text-base">Your Profession</Label>
            <Input
              id="profession"
              type="text"
              value={formData.profession}
              onChange={(e) => updateField('profession', e.target.value)}
              className="mt-2 h-12"
              placeholder="e.g., Marketing Manager, Software Engineer"
            />
          </div>

          <div>
            <Label className="text-base mb-4 block">If not employed</Label>
            <div className="grid grid-cols-3 gap-3">
              {['Retired', 'Student', 'Unemployed'].map((status) => (
                <RadioOption
                  key={status}
                  value={status}
                  label={status}
                  selected={formData.professionalStatus === status}
                  onClick={() => updateField('professionalStatus', status)}
                />
              ))}
            </div>
          </div>

          <div>
            <Label className="text-base mb-4 block text-center">Typical annual income *</Label>
            <div className="space-y-2">
              {[
                'Less than $100,000',
                '$100,000 - $150,000',
                '$150,000 - $250,000',
                '$250,000 - $500,000',
                '$500,000 - $1,000,000',
                'More than $1,000,000'
              ].map((income) => (
                <RadioOption
                  key={income}
                  value={income}
                  label={income}
                  selected={formData.annualIncome === income}
                  onClick={() => updateField('annualIncome', income)}
                />
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Matchmaking Budget",
      description: "Help us understand your investment level",
      content: (
        <div className="space-y-8">
          <div>
            <Label className="text-base mb-4 block text-center">Which best describes your annual budget for matchmaking services? *</Label>
            <div className="space-y-2">
              {[
                'Under $2,000',
                '$2,000 - $5,000',
                '$5,000 - $10,000',
                '$10,000 - $25,000',
                '$25,000+',
                'I\'m flexible based on value'
              ].map((budget) => (
                <RadioOption
                  key={budget}
                  value={budget}
                  label={budget}
                  selected={formData.matchmakingBudget === budget}
                  onClick={() => updateField('matchmakingBudget', budget)}
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
            <div className="hidden md:flex space-x-8">
              <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">Philosophy</Link>
              <Link to="/how-it-works" className="text-muted-foreground hover:text-primary transition-colors">How It Works</Link>
              <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Signature Programs</Link>
              <Link to="/specialized-programs" className="text-muted-foreground hover:text-primary transition-colors">Elite Programs</Link>
              <Link to="/our-approach" className="text-muted-foreground hover:text-primary transition-colors">About</Link>
            </div>
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
            <div className="flex items-center justify-between gap-4 pt-8 border-t mt-8">
              <Button
                variant="outline"
                size="lg"
                onClick={handleBack}
                disabled={currentStep === 0}
                className={`min-w-[140px] h-12 text-base ${currentStep === 0 ? 'invisible' : ''}`}
              >
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back
              </Button>

              {currentStep < steps.length - 1 ? (
                <Button
                  variant="hero"
                  size="lg"
                  onClick={handleNext}
                  className="min-w-[140px] h-12 text-base font-semibold"
                >
                  Continue
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              ) : (
                <Button
                  variant="hero"
                  size="lg"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="min-w-[160px] h-12 text-base font-semibold"
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-pulse">Submitting...</span>
                    </>
                  ) : (
                    <>
                      Submit Application
                      <Check className="ml-2 h-5 w-5" />
                    </>
                  )}
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

      {/* Footer */}
      <footer className="border-t border-border/30 py-12 bg-background">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="font-serif text-xl font-semibold text-primary mb-4">
                Found & Aligned
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Premium matchmaking for people ready to invest in meaningful, value-aligned relationships.
              </p>
              <p className="text-sm text-muted-foreground">
                Love, Found & Aligned.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-primary mb-4">Programs</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link to="/how-it-works" className="hover:text-primary transition-colors">Discovery Interview</Link>
                </li>
                <li>
                  <Link to="/specialized-programs" className="hover:text-primary transition-colors">Relationship Coaching</Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-primary transition-colors">All Programs</Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-primary mb-4">Connect</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link to="/onboarding" className="hover:text-primary transition-colors">Get Started</Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border/30 mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 Found & Aligned. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Onboarding;

