import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Take a Photo",
    description: "Open the app and follow simple voice-guided instructions to photograph any spots you're concerned about. No internet needed.",
  },
  {
    number: "2",
    title: "Get Instant AI Analysis",
    description: "Our offline AI immediately assesses the risk level - Low, Medium, or High. Results appear on your phone within seconds.",
  },
  {
    number: "3",
    title: "Connect with Specialists",
    description: "For medium or high-risk spots, book a remote consultation with an Australian dermatologist directly from the app.",
  },
  {
    number: "4",
    title: "Receive Expert Guidance",
    description: "Get professional advice, next steps, and referrals if needed - all without leaving your community.",
  },
];

export const HowItWorksSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-foreground">Simple as 1, 2, 3, 4</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We've made skin checks as easy as possible. Here's how it works:
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="p-8 hover:shadow-lg transition-all border-2">
                <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold shadow-lg">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1 space-y-2">
                    <h3 className="text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Card>
              {index < steps.length - 1 && (
                <div className="flex justify-center my-2">
                  <ArrowRight className="w-8 h-8 text-primary/40" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="secondary">
            Ready to Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};