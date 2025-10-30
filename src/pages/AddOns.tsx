import { Card } from "@/components/ui/card";
import { useEffect } from "react";

const AddOns = () => {
  useEffect(() => {
    document.title = "Add-On Services — Found & Aligned";
    const desc = "Additional services to support your journey to intentional love";
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
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-primary mb-4">Enhance Your Experience</h1>
          <p className="text-lg text-muted-foreground">Additional services to support your journey to intentional love</p>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 grid gap-8">
          <Card className="p-8">
            <h2 className="font-serif text-2xl font-semibold text-primary">Image &amp; Presence Coaching</h2>
            <p className="text-primary font-semibold mb-2">$950</p>
            <p className="text-muted-foreground">Develop confident, magnetic presence in person and online. Refine your personal style, body language, and first-impression impact.</p>
          </Card>

          <Card className="p-8">
            <h2 className="font-serif text-2xl font-semibold text-primary">Emotional Intelligence Mastery Sessions</h2>
            <p className="text-primary font-semibold mb-2">$750 (3 sessions)</p>
            <p className="text-muted-foreground">Build self-awareness, communication skills, and dating EQ. Learn to navigate attachment patterns and create secure connection.</p>
          </Card>

          <Card className="p-8">
            <h2 className="font-serif text-2xl font-semibold text-primary">Personal Brand Dating Photoshoot</h2>
            <p className="text-primary font-semibold mb-2">$1,200</p>
            <p className="text-muted-foreground">Lifestyle shoot with professional styling and brand direction. Authentic, high-quality images for your dating profiles and personal brand.</p>
          </Card>

          <Card className="p-8">
            <h2 className="font-serif text-2xl font-semibold text-primary">Post Break-Up / Divorce Healing Series</h2>
            <p className="text-primary font-semibold mb-2">$900 (3-part series)</p>
            <p className="text-muted-foreground">Guided recovery and renewal journey with a coach. Process your past relationship, rebuild confidence, and prepare for healthy love.</p>
          </Card>

          <Card className="p-8">
            <h2 className="font-serif text-2xl font-semibold text-primary">Long-Distance Search Upgrade</h2>
            <p className="text-primary font-semibold mb-2">$1,500</p>
            <p className="text-muted-foreground">Expand your search beyond the 4-state Midwest region to include national matches aligned with your values and lifestyle.</p>
          </Card>

          <Card className="p-8">
            <h2 className="font-serif text-2xl font-semibold text-primary">Found &amp; Aligned Circle (Membership)</h2>
            <p className="text-primary font-semibold mb-2">$1,200/year</p>
            <p className="text-muted-foreground">Annual community membership featuring curated events, private mixers, and growth sessions. Connect with like-minded professionals in an intentional, supportive environment.</p>
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

export default AddOns;


