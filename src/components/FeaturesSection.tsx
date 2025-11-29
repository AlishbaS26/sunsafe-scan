import { Card, CardContent } from "@/components/ui/card";
import { Camera, Video, Shield, Map } from "lucide-react";
import scanIcon from "@/assets/scan-icon.png";
import consultIcon from "@/assets/consult-icon.png";
import protectionIcon from "@/assets/protection-icon.png";

const features = [
  {
    icon: scanIcon,
    iconFallback: Camera,
    title: "Simple Photo Capture",
    description: "Easy step-by-step guidance to photograph skin spots. Voice instructions available. Works offline.",
    color: "text-primary",
  },
  {
    icon: consultIcon,
    iconFallback: Video,
    title: "Expert Dermatologist Review",
    description: "Book remote consultations with Australian skin specialists. No long drives needed.",
    color: "text-secondary",
  },
  {
    icon: protectionIcon,
    iconFallback: Shield,
    title: "AI-Powered Risk Assessment",
    description: "Instant analysis on your phone. Designed to catch early melanoma, including Clark Level 1.",
    color: "text-accent",
  },
  {
    icon: null,
    iconFallback: Map,
    title: "Built for Rural Australia",
    description: "Made for people who live far from specialists. Your location shouldn't determine your health.",
    color: "text-success",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-foreground">How SunSafeScan Helps You</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Four simple ways we're bringing specialist skin care to your fingertips
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const IconComponent = feature.iconFallback;
            return (
              <Card 
                key={index} 
                className="border-2 hover:border-primary/50 transition-all hover:shadow-xl"
              >
                <CardContent className="p-8 space-y-4">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      {feature.icon ? (
                        <img 
                          src={feature.icon} 
                          alt={feature.title}
                          className="w-16 h-16 object-contain"
                        />
                      ) : (
                        <div className={`p-4 rounded-2xl bg-muted ${feature.color}`}>
                          <IconComponent className="w-8 h-8" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1 space-y-2">
                      <h3 className="text-foreground">{feature.title}</h3>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};