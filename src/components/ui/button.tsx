
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        // Jade-gold variants
        "jade-gold": "bg-accent text-primary hover:bg-accent/90 shadow-md",
        "jade-gold-outline": "border-2 border-accent text-primary bg-transparent hover:bg-accent/10",
        "jade-gold-ghost": "text-primary hover:bg-accent/20",
        // Luxe variants
        "luxe": "bg-accent text-primary border border-accent/30 shadow-luxe hover:shadow-luxe-hover transition-all duration-300",
        "luxe-outline": "border border-accent text-primary bg-transparent hover:bg-accent/5 shadow-subtle transition-all duration-300",
        "luxe-ghost": "text-primary hover:bg-accent/10 transition-all duration-300",
        "royal": "bg-gradient-to-r from-accent to-accent/80 text-primary shadow-luxe hover:shadow-luxe-hover transition-all duration-300 border border-accent/20",
        "heritage": "bg-primary text-white border border-primary/30 shadow-luxe hover:shadow-luxe-hover transition-all duration-300",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-14 rounded-md px-10 text-base",
        "luxe": "h-12 px-8 py-2.5 text-sm",
        "royal": "h-14 px-10 py-3 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
