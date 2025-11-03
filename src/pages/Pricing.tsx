import { PricingTiers } from "@/components/PricingTiers";
import { PRICING_TIERS } from "@/lib/faContent";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Shield, Crown, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
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
              <Link to="/pricing" className="text-primary font-medium">Services</Link>
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
            <Crown className="h-10 w-10 text-primary" />
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6">
            Premium Packages
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
            Human, discreet, and deeply personalized—never algorithmic. Choose the service level 
            that matches your needs and investment readiness.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-primary" />
              <span>Completely Confidential</span>
            </div>
            <div className="flex items-center gap-2">
              <Crown className="h-4 w-4 text-primary" />
              <span>Premium Service</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="h-4 w-4 text-primary" />
              <span>45+ Focused</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <PricingTiers tiers={PRICING_TIERS} />

      {/* Why Invest Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary mb-8">
            Why Invest in Premium Matchmaking?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div>
              <h3 className="font-semibold text-primary mb-4">Time is Your Most Valuable Asset</h3>
              <p className="text-muted-foreground leading-relaxed">
                At 45+, you've built a successful life. Don't waste time on incompatible matches 
                or endless swiping. We do the vetting so you can focus on connection.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-primary mb-4">Discretion & Privacy</h3>
              <p className="text-muted-foreground leading-relaxed">
                Your professional reputation matters. Our private, secure platform ensures 
                your personal life stays personal while we work behind the scenes.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-primary mb-4">Mature Relationship Priorities</h3>
              <p className="text-muted-foreground leading-relaxed">
                We understand the complexities of dating at 45+: family considerations, 
                financial compatibility, and building a shared future vision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary mb-6">
            Ready to Find Your Person?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Book a private consultation to discuss which package is right for you. 
            No pressure, just an honest conversation about your goals and our approach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/book-discovery">
                Book Private Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link to="/programs">View Specialized Programs</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
