import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact — Found & Aligned";
    const desc = "Book a complimentary Discovery Call to explore your alignment";
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
        <div className="max-w-3xl mx-auto px-6 sm:px-8 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-primary mb-6">Ready to Find Your Alignment?</h1>
          <p className="text-lg text-muted-foreground mb-8">Book a complimentary Discovery Call to explore how Found & Aligned can support your journey to intentional love. We'll discuss your relationship goals, assess fit, and design a personalized pathway forward.</p>
          <div className="flex justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/book-discovery">Schedule Your Discovery Call</Link>
            </Button>
          </div>
          <div className="mt-8 text-muted-foreground">
            <p>Email: hello@foundandaligned.com</p>
            <p>Serving: Illinois, Wisconsin, Michigan, Indiana</p>
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

export default Contact;


