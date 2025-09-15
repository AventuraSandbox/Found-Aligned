import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export type Program = {
  slug: string;
  name: string;
  priceUSD: number;
  cadence: string;
  description: string;
  inclusions: string[];
};

export function ProgramsList({ programs }: { programs: Program[] }) {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {programs.map((program) => (
        <Card 
          key={program.slug} 
          className="p-8 border-0 shadow-elegant bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300"
        >
          <div className="mb-6">
            <h2 className="font-serif text-2xl font-semibold text-primary mb-2">
              {program.name}
            </h2>
            <div className="text-2xl font-bold text-primary mb-2">
              ${program.priceUSD.toLocaleString()}
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Cadence: {program.cadence}
            </p>
            <p className="text-muted-foreground mb-4">{program.description}</p>
          </div>

          <div className="mb-6">
            <h4 className="font-semibold text-primary mb-3">What's Included:</h4>
            <ul className="space-y-2">
              {program.inclusions.map((inclusion, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{inclusion}</span>
                </li>
              ))}
            </ul>
          </div>

          <Button variant="outline" size="lg" className="w-full" asChild>
            <Link to="/book-discovery">
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </Card>
      ))}
    </div>
  );
}
