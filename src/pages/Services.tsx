import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Check, Crown } from "lucide-react";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Core Programs — Found & Aligned";
    const desc = "Personalized matchmaking designed for your unique journey";
    let tag = document.querySelector('meta[name="description"]');
    if (!tag) {
      tag = document.createElement('meta');
      tag.setAttribute('name', 'description');
      document.head.appendChild(tag);
    }
    tag.setAttribute('content', desc);
  }, []);
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
              <Link to="/services" className="text-primary font-medium">Core Programs</Link>
              <Link to="/specialized-programs" className="text-muted-foreground hover:text-primary transition-colors">Specialized Programs</Link>
            </div>
            <Button variant="premium" size="sm" asChild>
              <Link to="/onboarding">Get Started</Link>
            </Button>
          </div>
        </div>
      </nav>

      <section className="pt-24 pb-8">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-accent mb-6">
            <Crown className="w-8 h-8 text-primary" />
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-primary mb-6">Core Programs</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Human, discreet, and deeply personalized - never algorithmic. Choose the service level that matches your needs and investment readiness.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>Complete Guidance</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>Premium Service</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>Results-Driven</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <h2 className="font-serif text-3xl font-bold text-center text-primary mb-4">Core Programs</h2>
          <p className="text-center text-muted-foreground mb-12">
            Human, discreet, and deeply personalized - never algorithmic. Choose the service level that matches your needs and investment readiness.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Discovery Alignment */}
            <Card className="p-8 flex flex-col border-2 border-border/50 hover:border-primary/30 transition-all shadow-lg">
              <div className="flex-1">
                <h2 className="font-serif text-2xl font-bold text-primary mb-4">
                  Discovery Alignment
                </h2>
                
                <p className="text-muted-foreground italic mb-6">
                  For professionals exploring matchmaking or seeking clarity on their dating patterns before committing to active matching.
                </p>
                
                <div className="mb-6">
                  <p className="text-4xl font-bold text-primary mb-2">$750</p>
                  <p className="text-muted-foreground text-sm">Duration: One-time foundational package</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-primary mb-4">What's Included:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">90-minute personalized onboarding session</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Comprehensive compatibility & attachment-style assessment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Personalized "Alignment Blueprint" report</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Inclusion in Found & Aligned match pool</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <Button variant="outline" className="w-full mt-6" asChild>
                <Link to="/onboarding">Request Private Consultation</Link>
              </Button>
            </Card>

            {/* Signature Alignment */}
            <Card className="p-8 flex flex-col border-2 border-border/50 hover:border-primary/30 transition-all shadow-lg">
              <div className="flex-1">
                <h2 className="font-serif text-2xl font-bold text-primary mb-4">
                  Signature Alignment
                </h2>
                
                <p className="text-muted-foreground italic mb-6">
                  For busy professionals ready for curated introductions with matches who share their values and lifestyle.
                </p>
                
                <div className="mb-6">
                  <p className="text-4xl font-bold text-primary mb-2">$6,500</p>
                  <p className="text-muted-foreground text-sm">Duration: 6 months</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-primary mb-4">What's Included:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Dedicated regional matchmaker assigned to you</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Up to 18 hand-selected introductions (3/month)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Personal vetting interviews for all potential matches</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Pre-date alignment coaching & preparation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Post-date feedback sessions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Monthly progress & strategy sessions</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <Button variant="outline" className="w-full mt-6" asChild>
                <Link to="/onboarding">Request Private Consultation</Link>
              </Button>
            </Card>

            {/* Elevated Alignment - Most Popular */}
            <Card className="p-8 flex flex-col border-2 border-primary shadow-xl relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              
              <div className="flex-1">
                <h2 className="font-serif text-2xl font-bold text-primary mb-4">
                  Elevated Alignment
                </h2>
                
                <p className="text-muted-foreground italic mb-6">
                  Comprehensive service for established professionals seeking long-term partnership with premium support and personal transformation.
                </p>
                
                <p className="text-sm text-muted-foreground mb-4">
                  <span className="font-semibold">Ideal for:</span> Professionals ages 35-55 ready for curated introductions and dedicated support
                </p>
                
                <div className="mb-6">
                  <p className="text-4xl font-bold text-primary mb-2">$21,000</p>
                  <p className="text-muted-foreground text-sm">Duration: 12 months</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-primary mb-4">What's Included:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Everything in Signature Alignment, plus:</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Expanded 4-state search capabilities (IL, MI, IN, WI)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Dedicated senior matchmaker</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Image & Presence Transformation (included)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Emotional Intelligence Mastery - 4 sessions (included)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Personal Brand Dating Photoshoot (included)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">6-month photo refresh session</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Pre-date coaching & post-date feedback</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">First 90 days relationship support after finding a match</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Priority access to curated events</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Background verification on all matches</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <Button variant="default" className="w-full mt-6" asChild>
                <Link to="/onboarding">Request Private Consultation</Link>
              </Button>
            </Card>

            {/* Premier Alignment */}
            <Card className="p-8 flex flex-col border-2 border-border/50 hover:border-primary/30 transition-all shadow-lg">
              <div className="flex-1">
                <h2 className="font-serif text-2xl font-bold text-primary mb-4">
                  Premier Alignment
                </h2>
                
                <p className="text-muted-foreground italic mb-6">
                  White-glove concierge matchmaking for high-achieving professionals who want dedicated team support, unlimited introductions, and comprehensive transformation throughout their journey to partnership.
                </p>
                
                <p className="text-sm text-muted-foreground mb-4">
                  <span className="font-semibold">Ideal for:</span> Executives, entrepreneurs, and high-net-worth professionals committed to finding their life partner
                </p>
                
                <div className="mb-6">
                  <p className="text-4xl font-bold text-primary mb-2">$35,000</p>
                  <p className="text-muted-foreground text-sm">Duration: 18 months</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-primary mb-4">What's Included:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Unlimited introductions for 18 months</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Dedicated senior matchmaker + support team</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Expanded 4-state search with travel coordination</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Executive presence transformation package</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Professional wardrobe consultation (2 sessions)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Premium dating photoshoot (2 sessions - casual & elevated)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Advanced communication & EQ mastery (6 sessions)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Personal brand development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">VIP concierge dating services (date planning, post-date debriefs, bi-weekly strategy sessions)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">3-month intensive relationship integration coaching</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Deep background verification & reference checks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Exclusive private matchmaking events access</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Discretion protocols for public figures</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <Button variant="outline" className="w-full mt-6" asChild>
                <Link to="/onboarding">Request Private Consultation</Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Invest Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <h2 className="font-serif text-3xl font-bold text-center text-primary mb-12">
            Why Invest in Core Programs?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-serif text-xl font-semibold text-primary mb-4">
                Time is Your Most Valuable Asset
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                At 35+, you've built a successful life. Don't waste time on incompatible matches or endless swiping. We do the work, so you can focus on connection.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl font-semibold text-primary mb-4">
                Discretion & Privacy
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Your professional reputation matters. Our private, secure platform ensures your personal life stays behind the scenes.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl font-semibold text-primary mb-4">
                Mature Relationship Priorities
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We understand the complexities of dating at 35+: family considerations, financial alignment, and finding a lifetime partner with shared values.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold text-primary mb-4">
            Ready to Find Your Person?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Book a private consultation to discuss which package is right for you. No pressure, just an honest conversation about your goals and our approach.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link to="/onboarding">Book Private Consultation</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/specialized-programs">View Specialized Programs</Link>
            </Button>
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
              <h4 className="font-semibold text-primary mb-4">Core Programs</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link to="/how-it-works" className="hover:text-primary transition-colors">Discovery Interview</Link>
                </li>
                <li>
                  <Link to="/specialized-programs" className="hover:text-primary transition-colors">Relationship Coaching</Link>
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

export default Services;


