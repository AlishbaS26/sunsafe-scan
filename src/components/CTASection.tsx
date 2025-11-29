import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Phone, Mail } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10">
      <div className="container mx-auto px-6">
        <Card className="max-w-4xl mx-auto p-12 border-2 border-primary/20 shadow-2xl">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10">
              <Heart className="w-10 h-10 text-primary" />
            </div>

            <div className="space-y-4">
              <h2 className="text-foreground">Every Postcode Deserves Early Detection</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                If you're over 55 and live in rural Australia, SunSafeScan was built for you. 
                Join our pilot program and help us bring specialist skin care to every community.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="min-w-[240px]">
                Join the Pilot Program
              </Button>
              <Button size="lg" variant="outline" className="min-w-[240px]">
                Learn More
              </Button>
            </div>

            <div className="pt-8 border-t border-border">
              <p className="text-base text-muted-foreground mb-4">
                Questions? We're here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center text-sm text-muted-foreground">
                <a href="tel:1800-sun-safe" className="inline-flex items-center gap-2 hover:text-primary transition-colors">
                  <Phone className="w-5 h-5" />
                  <span className="text-lg">1800 SUN SAFE</span>
                </a>
                <a href="mailto:help@sunsafescan.au" className="inline-flex items-center gap-2 hover:text-primary transition-colors">
                  <Mail className="w-5 h-5" />
                  <span className="text-lg">help@sunsafescan.au</span>
                </a>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};