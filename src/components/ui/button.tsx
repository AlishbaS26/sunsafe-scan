import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl font-semibold transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-md hover:shadow-lg hover:scale-105 active:scale-100",
        secondary: "bg-secondary text-secondary-foreground shadow-md hover:shadow-lg hover:scale-105 active:scale-100",
        outline: "border-2 border-primary text-primary bg-background hover:bg-primary hover:text-primary-foreground",
        ghost: "text-foreground hover:bg-muted",
        link: "text-primary underline-offset-4 hover:underline",
        success: "bg-success text-success-foreground shadow-md hover:shadow-lg hover:scale-105 active:scale-100",
        warning: "bg-warning text-warning-foreground shadow-md hover:shadow-lg hover:scale-105 active:scale-100",
      },
      size: {
        default: "h-14 px-8 py-4 text-lg",
        sm: "h-11 px-6 py-3 text-base",
        lg: "h-16 px-10 py-5 text-xl",
        icon: "h-14 w-14",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };