import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Check, Sparkles } from "lucide-react";

const SpecializedPrograms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Specialized Programs — Found & Aligned";
    const desc = "Specialized support for the unique challenges and opportunities of dating and relationships at 35-55";
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
              <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Core Programs</Link>
              <Link to="/specialized-programs" className="text-primary font-medium">Specialized Programs</Link>
            </div>
            <Button variant="premium" size="sm" asChild>
              <Link to="/onboarding">Get Started</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-accent mb-6">
            <Sparkles className="w-8 h-8 text-primary" />
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-primary mb-6">Specialized Programs</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Beyond matchmaking, we offer specialized support for the unique challenges and opportunities of dating and relationships at 35-55.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-8 pb-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Healing & Reset Intensive */}
            <Card className="p-8 flex flex-col border-2 border-border/50 hover:border-primary/30 transition-all shadow-lg">
              <div className="flex-1">
                <h2 className="font-serif text-2xl font-bold text-primary mb-4">
                  Healing & Reset Intensive
                </h2>
                
                <p className="text-muted-foreground italic mb-6">
                  Comprehensive recovery and renewal for those re-entering dating after divorce, breakup, or extended break.
                </p>
                
                <div className="mb-6">
                  <p className="text-4xl font-bold text-primary mb-2">$2,800</p>
                  <p className="text-muted-foreground text-sm">Cadence: 8-week program</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-primary mb-4">What's Included:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Post-divorce/breakup emotional processing & healing (3 sessions)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Attachment pattern deep-dive & limiting belief work</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Dating confidence rebuilding workshops</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Mock date practice with personalized feedback</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Personal style refresh consultation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Modern dating technology training</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Re-entry strategy & profile optimization</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <Button variant="outline" className="w-full mt-6" asChild>
                <Link to="/onboarding">Request Private Consultation</Link>
              </Button>
            </Card>

            {/* Image & Presence Transformation */}
            <Card className="p-8 flex flex-col border-2 border-border/50 hover:border-primary/30 transition-all shadow-lg">
              <div className="flex-1">
                <h2 className="font-serif text-2xl font-bold text-primary mb-4">
                  Image & Presence Transformation
                </h2>
                
                <p className="text-muted-foreground italic mb-6">
                  Develop confident, magnetic presence in person and online to make powerful first impressions.
                </p>
                
                <div className="mb-6">
                  <p className="text-4xl font-bold text-primary mb-2">$1,200</p>
                  <p className="text-muted-foreground text-sm">Cadence: 2-3 sessions over 4 weeks</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-primary mb-4">What's Included:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Personal style audit & wardrobe guidance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Body language & non-verbal communication coaching</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">In-person and online presence optimization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Shopping guidance or virtual closet edit</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">First-date outfit planning strategies</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <Button variant="outline" className="w-full mt-6" asChild>
                <Link to="/onboarding">Request Private Consultation</Link>
              </Button>
            </Card>

            {/* Emotional Intelligence & Communication Mastery */}
            <Card className="p-8 flex flex-col border-2 border-border/50 hover:border-primary/30 transition-all shadow-lg">
              <div className="flex-1">
                <h2 className="font-serif text-2xl font-bold text-primary mb-4">
                  Emotional Intelligence & Communication Mastery
                </h2>
                
                <p className="text-muted-foreground italic mb-6">
                  Build self-awareness, communication skills, and relational intelligence for creating secure, lasting connection.
                </p>
                
                <div className="mb-6">
                  <p className="text-4xl font-bold text-primary mb-2">$1,200</p>
                  <p className="text-muted-foreground text-sm">Cadence: 4 sessions over 6 weeks</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-primary mb-4">What's Included:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Attachment style awareness & secure relating skills</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Conflict navigation & difficult conversation frameworks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Emotional regulation & self-awareness building</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Dating EQ & creating healthy connection patterns</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Identifying & overcoming relationship sabotage patterns</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <Button variant="outline" className="w-full mt-6" asChild>
                <Link to="/onboarding">Request Private Consultation</Link>
              </Button>
            </Card>

            {/* Personal Brand Dating Photoshoot */}
            <Card className="p-8 flex flex-col border-2 border-border/50 hover:border-primary/30 transition-all shadow-lg">
              <div className="flex-1">
                <h2 className="font-serif text-2xl font-bold text-primary mb-4">
                  Personal Brand Dating Photoshoot
                </h2>
                
                <p className="text-muted-foreground italic mb-6">
                  Professional lifestyle photography to create authentic, compelling visual presence for dating profiles and personal brand.
                </p>
                
                <div className="mb-6">
                  <p className="text-4xl font-bold text-primary mb-2">$1,500</p>
                  <p className="text-muted-foreground text-sm">Cadence: One-day intensive (3-4 hours)</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-primary mb-4">What's Included:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Professional lifestyle photography session</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Pre-shoot styling direction & location planning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Multiple outfit changes & location variety</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Personal brand consultation for visual storytelling</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Image selection guidance for dating platforms</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <Button variant="outline" className="w-full mt-6" asChild>
                <Link to="/onboarding">Request Private Consultation</Link>
              </Button>
            </Card>

            {/* Relationship Support & Integration */}
            <Card className="p-8 flex flex-col border-2 border-border/50 hover:border-primary/30 transition-all shadow-lg">
              <div className="flex-1">
                <h2 className="font-serif text-2xl font-bold text-primary mb-4">
                  Relationship Support & Integration
                </h2>
                
                <p className="text-muted-foreground italic mb-6">
                  Guided support for navigating the transition from dating to committed partnership and assessing long-term compatibility.
                </p>
                
                <div className="mb-6">
                  <p className="text-4xl font-bold text-primary mb-2">$3,200</p>
                  <p className="text-muted-foreground text-sm">Cadence: 3-6 months (flexible)</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-primary mb-4">What's Included:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Relationship transition coaching (6 sessions)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Navigating exclusivity & DTR conversations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Integrating into each other's lives & social circles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Meeting families & establishing healthy boundaries</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Partnership accelerator assessment for 3-12 month relationships</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Premarital-style compatibility deep-dive</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Financial values & lifestyle alignment audit</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Long-term vision alignment & couples coaching sessions</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <Button variant="outline" className="w-full mt-6" asChild>
                <Link to="/onboarding">Request Private Consultation</Link>
              </Button>
            </Card>

            {/* New Chapter Social Club */}
            <Card className="p-8 flex flex-col border-2 border-border/50 hover:border-primary/30 transition-all shadow-lg">
              <div className="flex-1">
                <h2 className="font-serif text-2xl font-bold text-primary mb-4">
                  New Chapter Social Club
                </h2>
                
                <p className="text-muted-foreground italic mb-6">
                  Community and lifestyle enrichment for clients & alumni seeking connection and growth beyond matchmaking.
                </p>
                
                <div className="mb-6">
                  <p className="text-4xl font-bold text-primary mb-2">$200/month</p>
                  <p className="text-muted-foreground text-sm">Cadence: Monthly</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-primary mb-4">What's Included:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Monthly curated social events in major cities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Wine tastings, cultural outings, travel groups</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Networking with successful mature singles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Alumni mentorship programs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Access to private online community</span>
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

export default SpecializedPrograms;

