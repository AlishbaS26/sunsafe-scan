import { Button } from "@/components/ui/button";
import { Camera, Heart } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Logo/Badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-card rounded-full shadow-lg border-2 border-primary/20">
            <Heart className="w-6 h-6 text-primary" />
            <span className="text-lg font-bold text-foreground">SunSafeScan</span>
          </div>

          {/* Headline */}
          <h1 className="text-foreground leading-tight">
            Catch Melanoma Early,
            <br />
            <span className="text-primary">Right From Home</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Simple skin checks powered by AI, with direct access to Australian dermatologists. 
            Designed for older Australians in rural communities.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button size="lg" className="w-full sm:w-auto min-w-[240px]">
              <Camera className="mr-2" />
              Start Your Skin Check
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto min-w-[240px]">
              Learn How It Works
            </Button>
          </div>

          {/* Trust Badge */}
          <div className="pt-8 flex flex-col items-center gap-3">
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
              <span className="text-base">No internet required for scanning</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your privacy is protected. Data stays on your device until you choose to share.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};