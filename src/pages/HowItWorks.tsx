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
              <Link to="/pricing" className="text-muted-foreground hover:text-primary transition-colors">Services</Link>
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

          <div className="space-y-6">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-accent rounded-full flex items-center justify-center">
                  <span className="text-3xl font-serif font-bold text-primary">01</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-2xl font-semibold text-primary mb-4">
                  Discovery: Begin with Understanding
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We start with a complimentary discovery call to understand your relationship history, values, and vision for partnership. If we're a good fit, you'll complete a comprehensive assessment covering compatibility factors, attachment styles, and what matters most to you in a partner.
                </p>
                <div className="space-y-3">
                  <p className="font-semibold text-primary mb-3">What happens:</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Complimentary 30-minute discovery call</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>In-depth compatibility assessment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Personalized "Alignment Blueprint"</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Inclusion in our curated network</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Connector Line */}
            <div className="ml-10 border-l-2 border-border/30 h-6"></div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-accent rounded-full flex items-center justify-center">
                  <span className="text-3xl font-serif font-bold text-primary">02</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-2xl font-semibold text-primary mb-4">
                  Matching: Thoughtful Introductions, Not Algorithms
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Your dedicated matchmaker personally evaluates every potential match based on emotional alignment, lifestyle compatibility, and shared values. We introduce you to people we genuinely believe could be your person—complete with context about why we think there's potential.
                </p>
                <div className="space-y-3">
                  <p className="font-semibold text-primary mb-3">What happens:</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Dedicated regional or senior matchmaker assigned</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Hand-selected introductions (no apps, no algorithms)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Pre-date coaching and preparation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Custom date planning support</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Connector Line */}
            <div className="ml-10 border-l-2 border-border/30 h-6"></div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-accent rounded-full flex items-center justify-center">
                  <span className="text-3xl font-serif font-bold text-primary">03</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-2xl font-semibold text-primary mb-4">
                  Dating with Support: You are Never Alone in This
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  After each introduction, we check in to hear how it went. What felt right? What didn't? We use your feedback to continuously refine future matches and provide coaching to help you show up as your best self.
                </p>
                <div className="space-y-3">
                  <p className="font-semibold text-primary mb-3">What happens:</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Post-date feedback sessions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Ongoing emotional intelligence coaching</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Match refinement based on real experiences</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Relationship guidance as things progress</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Connector Line */}
            <div className="ml-10 border-l-2 border-border/30 h-6"></div>

            {/* Step 4 */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-accent rounded-full flex items-center justify-center">
                  <span className="text-3xl font-serif font-bold text-primary">04</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-2xl font-semibold text-primary mb-4">
                  Growth & Transformation: Beyond Matchmaking
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Whether you're working on your dating presence, processing past relationships, or building confidence, we offer additional support to ensure you're emotionally ready for lasting love.
                </p>
                <div className="space-y-3">
                  <p className="font-semibold text-primary mb-3">Optional enhancements include:</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Image & Presence Coaching</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Emotional Intelligence Mastery Sessions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Personal Brand Photoshoot</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Access to Found & Aligned Circle events</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
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
            Take the first step toward finding your person with our personalized matchmaking process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/apply">
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link to="/book-discovery">Book a Consultation</Link>
            </Button>
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

            {/* FAQ 4 */}
            <Card className="p-8 border-0 shadow-elegant bg-card/50 backdrop-blur-sm">
              <h3 className="font-serif text-xl font-semibold text-primary mb-4">
                [FAQ Question 4 - Placeholder]
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                [FAQ Answer 4 - Placeholder text goes here. This section will be customized with your specific frequently asked questions and detailed answers.]
              </p>
            </Card>

            {/* FAQ 5 */}
            <Card className="p-8 border-0 shadow-elegant bg-card/50 backdrop-blur-sm">
              <h3 className="font-serif text-xl font-semibold text-primary mb-4">
                [FAQ Question 5 - Placeholder]
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                [FAQ Answer 5 - Placeholder text goes here. This section will be customized with your specific frequently asked questions and detailed answers.]
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

