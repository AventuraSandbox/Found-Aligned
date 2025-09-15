import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export type Tier = {
  slug: string;
  name: string;
  priceUSD: number;
  durationMonths: number;
  description: string;
  inclusions: string[];
  targetClient: string;
};

export function PricingTiers({ tiers }: { tiers: Tier[] }) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="text-center mb-16">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary mb-6">
          Premium Packages
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Human, discreet, and deeply personalized—never algorithmic. Choose the service level that matches your needs and investment readiness.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {tiers.map((tier, index) => (
          <Card 
            key={tier.slug} 
            className={`p-8 border-0 shadow-elegant bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 ${
              index === 1 ? 'ring-2 ring-primary scale-105' : ''
            }`}
          >
            {index === 1 && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
            )}
            
            <div className="text-center mb-6">
              <h3 className="font-serif text-2xl font-semibold text-primary mb-2">{tier.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{tier.description}</p>
              <div className="text-4xl font-bold text-primary mb-2">
                ${tier.priceUSD.toLocaleString()}
              </div>
              <p className="text-sm text-muted-foreground">
                Duration: {tier.durationMonths} months
              </p>
            </div>

            <div className="mb-6">
              <p className="text-sm text-muted-foreground italic mb-4">
                Ideal for: {tier.targetClient}
              </p>
              
              <h4 className="font-semibold text-primary mb-3">What's Included:</h4>
              <ul className="space-y-3">
                {tier.inclusions.map((inclusion, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{inclusion}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button 
              variant={index === 1 ? "hero" : "outline"} 
              size="lg" 
              className="w-full" 
              asChild
            >
              <Link to="/book-discovery">
                Request Private Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </Card>
        ))}
      </div>
    </section>
  );
}
