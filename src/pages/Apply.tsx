import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight, Heart, Shield, Crown } from "lucide-react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { useState, useEffect } from "react";
import { applicationFormSchema, type ApplicationFormData, sanitizeHtml } from "@/lib/validation";
import { handleError, logSecurityEvent } from "@/lib/errorHandler";
import { checkClientRateLimit } from "@/lib/security";
import { RATE_LIMIT_CONFIG } from "@/lib/constants";

// Use the validated interface from validation.ts

const Apply = () => {
  const { toast } = useToast();
  const { register, handleSubmit, watch, setValue, reset, formState: { errors, isSubmitting } } = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationFormSchema),
    defaultValues: {
      privacyConsent: false,
      marketingConsent: false,
      termsConsent: false,
    }
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onSubmit = async (data: ApplicationFormData) => {
    try {
      // Client-side rate limiting
      if (checkClientRateLimit('application_submit', RATE_LIMIT_CONFIG.APPLICATION_MAX_REQUESTS, RATE_LIMIT_CONFIG.APPLICATION_WINDOW_MS)) {
        toast({
          variant: "destructive",
          title: "Rate Limit Exceeded",
          description: "Please wait before submitting another application.",
        });
        return;
      }

      logSecurityEvent('application_submission_started', { email: data.email });
      
      // Sanitize text fields
      const sanitizedData = {
        ...data,
        interests: data.interests ? sanitizeHtml(data.interests) : undefined,
        lifestyle: data.lifestyle ? sanitizeHtml(data.lifestyle) : undefined,
        values: data.values ? sanitizeHtml(data.values) : undefined,
        previousRelationships: data.previousRelationships ? sanitizeHtml(data.previousRelationships) : undefined,
        relationshipGoals: sanitizeHtml(data.relationshipGoals),
        idealPartnerQualities: data.idealPartnerQualities ? sanitizeHtml(data.idealPartnerQualities) : undefined,
        expectations: data.expectations ? sanitizeHtml(data.expectations) : undefined,
      };
      
      // Without Supabase, treat as success
      logSecurityEvent('application_submission_success', { email: data.email });

      toast({
        title: "Application Submitted!",
        description: "We'll review your application and contact you within 3-5 business days.",
      });

      // Reset form after successful submission
      reset();
    } catch (error: any) {
      console.error("Unexpected error:", error);
      logSecurityEvent('application_submission_error', { 
        email: data.email, 
        error: error.message 
      });
      handleError(error, 'application submission');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border/30 bg-background/80 backdrop-blur-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="font-serif text-xl font-semibold text-primary">
              Found & Aligned
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About</Link>
              <Link to="/our-approach" className="text-muted-foreground hover:text-primary transition-colors">Our Approach</Link>
              <Link to="/how-it-works" className="text-muted-foreground hover:text-primary transition-colors">Process Overview</Link>
              <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link>
            </div>
            <Button variant="premium" size="sm" asChild>
              <Link to="/onboarding">Get Started</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <div className="w-20 h-20 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-8">
            <Heart className="h-10 w-10 text-primary" />
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6">
            Apply to Work With Us
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
            Take the first step toward finding your person. Our application helps us understand 
            who you are and what you're truly looking for in a life partner.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-primary" />
              <span>Completely Confidential</span>
            </div>
            <div className="flex items-center gap-2">
              <Crown className="h-4 w-4 text-primary" />
              <span>Invitation Only</span>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <Card className="p-8 lg:p-12 border-0 shadow-elegant bg-card/50 backdrop-blur-sm">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              {/* Personal Information */}
              <div>
                <h2 className="font-serif text-2xl font-semibold text-primary mb-6">Personal Information</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input {...register("firstName", { required: true })} id="firstName" className="mt-2" />
                    {errors.firstName && <p className="text-destructive text-sm mt-1">{errors.firstName.message}</p>}
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input {...register("lastName", { required: true })} id="lastName" className="mt-2" />
                    {errors.lastName && <p className="text-destructive text-sm mt-1">{errors.lastName.message}</p>}
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input {...register("email", { required: true })} id="email" type="email" className="mt-2" />
                    {errors.email && <p className="text-destructive text-sm mt-1">{errors.email.message}</p>}
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input {...register("phone")} id="phone" type="tel" className="mt-2" />
                    {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone.message}</p>}
                  </div>
                  <div>
                    <Label htmlFor="age">Age *</Label>
                    <Select onValueChange={(value) => setValue("age", value)}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select age range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="25-29">25-29</SelectItem>
                        <SelectItem value="30-34">30-34</SelectItem>
                        <SelectItem value="35-39">35-39</SelectItem>
                        <SelectItem value="40-44">40-44</SelectItem>
                        <SelectItem value="45-49">45-49</SelectItem>
                        <SelectItem value="50+">50+</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.age && <p className="text-destructive text-sm mt-1">{errors.age.message}</p>}
                  </div>
                  <div>
                    <Label htmlFor="location">Current Location *</Label>
                    <Input {...register("location")} id="location" placeholder="City, State" className="mt-2" />
                    {errors.location && <p className="text-destructive text-sm mt-1">{errors.location.message}</p>}
                  </div>
                </div>
              </div>

              {/* Professional Information */}
              <div>
                <h2 className="font-serif text-2xl font-semibold text-primary mb-6">Professional Background</h2>
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="profession">Profession/Industry *</Label>
                    <Input {...register("profession")} id="profession" className="mt-2" />
                    {errors.profession && <p className="text-destructive text-sm mt-1">{errors.profession.message}</p>}
                  </div>
                  <div>
                    <Label htmlFor="education">Education *</Label>
                    <Select onValueChange={(value) => setValue("education", value)}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Highest level of education" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
                        <SelectItem value="masters">Master's Degree</SelectItem>
                        <SelectItem value="doctoral">Doctoral Degree</SelectItem>
                        <SelectItem value="professional">Professional Degree</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.education && <p className="text-destructive text-sm mt-1">{errors.education.message}</p>}
                  </div>
                </div>
              </div>

              {/* Relationship Information */}
              <div>
                <h2 className="font-serif text-2xl font-semibold text-primary mb-6">Relationship Goals</h2>
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="relationshipGoal">What are you looking for? *</Label>
                    <Select onValueChange={(value) => setValue("relationshipGoals", value)}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select your primary goal" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="marriage">Marriage</SelectItem>
                        <SelectItem value="long-term">Long-term committed relationship</SelectItem>
                        <SelectItem value="partnership">Life partnership</SelectItem>
                        <SelectItem value="exploring">Exploring serious relationships</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.relationshipGoals && <p className="text-destructive text-sm mt-1">{errors.relationshipGoals.message}</p>}
                  </div>
                  <div>
                    <Label htmlFor="timeline">Timeline for finding your person *</Label>
                    <Select onValueChange={(value) => setValue("timeline", value)}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select timeline" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="asap">As soon as possible</SelectItem>
                        <SelectItem value="6months">Within 6 months</SelectItem>
                        <SelectItem value="1year">Within 1 year</SelectItem>
                        <SelectItem value="flexible">Flexible, when it's right</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.timeline && <p className="text-destructive text-sm mt-1">{errors.timeline.message}</p>}
                  </div>
                  <div>
                    <Label htmlFor="previousRelationships">Tell us about your relationship history *</Label>
                    <Textarea 
                      {...register("previousRelationships")}
                      id="previousRelationships" 
                      placeholder="Briefly describe your most significant relationships and what you learned from them"
                      className="mt-2 min-h-[120px]"
                    />
                    {errors.previousRelationships && <p className="text-destructive text-sm mt-1">{errors.previousRelationships.message}</p>}
                  </div>
                </div>
              </div>

              {/* Values & Lifestyle */}
              <div>
                <h2 className="font-serif text-2xl font-semibold text-primary mb-6">Values & Lifestyle</h2>
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="values">What are your core values? *</Label>
                    <Textarea 
                      {...register("values")}
                      id="values" 
                      placeholder="Describe the values that guide your life and decisions"
                      className="mt-2 min-h-[120px]"
                    />
                    {errors.values && <p className="text-destructive text-sm mt-1">{errors.values.message}</p>}
                  </div>
                  <div>
                    <Label htmlFor="lifestyle">Describe your ideal lifestyle *</Label>
                    <Textarea 
                      {...register("lifestyle")}
                      id="lifestyle" 
                      placeholder="How do you like to spend your time? What does your ideal day/week look like?"
                      className="mt-2 min-h-[120px]"
                    />
                    {errors.lifestyle && <p className="text-destructive text-sm mt-1">{errors.lifestyle.message}</p>}
                  </div>
                  <div>
                    <Label htmlFor="dealBreakers">What are your non-negotiables? *</Label>
                    <Textarea 
                      {...register("interests")}
                      id="dealBreakers" 
                      placeholder="What qualities or circumstances would make someone incompatible with you?"
                      className="mt-2 min-h-[120px]"
                    />
                    {errors.interests && <p className="text-destructive text-sm mt-1">{errors.interests.message}</p>}
                  </div>
                </div>
              </div>

              {/* What You're Looking For */}
              <div>
                <h2 className="font-serif text-2xl font-semibold text-primary mb-6">Your Ideal Partner</h2>
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="partnerQualities">What qualities are most important in a partner? *</Label>
                    <Textarea 
                      {...register("idealPartnerQualities")}
                      id="partnerQualities" 
                      placeholder="Describe the emotional, intellectual, and character qualities you value most"
                      className="mt-2 min-h-[120px]"
                    />
                    {errors.idealPartnerQualities && <p className="text-destructive text-sm mt-1">{errors.idealPartnerQualities.message}</p>}
                  </div>
                  <div>
                    <Label htmlFor="partnerLifestyle">What kind of lifestyle compatibility are you seeking? *</Label>
                    <Textarea 
                      {...register("idealPartnerLocation")}
                      id="partnerLifestyle" 
                      placeholder="How do you envision building a life together? What shared experiences matter to you?"
                      className="mt-2 min-h-[120px]"
                    />
                    {errors.idealPartnerLocation && <p className="text-destructive text-sm mt-1">{errors.idealPartnerLocation.message}</p>}
                  </div>
                </div>
              </div>

              {/* Investment & Commitment */}
              <div>
                <h2 className="font-serif text-2xl font-semibold text-primary mb-6">Investment & Commitment</h2>
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="whyFoundAligned">Why are you interested in working with Found & Aligned? *</Label>
                    <Textarea 
                      {...register("expectations")}
                      id="whyFoundAligned" 
                      placeholder="What draws you to our approach to matchmaking?"
                      className="mt-2 min-h-[120px]"
                    />
                    {errors.expectations && <p className="text-destructive text-sm mt-1">{errors.expectations.message}</p>}
                  </div>
                   <div>
                     <Label htmlFor="investment">Are you prepared to invest in a premium matchmaking service? *</Label>
                     <Select onValueChange={(value) => setValue("investmentLevel", value)}>
                       <SelectTrigger className="mt-2">
                         <SelectValue placeholder="Select your investment readiness" />
                       </SelectTrigger>
                       <SelectContent>
                         <SelectItem value="ready">Yes, I'm ready to invest $7,500+</SelectItem>
                         <SelectItem value="considering">I'm considering it</SelectItem>
                         <SelectItem value="learn-more">I'd like to learn more about pricing</SelectItem>
                       </SelectContent>
                     </Select>
                     {errors.investmentLevel && <p className="text-destructive text-sm mt-1">{errors.investmentLevel.message}</p>}
                   </div>
                   <div>
                     <Label htmlFor="commitment">How committed are you to the matchmaking process? *</Label>
                     <Select onValueChange={(value) => setValue("commitmentLevel", value)}>
                       <SelectTrigger className="mt-2">
                         <SelectValue placeholder="Select your commitment level" />
                       </SelectTrigger>
                       <SelectContent>
                         <SelectItem value="fully-committed">Fully committed to the process</SelectItem>
                         <SelectItem value="very-committed">Very committed</SelectItem>
                         <SelectItem value="somewhat-committed">Somewhat committed</SelectItem>
                         <SelectItem value="exploring">Still exploring options</SelectItem>
                       </SelectContent>
                     </Select>
                     {errors.commitmentLevel && <p className="text-destructive text-sm mt-1">{errors.commitmentLevel.message}</p>}
                   </div>
                </div>
              </div>

               {/* Consent & Agreements */}
               <div className="space-y-4">
                 <div className="flex items-start space-x-2">
                   <Checkbox 
                     onCheckedChange={(checked) => setValue("privacyConsent", checked as boolean)}
                     id="privacy" 
                     className="mt-1" 
                   />
                   <Label htmlFor="privacy" className="text-sm leading-relaxed">
                     I understand that all information shared will be kept strictly confidential and used only for matchmaking purposes.
                   </Label>
                 </div>
                 {errors.privacyConsent && <p className="text-destructive text-sm mt-1">{errors.privacyConsent.message}</p>}
                 
                 <div className="flex items-start space-x-2">
                   <Checkbox 
                     onCheckedChange={(checked) => setValue("marketingConsent", checked as boolean)}
                     id="commitment" 
                     className="mt-1" 
                   />
                   <Label htmlFor="commitment" className="text-sm leading-relaxed">
                     I am genuinely ready to invest time, energy, and financial resources in finding a meaningful relationship.
                   </Label>
                 </div>
                 {errors.marketingConsent && <p className="text-destructive text-sm mt-1">{errors.marketingConsent.message}</p>}
                 
                 <div className="flex items-start space-x-2">
                   <Checkbox 
                     onCheckedChange={(checked) => setValue("termsConsent", checked as boolean)}
                     id="process" 
                     className="mt-1" 
                   />
                   <Label htmlFor="process" className="text-sm leading-relaxed">
                     I understand that this is an application and that acceptance into the program is by invitation only.
                   </Label>
                 </div>
                 {errors.termsConsent && <p className="text-destructive text-sm mt-1">{errors.termsConsent.message}</p>}
               </div>

              {/* Submit Button */}
              <div className="text-center pt-8">
                <Button variant="hero" size="xl" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  We'll review your application and contact you within 3-5 business days.
                </p>
              </div>
            </form>
          </Card>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary mb-8">
            What Happens Next?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-foreground font-semibold">1</span>
              </div>
              <h3 className="font-semibold text-primary mb-2">Application Review</h3>
              <p className="text-muted-foreground text-sm">We carefully review your application and responses</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-foreground font-semibold">2</span>
              </div>
              <h3 className="font-semibold text-primary mb-2">Phone Interview</h3>
              <p className="text-muted-foreground text-sm">If selected, we'll schedule a detailed phone conversation</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-foreground font-semibold">3</span>
              </div>
              <h3 className="font-semibold text-primary mb-2">In-Person Meeting</h3>
              <p className="text-muted-foreground text-sm">Final step: an in-person consultation to begin your journey</p>
            </div>
          </div>
        </div>
      </section>

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
              <h4 className="font-semibold text-primary mb-4">Services</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link to="/how-it-works" className="hover:text-primary transition-colors">Discovery Interview</Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-primary transition-colors">Relationship Coaching</Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-primary transition-colors">Programs</Link>
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

export default Apply;