import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Users, MessageCircle, ArrowRight, CheckCircle, Clock, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const OurApproach = () => {
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
              <Link to="/our-approach" className="text-primary font-medium">Our Approach</Link>
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
        <div className="max-w-6xl mx-auto px-6 sm:px-8 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6">
            Our Approach
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            We believe in emotional depth, intuition, and human connection—not algorithms. 
            Our methodology is built on understanding the whole person, not just their preferences.
          </p>
        </div>
      </section>

      {/* Detailed Process */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <Card className="p-10 border-0 shadow-elegant bg-card/50 backdrop-blur-sm">
              <div className="w-20 h-20 bg-gradient-accent rounded-full flex items-center justify-center mb-8">
                <Heart className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-serif text-2xl font-semibold mb-6 text-primary">
                Personal Discovery Interview
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p>Our process begins with a comprehensive 90-minute conversation that goes far beyond surface preferences.</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Deep dive into your values and life philosophy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Lifestyle assessment and future vision alignment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Relationship patterns and growth areas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Non-negotiables vs. areas for flexibility</span>
                  </li>
                </ul>
              </div>
            </Card>

            <Card className="p-10 border-0 shadow-elegant bg-card/50 backdrop-blur-sm">
              <div className="w-20 h-20 bg-gradient-accent rounded-full flex items-center justify-center mb-8">
                <Users className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-serif text-2xl font-semibold mb-6 text-primary">
                Curated Introductions
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p>Every introduction is personally vetted and thoughtfully considered for long-term compatibility.</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Hand-selected from our exclusive network</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Values and lifestyle alignment verification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Timing and life stage compatibility</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Quality over quantity approach</span>
                  </li>
                </ul>
              </div>
            </Card>

            <Card className="p-10 border-0 shadow-elegant bg-card/50 backdrop-blur-sm">
              <div className="w-20 h-20 bg-gradient-accent rounded-full flex items-center justify-center mb-8">
                <MessageCircle className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-serif text-2xl font-semibold mb-6 text-primary">
                Ongoing Support
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p>Relationship coaching and guidance throughout your journey to meaningful connection.</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Pre and post-date feedback sessions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Communication and dating strategy coaching</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Relationship development guidance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Long-term relationship support</span>
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary mb-6">
              What Makes Us Different
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We're not a dating app. We're not a database. We're a bespoke service for people who understand that finding the right person requires more than swiping.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-lg mb-4 text-primary">Complete Discretion</h3>
              <p className="text-muted-foreground">Your privacy is paramount. No profiles, no public visibility, complete confidentiality.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-lg mb-4 text-primary">Timing Matters</h3>
              <p className="text-muted-foreground">We consider where you are in life, not just what you want on paper.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-lg mb-4 text-primary">Emotional Intelligence</h3>
              <p className="text-muted-foreground">We prioritize emotional maturity and self-awareness in every match.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary mb-6">
            Ready to Experience Our Approach?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            If you're ready for a matchmaking experience that honors your intelligence and respects your time, let's start the conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/apply">
                Apply to Work With Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link to="/book-discovery">Book Discovery Call</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurApproach;