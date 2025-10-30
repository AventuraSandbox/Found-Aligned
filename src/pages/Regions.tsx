import { useEffect } from "react";

const Regions = () => {
  useEffect(() => {
    document.title = "Regions — Found & Aligned";
    const desc = "Curated matchmaking across Illinois, Wisconsin, Michigan, and Indiana";
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
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-primary mb-4">Serving the Midwest's Most Vibrant Cities</h1>
          <p className="text-lg text-muted-foreground">Curated matchmaking across Illinois, Wisconsin, Michigan, and Indiana</p>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 space-y-10">
          <div>
            <h2 className="font-serif text-2xl font-semibold text-primary mb-2">Chicago</h2>
            <p className="text-muted-foreground">The Midwest's premier hub for corporate leaders, entrepreneurs, consultants, and healthcare executives. Found & Aligned connects Chicago's ambitious professionals who value depth, intention, and emotional intelligence in partnership.</p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold text-primary mb-2">Milwaukee &amp; Madison</h2>
            <p className="text-muted-foreground">Home to thriving academic, startup, and professional communities. We serve Wisconsin's most thoughtful leaders seeking meaningful connection rooted in shared values.</p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold text-primary mb-2">Indianapolis</h2>
            <p className="text-muted-foreground">Central Indiana's medtech, healthcare, and manufacturing professionals deserve elevated matchmaking. Found & Aligned brings intentional partnership to Indianapolis's high-achieving singles.</p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold text-primary mb-2">Detroit</h2>
            <p className="text-muted-foreground">Connecting auto-tech, finance, and innovation leaders across metro Detroit. We understand this city's unique culture and match professionals who are building the future while seeking lasting love.</p>
          </div>
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

export default Regions;


