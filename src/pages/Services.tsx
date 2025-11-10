import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Our Services — Found & Aligned";
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
      <section className="pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-primary mb-4">Our Services</h1>
          <p className="text-lg text-muted-foreground">Personalized matchmaking designed for your unique journey</p>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 grid gap-8">
          <Card className="p-8">
            <h2 className="font-serif text-2xl font-semibold text-primary mb-2">Discovery Alignment</h2>
            <p className="text-muted-foreground mb-2">Foundational compatibility and clarity package</p>
            <p className="text-primary font-semibold mb-6">$750 (one-time)</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
              <li>90-minute 1:1 onboarding session</li>
              <li>Compatibility and attachment-style assessment</li>
              <li>Personalized "Alignment Blueprint"</li>
              <li>Inclusion in Found & Aligned match pool</li>
            </ul>
            <p className="text-muted-foreground">Ideal For: Professionals exploring matchmaking or seeking clarity on their dating patterns before committing to active matching.</p>
          </Card>

          <Card className="p-8">
            <h2 className="font-serif text-2xl font-semibold text-primary mb-2">Signature Alignment</h2>
            <p className="text-muted-foreground mb-2">Active matchmaking package</p>
            <p className="text-primary font-semibold mb-6">$4,800 (6-month program)</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
              <li>Dedicated regional matchmaker</li>
              <li>Up to 3 personalized matches per month (local only)</li>
              <li>Pre-date alignment coaching and post-date feedback loop</li>
              <li>Monthly progress sessions</li>
            </ul>
            <p className="text-muted-foreground">Ideal For: Busy professionals ready for curated introductions with Midwest-based matches who share their values and lifestyle.</p>
          </Card>

          <Card className="p-8">
            <h2 className="font-serif text-2xl font-semibold text-primary mb-2">Elevated Alignment</h2>
            <p className="text-muted-foreground mb-2">Full-service concierge matchmaking and transformation</p>
            <p className="text-primary font-semibold mb-6">$9,500 (12-month program)</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
              <li>3 curated matches per month (regional or national)</li>
              <li>Dedicated senior matchmaker</li>
              <li>Image &amp; Presence Coaching (included)</li>
              <li>Emotional Intelligence Mastery Sessions - 3 sessions (included)</li>
              <li>Personal Brand Dating Photoshoot (included)</li>
              <li>Priority access to Found & Aligned Circle events</li>
            </ul>
            <p className="text-muted-foreground">Ideal For: High-achieving professionals seeking comprehensive support, personal transformation, and premium concierge-level service.</p>
          </Card>
        </div>
      </section>

      <footer className="border-t border-border/30 py-12 bg-background mt-12">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 text-center text-muted-foreground">
          <p>© 2025 Found & Aligned. All rights reserved.</p>
          <p>Serving Illinois, Wisconsin, Michigan, and Indiana</p>
          <p>hello@foundandaligned.com</p>
        </div>
      </footer>
    </div>
  );
};

export default Services;


