import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Users, MessageCircle, Shield, ArrowRight, Star, CheckCircle, Crown } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { ThemeToggle } from "@/components/ThemeToggle";
import { HERO, VALUE_PROPS } from "@/lib/faContent";
import heroCouple from "@/assets/hero-couple.jpg";
import lifestyleWomanAA from "@/assets/lifestyle-woman-aa.jpg";
import lifestyleMan from "@/assets/lifestyle-man.jpg";
import professionalBlondeWoman from "@/assets/professional-blonde-woman.jpg";

const Index = () => {
  const { user, signOut } = useAuth();

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
              <Link to="/programs" className="text-muted-foreground hover:text-primary transition-colors">Programs</Link>
              <Link to="/pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing</Link>
            </div>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              {user ? (
                <>
                  <span className="text-sm text-muted-foreground hidden sm:block">
                    Welcome back!
                  </span>
                  <Button variant="outline" size="sm" onClick={signOut}>
                    Sign Out
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="ghost" size="sm" asChild>
                    <Link to="/auth">Sign In</Link>
                  </Button>
                  <Button variant="premium" size="sm" asChild>
                    <Link to="/apply">Apply Now</Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <p className="uppercase tracking-wide text-sm text-muted-foreground mb-2">
                {HERO.eyebrow}
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
                {HERO.headline}
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
                {HERO.subhead}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button variant="hero" size="xl" asChild>
                  <Link to={HERO.ctaPrimary.href}>
                    {HERO.ctaPrimary.label}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <Link to={HERO.ctaSecondary.href}>{HERO.ctaSecondary.label}</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src={heroCouple}
                alt="Sophisticated couple having an intimate conversation"
                className="rounded-2xl shadow-elegant w-full h-[600px] object-cover"
                fetchPriority="high"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary mb-6">
              Who We Serve
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Accomplished professionals 45+ who've built successful lives and are ready for love that complements—not completes—who they already are. 
              Our clients understand that finding the right person is an investment worth making.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="relative group">
              <img
                src={lifestyleWomanAA}
                alt="Sophisticated African American woman reading by window"
                className="rounded-2xl shadow-elegant w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-2xl"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="font-serif text-2xl font-semibold mb-2">Mindful & Intentional</h3>
                <p className="text-white/90">Ready to invest in meaningful connection</p>
              </div>
            </div>
            
            <div className="relative group">
              <img
                src={lifestyleMan}
                alt="Sophisticated man at art gallery"
                className="rounded-2xl shadow-elegant w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-2xl"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="font-serif text-2xl font-semibold mb-2">Culturally Engaged</h3>
                <p className="text-white/90">Values depth, growth, and authentic living</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary mb-6">
              Why Choose Found & Aligned
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We understand the unique challenges and opportunities of dating at 45+.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {VALUE_PROPS.map((prop, index) => (
              <Card key={index} className="p-8 text-center border-0 shadow-elegant bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  {index === 0 && <Heart className="h-8 w-8 text-primary" />}
                  {index === 1 && <Users className="h-8 w-8 text-primary" />}
                  {index === 2 && <Shield className="h-8 w-8 text-primary" />}
                </div>
                <h3 className="font-serif text-xl font-semibold mb-4 text-primary">
                  {prop.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {prop.text}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section id="approach" className="py-16 lg:py-24 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary mb-6">
              Our Approach
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We believe in emotional depth, intuition, and human connection—not algorithms.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <Card className="p-8 text-center border-0 shadow-elegant bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-4 text-primary">
                Personal Discovery Interview
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Deep conversation about your values, lifestyle, and what truly matters to you in a partner.
              </p>
            </Card>

            <Card className="p-8 text-center border-0 shadow-elegant bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-4 text-primary">
                Curated, Values-Aligned Introductions
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Hand-selected matches based on compatibility, timing, and shared life philosophy.
              </p>
            </Card>

            <Card className="p-8 text-center border-0 shadow-elegant bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-4 text-primary">
                Relationship Coaching & Support
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Ongoing guidance and support as you navigate the journey to meaningful connection.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Found & Aligned */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary mb-6">
              Why Found & Aligned
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold mb-2 text-primary">100% Curated Matches</h3>
              <p className="text-muted-foreground text-sm">Not databases</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold mb-2 text-primary">Values & Compatibility</h3>
              <p className="text-muted-foreground text-sm">Focused on timing</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold mb-2 text-primary">Concierge-Level Service</h3>
              <p className="text-muted-foreground text-sm">& confidentiality</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold mb-2 text-primary">Never Just a Number</h3>
              <p className="text-muted-foreground text-sm">Personal attention</p>
            </div>
          </div>
        </div>
      </section>

      {/* Founding Client Invitation */}
      <section id="clients" className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <div className="bg-gradient-accent p-12 rounded-3xl shadow-elegant border border-accent/30">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary mb-6">
              Founding Client Experience
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Join our exclusive founding client program. Limited availability for discerning individuals 
              ready to invest in finding their person through our premium, white-glove service.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-left">
                <h4 className="font-semibold text-primary mb-2">1:1 Onboarding</h4>
                <p className="text-muted-foreground text-sm">Comprehensive lifestyle and values assessment</p>
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-primary mb-2">Custom Scouting</h4>
                <p className="text-muted-foreground text-sm">Personalized search for your ideal match</p>
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-primary mb-2">White-Glove Support</h4>
                <p className="text-muted-foreground text-sm">Ongoing relationship guidance and coaching</p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-2xl font-serif font-semibold text-primary mb-6">Investment: $7,500+</p>
              <Button variant="hero" size="xl" asChild>
                <Link to="/founding-clients">
                  Apply for Founding Client Program
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About the Founder */}
      <section id="about" className="py-16 lg:py-24 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary mb-6">
                Our Philosophy on Modern Love
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                "We believe alignment is the new chemistry. And we're here for people who won't settle for anything less."
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                In a world of endless options and surface-level connections, we understand that finding someone 
                who truly aligns with your values, lifestyle, and long-term vision requires intention, expertise, 
                and genuine human insight. Our approach goes beyond compatibility—we focus on the deeper 
                elements that create lasting, fulfilling relationships.
              </p>
              <Button variant="premium" size="lg" asChild>
                <Link to="/about">Learn More About Our Story</Link>
              </Button>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src={professionalBlondeWoman}
                alt="Professional blonde woman representing modern love philosophy"
                className="rounded-2xl shadow-elegant w-full h-[500px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial/Quote */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <blockquote className="text-2xl sm:text-3xl font-serif italic text-primary mb-8 leading-relaxed">
            "This isn't about finding someone to complete you—it's about finding someone 
            who complements the whole person you already are."
          </blockquote>
          <cite className="text-muted-foreground">— Found & Aligned Philosophy</cite>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-24 bg-gradient-accent">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary mb-6">
            Ready to find your person, the right way?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Join discerning individuals who understand that the best relationships 
            are worth investing in—and worth waiting for.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/apply">
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link to="/book-discovery">Book a Discovery Call</Link>
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
                Premium matchmaking for discerning individuals ready to invest 
                in meaningful, lifestyle-aligned relationships.
              </p>
              <p className="text-sm text-muted-foreground">
                Love, Found & Aligned.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-primary mb-4">Services</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Founding Client Program</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Discovery Interview</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Relationship Coaching</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-primary mb-4">Connect</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Apply Now</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Book Discovery Call</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border/30 mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Found & Aligned. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;