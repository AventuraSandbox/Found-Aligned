import { ProgramsList } from "@/components/ProgramsList";
import { PROGRAMS } from "@/lib/faContent";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Calendar, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Programs = () => {
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
              <Link to="/programs" className="text-primary font-medium">Programs</Link>
              <Link to="/pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing</Link>
            </div>
            <Button variant="premium" size="sm" asChild>
              <Link to="/book-discovery">Book Consultation</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <div className="w-20 h-20 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-8">
            <Users className="h-10 w-10 text-primary" />
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6">
            Specialized Programs
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
            Beyond matchmaking, we offer specialized support for the unique challenges 
            and opportunities of dating and relationships at 45+.
          </p>
        </div>
      </section>

      {/* Programs List */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <ProgramsList programs={PROGRAMS} />
        </div>
      </section>

      {/* Why These Programs Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary mb-8">
            Why These Programs Matter
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div>
              <h3 className="font-semibold text-primary mb-4">Post-Divorce Recovery</h3>
              <p className="text-muted-foreground leading-relaxed">
                Divorce at 45+ brings unique challenges: rebuilding identity, navigating 
                co-parenting, and re-entering the dating world with confidence. Our Fresh Start 
                Program addresses these specific needs.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-primary mb-4">Community & Connection</h3>
              <p className="text-muted-foreground leading-relaxed">
                Dating at 45+ can feel isolating. Our Second Chapter Social Club creates 
                meaningful connections beyond romantic relationships, building a supportive 
                community of like-minded individuals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Whether you're newly single or have been dating for years, we have the support 
            and expertise to help you find meaningful connection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/book-discovery">
                Book Private Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link to="/pricing">View Pricing Packages</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
