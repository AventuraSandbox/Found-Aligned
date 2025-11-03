import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, Video, Phone, ArrowRight, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { discoveryCallSchema, type DiscoveryCallFormData, sanitizeHtml } from "@/lib/validation";
import { handleError, logSecurityEvent } from "@/lib/errorHandler";
import { checkClientRateLimit } from "@/lib/security";
import { RATE_LIMIT_CONFIG } from "@/lib/constants";

// Use the validated interface from validation.ts

const BookDiscovery = () => {
  const { toast } = useToast();
  const { register, handleSubmit, setValue, reset, formState: { errors, isSubmitting } } = useForm<DiscoveryCallFormData>({
    resolver: zodResolver(discoveryCallSchema),
  });

  const onSubmit = async (data: DiscoveryCallFormData) => {
    try {
      // Client-side rate limiting
      if (checkClientRateLimit('discovery_call_submit', RATE_LIMIT_CONFIG.DISCOVERY_CALL_MAX_REQUESTS, RATE_LIMIT_CONFIG.DISCOVERY_CALL_WINDOW_MS)) {
        toast({
          variant: "destructive",
          title: "Rate Limit Exceeded",
          description: "Please wait before submitting another discovery call request.",
        });
        return;
      }

      logSecurityEvent('discovery_call_booking_started', { email: data.email });
      
      // Sanitize text fields
      const sanitizedData = {
        ...data,
        backgroundInfo: data.backgroundInfo ? sanitizeHtml(data.backgroundInfo) : undefined,
        questions: data.questions ? sanitizeHtml(data.questions) : undefined,
      };
      
      // Without Supabase, we just simulate success
      logSecurityEvent('discovery_call_booking_success', { email: data.email });

      toast({
        title: "Discovery Call Requested!",
        description: "We'll contact you within 24 hours to schedule your call.",
      });

      // Reset form after successful submission
      reset();
    } catch (error: any) {
      console.error("Unexpected error:", error);
      logSecurityEvent('discovery_call_booking_error', { 
        email: data.email, 
        error: error.message 
      });
      handleError(error, 'discovery call booking');
    }
  };

  return (
    <div id="top" className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border/30 bg-background/80 backdrop-blur-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="font-serif text-xl font-semibold text-primary">
              Found & Aligned
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/our-approach" className="text-muted-foreground hover:text-primary transition-colors">Our Approach</Link>
              <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About</Link>
              <Link to="/founding-clients" className="text-muted-foreground hover:text-primary transition-colors">Founding Clients</Link>
            </div>
            <Button variant="premium" size="sm" asChild>
              <Link to="/apply">Apply Now</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <div className="w-20 h-20 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-8">
            <Calendar className="h-10 w-10 text-primary" />
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6">
            Book Your Discovery Call
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
            A complimentary 30-minute conversation to explore if Found & Aligned 
            is the right fit for your journey to finding meaningful love.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              <span>30 Minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <Video className="h-4 w-4 text-primary" />
              <span>Video or Phone</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="h-4 w-4 text-primary" />
              <span>Completely Confidential</span>
            </div>
          </div>
        </div>
      </section>

      {/* What We'll Discuss */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary mb-6">
              What We'll Discuss
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              This isn't a sales call—it's a genuine conversation about your relationship goals and how we might help.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center border-0 shadow-elegant bg-card/50 backdrop-blur-sm">
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-4 text-primary">
                Your Relationship Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Share what you're truly looking for in a life partner and the kind of relationship you want to build.
              </p>
            </Card>

            <Card className="p-8 text-center border-0 shadow-elegant bg-card/50 backdrop-blur-sm">
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-4 text-primary">
                Our Approach
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Learn about our methodology and how we create meaningful, lasting connections for our clients.
              </p>
            </Card>

            <Card className="p-8 text-center border-0 shadow-elegant bg-card/50 backdrop-blur-sm">
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-4 text-primary">
                Next Steps
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                If there's mutual interest, we'll discuss the application process and potential timelines.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <Card className="p-8 lg:p-12 border-0 shadow-elegant bg-card/50 backdrop-blur-sm">
            <div className="text-center mb-8">
              <h2 className="font-serif text-2xl font-semibold text-primary mb-4">
                Schedule Your Discovery Call
              </h2>
              <p className="text-muted-foreground">
                Fill out the form below and we'll send you a calendar link to book your preferred time.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
                <Label htmlFor="callType">Preferred Call Type *</Label>
                <Select onValueChange={(value) => setValue("callType", value)}>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select your preference" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="video">Video Call (Zoom)</SelectItem>
                    <SelectItem value="phone">Phone Call</SelectItem>
                    <SelectItem value="either">Either is fine</SelectItem>
                  </SelectContent>
                </Select>
                {errors.callType && <p className="text-destructive text-sm mt-1">{errors.callType.message}</p>}
              </div>

              <div>
                <Label htmlFor="timePreference">Time Preference *</Label>
                <Select onValueChange={(value) => setValue("preferredTime", value)}>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select your preferred time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="morning">Morning (9am - 12pm)</SelectItem>
                    <SelectItem value="afternoon">Afternoon (12pm - 5pm)</SelectItem>
                    <SelectItem value="evening">Evening (5pm - 8pm)</SelectItem>
                    <SelectItem value="flexible">Flexible</SelectItem>
                  </SelectContent>
                </Select>
                {errors.preferredTime && <p className="text-destructive text-sm mt-1">{errors.preferredTime.message}</p>}
              </div>

              <div>
                <Label htmlFor="timezone">Your Timezone *</Label>
                <Select onValueChange={(value) => setValue("timezone", value)}>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select your timezone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="est">Eastern Time (EST)</SelectItem>
                    <SelectItem value="cst">Central Time (CST)</SelectItem>
                    <SelectItem value="mst">Mountain Time (MST)</SelectItem>
                    <SelectItem value="pst">Pacific Time (PST)</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                {errors.timezone && <p className="text-destructive text-sm mt-1">{errors.timezone.message}</p>}
              </div>

              <div>
                <Label htmlFor="ageRange">Age Range *</Label>
                <Select onValueChange={(value) => setValue("ageRange", value)}>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select your age range" />
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
                {errors.ageRange && <p className="text-destructive text-sm mt-1">{errors.ageRange.message}</p>}
              </div>

              <div>
                <Label htmlFor="location">Current Location *</Label>
                <Input {...register("location")} id="location" placeholder="City, State" className="mt-2" />
                {errors.location && <p className="text-destructive text-sm mt-1">{errors.location.message}</p>}
              </div>

              <div>
                <Label htmlFor="relationshipStatus">Current Relationship Status *</Label>
                <Select onValueChange={(value) => setValue("relationshipStatus", value)}>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select your status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="single">Single</SelectItem>
                    <SelectItem value="divorced">Divorced</SelectItem>
                    <SelectItem value="widowed">Widowed</SelectItem>
                    <SelectItem value="separated">Separated</SelectItem>
                    <SelectItem value="complicated">It's complicated</SelectItem>
                  </SelectContent>
                </Select>
                {errors.relationshipStatus && <p className="text-destructive text-sm mt-1">{errors.relationshipStatus.message}</p>}
              </div>

              <div>
                <Label htmlFor="background">Brief Background *</Label>
                <Textarea 
                  {...register("backgroundInfo")}
                  id="background" 
                  placeholder="Tell us a bit about yourself and what you're looking for in a partner (2-3 sentences)"
                  className="mt-2 min-h-[100px]"
                />
                {errors.backgroundInfo && <p className="text-destructive text-sm mt-1">{errors.backgroundInfo.message}</p>}
              </div>

              <div>
                <Label htmlFor="questions">Questions for the Call</Label>
                <Textarea 
                  {...register("questions")}
                  id="questions" 
                  placeholder="Any specific questions you'd like to discuss during our conversation?"
                  className="mt-2 min-h-[80px]"
                />
              </div>

              <div className="text-center pt-6">
                <Button variant="hero" size="xl" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Request Discovery Call"}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  We'll send you a calendar link within 24 hours to book your preferred time.
                </p>
              </div>
            </form>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary mb-6">
              Discovery Call FAQ
            </h2>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-xl font-semibold text-primary mb-3">
                Is there any cost for the discovery call?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                No, the discovery call is completely complimentary. It's an opportunity for us to get to know each other 
                and determine if we're a good fit for working together.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-xl font-semibold text-primary mb-3">
                What should I prepare for the call?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Just come as yourself! Think about what you're genuinely looking for in a partner and relationship. 
                We'll guide the conversation—no preparation required.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-xl font-semibold text-primary mb-3">
                Will you try to sell me something?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                This isn't a sales call. We're selective about who we work with, and the discovery call helps us both 
                determine if there's a mutual fit. There's no pressure or sales pitch.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-xl font-semibold text-primary mb-3">
                How private is this conversation?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Completely confidential. Nothing we discuss will be shared with anyone, and we understand the sensitive 
                nature of these conversations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative CTA */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary mb-6">
            Prefer to Apply Directly?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            If you're ready to move forward with a full application, you can skip the discovery call 
            and apply directly to our program.
          </p>
          <Button variant="outline" size="xl" asChild>
            <Link to="/apply">
              Submit Full Application
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default BookDiscovery;