import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Heart, Users, Calendar, MessageCircle, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const HowItWorks = () => {
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
              <Link to="/our-approach" className="text-muted-foreground hover:text-primary transition-colors">Our Approach</Link>
              <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About</Link>
              <Link to="/how-it-works" className="text-primary font-medium">Process Overview</Link>
              <Link to="/programs" className="text-muted-foreground hover:text-primary transition-colors">Programs</Link>
              <Link to="/pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing</Link>
            </div>
            <Button variant="premium" size="sm" asChild>
              <Link to="/apply">Apply Now</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-hero">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6">
            How It Works
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Our proven process for finding meaningful, lasting connections.
          </p>
        </div>
      </section>

      {/* Proven Process Timeline */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary mb-6">
              Proven Process for Lasting Connection
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Forget endless swiping. Our personalized approach goes beyond surface-level matching to help you find a real relationship.
            </p>
          </div>

          <div className="space-y-12">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-accent rounded-full flex items-center justify-center">
                  <span className="text-3xl font-serif font-bold text-primary">01</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-2xl font-semibold text-primary mb-4">
                  Initial Consultation & Discovery
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We begin with an in-depth discovery session to understand who you are, what you value, and what you're truly looking for in a partner. This isn't a questionnaire—it's a meaningful conversation about your life, your goals, and your relationship vision.
                </p>
              </div>
            </div>

            {/* Connector Line */}
            <div className="ml-10 border-l-2 border-border/30 h-12"></div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-accent rounded-full flex items-center justify-center">
                  <span className="text-3xl font-serif font-bold text-primary">02</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-2xl font-semibold text-primary mb-4">
                  Personalized Matchmaking Strategy
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Based on your consultation, we develop a custom search strategy tailored to your unique needs. We scout our network and beyond to find matches who align with your values, lifestyle, and long-term vision—not just your checklist.
                </p>
              </div>
            </div>

            {/* Connector Line */}
            <div className="ml-10 border-l-2 border-border/30 h-12"></div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-accent rounded-full flex items-center justify-center">
                  <span className="text-3xl font-serif font-bold text-primary">03</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-2xl font-semibold text-primary mb-4">
                  Thorough Vetting & Introduction
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every potential match is carefully vetted through in-person meetings, background verification, and values alignment assessment. When we make an introduction, we provide context about why we see potential and guidance on how to approach the first date.
                </p>
              </div>
            </div>

            {/* Connector Line */}
            <div className="ml-10 border-l-2 border-border/30 h-12"></div>

            {/* Step 4 */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-accent rounded-full flex items-center justify-center">
                  <span className="text-3xl font-serif font-bold text-primary">04</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-2xl font-semibold text-primary mb-4">
                  Ongoing Support & Coaching
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Before and after each date, we're here to offer guidance, process your experience, and help you navigate the complexities of building a relationship. You'll have direct access to us throughout your journey, not just between introductions.
                </p>
              </div>
            </div>

            {/* Connector Line */}
            <div className="ml-10 border-l-2 border-border/30 h-12"></div>

            {/* Step 5 */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-accent rounded-full flex items-center justify-center">
                  <span className="text-3xl font-serif font-bold text-primary">05</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-2xl font-semibold text-primary mb-4">
                  Relationship Success & Beyond
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  When you meet someone promising, we continue to support you as the relationship develops. Our goal isn't just to make a match—it's to help you build a lasting partnership. We're invested in your long-term success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-8">
            {/* FAQ 1 */}
            <Card className="p-8 border-0 shadow-elegant bg-card/50 backdrop-blur-sm">
              <h3 className="font-serif text-xl font-semibold text-primary mb-4">
                [FAQ Question 1 - Placeholder]
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                [FAQ Answer 1 - Placeholder text goes here. This section will be customized with your specific frequently asked questions and detailed answers.]
              </p>
            </Card>

            {/* FAQ 2 */}
            <Card className="p-8 border-0 shadow-elegant bg-card/50 backdrop-blur-sm">
              <h3 className="font-serif text-xl font-semibold text-primary mb-4">
                [FAQ Question 2 - Placeholder]
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                [FAQ Answer 2 - Placeholder text goes here. This section will be customized with your specific frequently asked questions and detailed answers.]
              </p>
            </Card>

            {/* FAQ 3 */}
            <Card className="p-8 border-0 shadow-elegant bg-card/50 backdrop-blur-sm">
              <h3 className="font-serif text-xl font-semibold text-primary mb-4">
                [FAQ Question 3 - Placeholder]
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                [FAQ Answer 3 - Placeholder text goes here. This section will be customized with your specific frequently asked questions and detailed answers.]
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            If you're ready for a matchmaking experience that honors your intelligence and respects your time, let's begin.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/apply">
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;

