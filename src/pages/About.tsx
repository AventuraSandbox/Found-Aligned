import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import indianWomanConservative from "@/assets/indian-woman-conservative.jpg";
import { useEffect } from "react";

const About = () => {
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
              <Link to="/about" className="text-primary font-medium">About</Link>
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
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
                About Found & Aligned
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Found & Aligned was created for accomplished individuals ages 35-55 who've built meaningful 
              lives and are ready for love that complements who they've become. We specialize in matchmaking 
              that goes beyond compatibility to focus on true alignment: matching values, life visions, and 
              emotional intelligence. Through human insight (not algorithms), 
              personalized coaching, and genuine partnership, we help you find relationships that fit your life.
              </p>
            </div>
            <div className="relative">
              <img
                src={indianWomanConservative}
                alt="Conservative professional Indian woman representing Found & Aligned founder"
                className="rounded-2xl shadow-elegant w-full h-[600px] object-cover"
                loading="lazy"
                fetchPriority="high"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary mb-6">
              Our Story
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded on the principle that meaningful relationships require intention, not just opportunity.
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-6">
            <p>
            Found & Aligned is created for people who've built successful lives and are ready for love
             that complements (not completes) who they already are.
            </p>

            <p>
            If you're reading this, you've probably tried the apps. Maybe you've even worked with other matchmakers. 
            You know what you want, what you don't want, you're emotionally self-aware, 
            and you're done wasting time on surface-level connections or incompatible matches.
            </p>

            <p>
              We bring together expertise in psychology, relationship dynamics, and an intuitive 
              understanding of what makes long-term partnerships thrive. Having witnessed too many intelligent, 
              emotionally healthy people struggle to find their person through conventional dating methods, 
              we created Found & Aligned as an alternative that honors the complexity of modern love.
            </p>

            <p>
            So we built something different: A matchmaking experience rooted in emotional depth, human intuition, and genuine partnership. We don't just look for compatibility. 
            We look for alignment - that deeper resonance that makes a relationship not just work, but flourish.
            </p>

            <p>
              Every client we work with is someone who understands that finding the right person is an investment: In 
              time, energy, and yes, financial resources, but who also knows that the alternative is settling for less 
              than they deserve or continuing to navigate the modern dating landscape alone.
            </p>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary mb-6">
              Our Philosophy
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h3 className="font-serif text-2xl font-semibold text-primary mb-6">
                Alignment Over Chemistry
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                While chemistry is important, alignment is what creates lasting relationships. We look for matches 
                where your values, life vision, and growth trajectory naturally complement each other.
              </p>
              
              <h3 className="font-serif text-2xl font-semibold text-primary mb-6">
                Quality Over Quantity
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We'd rather introduce you to three deeply compatible people than thirty surface-level matches. 
                Every introduction is carefully considered and personally vetted.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-2xl font-semibold text-primary mb-6">
                Timing Matters
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                The right person at the wrong time is still the wrong person. We consider where you are in life, 
                your readiness for commitment, and your capacity for growth.
              </p>

              <h3 className="font-serif text-2xl font-semibold text-primary mb-6">
                Emotional Intelligence First
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We prioritize emotional maturity, self-awareness, and the ability to build healthy relationships 
                over superficial metrics or conventional "success" markers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary mb-6">
              What We Stand For
            </h2>
          </div>

          <div className="space-y-12">
            <div className="text-center">
              <h3 className="font-serif text-xl font-semibold text-primary mb-4">Discretion & Privacy</h3>
              <p className="text-muted-foreground leading-relaxed">
                Your journey to love should be private. No profiles, no databases, no public visibility - just thoughtful, 
                confidential introductions.
              </p>
            </div>

            <div className="text-center">
              <h3 className="font-serif text-xl font-semibold text-primary mb-4">Authentic Connection</h3>
              <p className="text-muted-foreground leading-relaxed">
                We believe in fostering genuine connections based on who you really are, not who you think you should be 
                to attract someone.
              </p>
            </div>

            <div className="text-center">
              <h3 className="font-serif text-xl font-semibold text-primary mb-4">Respect for Your Time</h3>
              <p className="text-muted-foreground leading-relaxed">
                We understand that your time is valuable. Every introduction is purposeful, and every interaction is 
                designed to move you closer to finding your person.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <blockquote className="text-2xl sm:text-3xl font-serif italic text-primary mb-8 leading-relaxed">
            "This isn't about finding someone to complete you - it's about finding someone 
            who complements the whole person you already are."
          </blockquote>
          <cite className="text-muted-foreground"> - Our Founding Philosophy</cite>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary mb-6">
            Ready to Begin?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            If our philosophy resonates with you and you're ready to invest in finding 
            meaningful, lasting love, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/onboarding">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link to="/our-approach">Learn More</Link>
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

export default About;