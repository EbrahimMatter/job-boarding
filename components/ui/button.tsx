import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  // Replaced default soft styles with your 'brut-btn' class
  "brut-btn outline-none gap-2 whitespace-nowrap focus-visible:ring-3 focus-visible:ring-ring disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "btn-primary",
        destructive: "btn-danger",
        outline: "btn-plain",
        secondary: "btn-orange",
        ghost:
          "bg-transparent border-transparent shadow-none hover:bg-muted hover:shadow-none hover:translate-x-0 hover:translate-y-0 text-foreground",
        link: "bg-transparent border-transparent shadow-none text-primary underline-offset-4 hover:underline hover:shadow-none hover:translate-x-0 hover:translate-y-0",
      },
      size: {
        default: "", // Padding is handled by the brut-btn class in CSS
        sm: "brut-btn-sm",
        lg: "px-6 py-4 text-base",
        icon: "size-10 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
