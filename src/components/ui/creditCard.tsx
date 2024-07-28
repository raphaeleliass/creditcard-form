import { cn } from "@/lib/utils";
import React from "react";

const CreditCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "mx-auto flex h-48 w-full max-w-xs flex-col justify-between rounded-xl bg-white shadow-xl lg:max-w-full lg:h-[17rem] lg:w-[30rem]",
      className,
    )}
    {...props}
  />
));

CreditCard.displayName = "CreditCard";

const CreditCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("space-y-8", className)} {...props} />
));

CreditCardHeader.displayName = "CreditCardHeader";

const CreditCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("space-y-2", className)} {...props} />
));

CreditCardFooter.displayName = "CreditCardFooter";

const CreditCardNumber = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-xl font-semibold lg:text-4xl", className)}
    {...props}
  />
));

CreditCardNumber.displayName = "CreditCardNumber";

const CreditCardName = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm uppercase lg:text-base", className)}
    {...props}
  />
));

CreditCardName.displayName = "CreditCardName";

export {
  CreditCard,
  CreditCardHeader,
  CreditCardFooter,
  CreditCardNumber,
  CreditCardName,
};
