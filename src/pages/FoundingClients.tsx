import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Star, Crown, Users, MessageCircle, Calendar, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Clients = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
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
              <Link to="/pricing" className="text-muted-foreground hover:text-primary transition-colors">Services</Link>
            </div>
            <Button variant="premium" size="sm" asChild>
              <Link to="/apply">Apply Now</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* What's Included */}
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary mb-6">
              What's Included
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Every detail is designed to give you the highest level of service and the best possible outcome.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="p-8 border-0 shadow-elegant bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-4 text-primary">
                Comprehensive 1:1 Onboarding
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>2-hour deep discovery session</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Values and lifestyle assessment</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Relationship history analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Personal matchmaking strategy</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 border-0 shadow-elegant bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mb-6">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-4 text-primary">
                Custom Scouting & Vetting
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Personalized search beyond our network</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Thorough background verification</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>In-person pre-screening meetings</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Values alignment confirmation</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 border-0 shadow-elegant bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mb-6">
                <MessageCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-4 text-primary">
                White-Glove Support
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Pre and post-date coaching calls</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>24/7 text support during dates</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Relationship development guidance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>6 months of ongoing support</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Exclusive Benefits */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary mb-6">
              Founding Client Exclusives
            </h2>
            <p className="text-lg text-muted-foreground">
              Benefits available only to our founding members.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <Calendar className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-primary">Priority Scheduling</h3>
                <p className="text-muted-foreground">First access to new matches and preferred scheduling for all consultations.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <Crown className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-primary">Lifetime Member Rates</h3>
                <p className="text-muted-foreground">Lock in founding client pricing for any future matchmaking services.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <Users className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-primary">Exclusive Events</h3>
                <p className="text-muted-foreground">Access to private founding client mixers and relationship workshops.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <Star className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-primary">VIP Network Access</h3>
                <p className="text-muted-foreground">Priority introductions from our most exclusive and accomplished network.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment & Application */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <div className="bg-gradient-accent p-12 rounded-3xl shadow-elegant border border-accent/30 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary mb-6">
              Investment & Application
            </h2>
            
            <div className="mb-8">
              <p className="text-3xl font-serif font-bold text-primary mb-2">$15,000</p>
              <p className="text-muted-foreground">6-month founding client experience</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8 text-left">
              <div>
                <h4 className="font-semibold text-primary mb-2">What's Included</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Comprehensive onboarding</li>
                  <li>• Custom scouting & vetting</li>
                  <li>• 6 months white-glove support</li>
                  <li>• All founding client exclusives</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Application Process</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Submit detailed application</li>
                  <li>• Phone screening interview</li>
                  <li>• In-person consultation</li>
                  <li>• Background verification</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Timeline</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Applications close March 31st</li>
                  <li>• All clients onboarded by May</li>
                  <li>• First introductions within 30 days</li>
                  <li>• 6-month experience begins</li>
                </ul>
              </div>
            </div>

            <p className="text-muted-foreground mb-8">
              Applications are by invitation only. We seek emotionally intelligent individuals who are genuinely ready 
              to invest in finding their life partner through our premium service.
            </p>

            <Button variant="hero" size="xl" asChild>
              <Link to="/apply">
                Apply for Founding Client Program
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-xl font-semibold text-primary mb-3">
                Who is the ideal founding client?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Our ideal client is emotionally intelligent, self-aware, and genuinely ready for a committed relationship. 
                They understand that finding the right person is an investment and are willing to engage thoughtfully in the process.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-xl font-semibold text-primary mb-3">
                How many introductions can I expect?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Quality over quantity is our priority. Founding clients typically receive 3-5 carefully curated introductions 
                over the 6-month period, each personally vetted and thoughtfully matched to your specific criteria.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-xl font-semibold text-primary mb-3">
                What makes this different from other matchmaking services?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Our focus on alignment over compatibility, our white-glove support throughout the entire relationship journey, 
                and our commitment to working with only a small number of clients at a time ensures unprecedented personal attention.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-xl font-semibold text-primary mb-3">
                Is there a guarantee?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                While we cannot guarantee you'll find your person in 6 months, we guarantee you'll receive our full attention, 
                expert guidance, and carefully curated introductions. Most importantly, you'll gain clarity about what you're 
                truly looking for in a life partner.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;