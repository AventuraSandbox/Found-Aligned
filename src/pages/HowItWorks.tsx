import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Heart, Users, Calendar, MessageCircle, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const HowItWorks = () => {
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
              <Link to="/how-it-works" className="text-primary font-medium">Process Overview</Link>
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
            {/* Step 1: Discovery */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-accent rounded-full flex items-center justify-center">
                  <span className="text-3xl font-serif font-bold text-primary">01</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-2xl font-semibold text-primary mb-4">
                  Step 1: Discovery
                </h3>
                <p className="font-semibold text-primary mb-4">Begin with Understanding</p>
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

            {/* Step 2: Vetting */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-accent rounded-full flex items-center justify-center">
                  <span className="text-3xl font-serif font-bold text-primary">02</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-2xl font-semibold text-primary mb-4">
                  Step 2: Vetting
                </h3>
                <p className="font-semibold text-primary mb-4">Real People, Real Conversations</p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Unlike apps or algorithm-based services, every person in our network is vetted through personal interviews by our matchmakers. We verify background, intentions, and relationship readiness. This ensures you only meet people who are genuinely aligned with what you're seeking and emotionally prepared for partnership.
                </p>
                <div className="space-y-3">
                  <p className="font-semibold text-primary mb-3">What happens:</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Personal screening interviews with all potential matches</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Background verification and reference checks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Assessment of emotional readiness and intentions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Confirmation of lifestyle, values, and relationship goals</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Connector Line */}
            <div className="ml-10 border-l-2 border-border/30 h-6"></div>

            {/* Step 3: Matching */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-accent rounded-full flex items-center justify-center">
                  <span className="text-3xl font-serif font-bold text-primary">03</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-2xl font-semibold text-primary mb-4">
                  Step 3: Matching
                </h3>
                <p className="font-semibold text-primary mb-4">Thoughtful Introductions, Not Algorithms</p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Your dedicated matchmaker personally evaluates every potential match based on emotional alignment, lifestyle compatibility, and shared values. We introduce you to people we genuinely believe could be your person, complete with context about why we think there's potential.
                </p>
                <div className="space-y-3">
                  <p className="font-semibold text-primary mb-3">What happens:</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Dedicated matchmaker assigned (regional or senior level)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Hand-selected introductions based on deep compatibility</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Pre-date coaching and preparation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Context provided about each match and why they're right for you</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Connector Line */}
            <div className="ml-10 border-l-2 border-border/30 h-6"></div>

            {/* Step 4: Dating with Support */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-accent rounded-full flex items-center justify-center">
                  <span className="text-3xl font-serif font-bold text-primary">04</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-2xl font-semibold text-primary mb-4">
                  Step 4: Dating with Support
                </h3>
                <p className="font-semibold text-primary mb-4">Guided Through Every Step</p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  After each introduction, we check in to hear how it went. What felt right? What didn't? We use your feedback to continuously refine future matches and provide coaching to help you navigate the experience with confidence and clarity.
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
                      <span>Ongoing relationship coaching</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Match refinement based on your real experiences</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Guidance as connections deepen</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Connector Line */}
            <div className="ml-10 border-l-2 border-border/30 h-6"></div>

            {/* Step 5: Success */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-accent rounded-full flex items-center justify-center">
                  <span className="text-3xl font-serif font-bold text-primary">05</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-2xl font-semibold text-primary mb-4">
                  Step 5: Success
                </h3>
                <p className="font-semibold text-primary mb-4">Finding Your Person</p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our work continues until you find your match. Whether that happens in month two or month six, we're committed to supporting you through the journey. When you find your person, we celebrate with you and offer continued guidance as your relationship grows.
                </p>
                <div className="space-y-3">
                  <p className="font-semibold text-primary mb-3">What happens:</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Continued support until you find your match</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Relationship transition coaching</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Access to our community and resources</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Optional ongoing support for new relationships</span>
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
              <Link to="/services">Learn About Our Services</Link>
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
                How is Found & Aligned different from dating apps or other matchmaking services?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Unlike dating apps that rely on algorithms and self-reported profiles, every person in our network is personally vetted through one-on-one interviews by our matchmakers. We verify backgrounds, assess emotional readiness, and confirm relationship intentions before anyone is introduced. Your matches are hand-selected by a dedicated matchmaker who knows you personally, not generated by software. We also provide ongoing coaching and support throughout your journey, making this a true partnership rather than a transactional service.
              </p>
            </Card>

            {/* FAQ 2 */}
            <Card className="p-8 border-0 shadow-elegant bg-card/50 backdrop-blur-sm">
              <h3 className="font-serif text-xl font-semibold text-primary mb-4">
                How long does it typically take to find a match?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Every journey is unique, but most of our clients meet someone they're genuinely excited about within the first few months. Our programs are designed as 6-month experiences to allow time for multiple introductions, dating, and developing real connections. We're focused on quality over speed. Finding the right person takes time, and we're committed to supporting you until you find your match.
              </p>
            </Card>

            {/* FAQ 3 */}
            <Card className="p-8 border-0 shadow-elegant bg-card/50 backdrop-blur-sm">
              <h3 className="font-serif text-xl font-semibold text-primary mb-4">
                How many people will I meet, and how often?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Depending on your program, you'll receive between 1 to 3 carefully curated introductions per month. We prioritize quality over quantity. Each introduction is personally selected based on deep compatibility, emotional alignment, and shared values. We'd rather introduce you to three truly compatible people than dozens of mediocre matches. The pacing allows you time to date, reflect, and provide feedback that helps us refine future introductions.
              </p>
            </Card>

            {/* FAQ 4 */}
            <Card className="p-8 border-0 shadow-elegant bg-card/50 backdrop-blur-sm">
              <h3 className="font-serif text-xl font-semibold text-primary mb-4">
                How much does matchmaking cost, and is it worth the investment?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Our programs range from introductory discovery packages to comprehensive 6-month matchmaking experiences. Investment varies based on the level of service, search scope, and additional support you choose. We discuss pricing during your complimentary discovery call after we understand your specific needs and goals. What we can tell you is this: our clients consistently tell us that finding the right partner was worth every penny, and that the time, energy, and emotional cost of continuing to search alone would have been far greater.
              </p>
            </Card>

            {/* FAQ 5 */}
            <Card className="p-8 border-0 shadow-elegant bg-card/50 backdrop-blur-sm">
              <h3 className="font-serif text-xl font-semibold text-primary mb-4">
                Is my participation confidential?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Absolutely. Your privacy is our priority. Your search remains completely confidential, and we never share your information without your explicit permission. All members of our network have agreed to our privacy standards. We understand that discretion matters, especially for professionals in visible roles or those navigating sensitive personal situations.
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
            
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/apply">
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
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

export default HowItWorks;

