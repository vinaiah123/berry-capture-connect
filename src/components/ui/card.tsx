
import * as React from "react"

import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm transition-all duration-300",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

// New luxe card components
const LuxeCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border border-accent/20 bg-card/80 backdrop-blur-sm text-card-foreground shadow-luxe hover:shadow-luxe-hover transition-all duration-300",
      className
    )}
    {...props}
  />
))
LuxeCard.displayName = "LuxeCard"

const RoyalCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border border-accent/30 bg-white/90 backdrop-blur-sm text-card-foreground shadow-luxe hover:shadow-luxe-hover transition-all duration-300 overflow-hidden",
      className
    )}
    {...props}
  />
))
RoyalCard.displayName = "RoyalCard"

const RoyalCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6 border-b border-accent/10", className)}
    {...props}
  />
))
RoyalCardHeader.displayName = "RoyalCardHeader"

const HeritageCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border-0 bg-gradient-to-br from-white to-secondary/30 dark:from-gray-800 dark:to-gray-700/50 text-card-foreground shadow-luxe hover:shadow-luxe-hover transition-all duration-300 relative before:absolute before:inset-0 before:rounded-lg before:p-[1px] before:bg-gradient-to-br before:from-accent before:to-primary/30 before:content-[''] before:-z-10",
      className
    )}
    {...props}
  />
))
HeritageCard.displayName = "HeritageCard"

export { 
  Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent,
  LuxeCard, RoyalCard, RoyalCardHeader, HeritageCard
}
