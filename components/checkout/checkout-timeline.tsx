"use client";

import { cn } from "@/lib/utils";
import { Check, Package, Truck, CreditCard } from "lucide-react";
import type { CheckoutStep } from "@/lib/types/checkout-types";

interface CheckoutTimelineProps {
  currentStep: CheckoutStep;
  onStepClick: (step: CheckoutStep) => void;
  completedSteps: number;
}

const steps = [
  { number: 1 as CheckoutStep, label: "Review Items", icon: Package },
  { number: 2 as CheckoutStep, label: "Shipping", icon: Truck },
  { number: 3 as CheckoutStep, label: "Payment", icon: CreditCard },
];

export function CheckoutTimeline({
  currentStep,
  onStepClick,
  completedSteps,
}: CheckoutTimelineProps) {
  return (
    <div className="w-full">
      {/* Desktop Timeline */}
      <div className="hidden md:flex items-center justify-center">
        {steps.map((step, index) => {
          const isCompleted = step.number <= completedSteps;
          const isCurrent = step.number === currentStep;
          const isClickable = step.number <= completedSteps + 1;

          return (
            <div key={step.number} className="flex items-center">
              {/* Step Circle */}
              <button
                onClick={() => isClickable && onStepClick(step.number)}
                disabled={!isClickable}
                className={cn(
                  "relative flex items-center gap-3 px-6 py-3 rounded-full transition-all duration-500 ease-out",
                  isClickable && "cursor-pointer hover:scale-105",
                  !isClickable && "cursor-not-allowed opacity-50",
                  isCurrent &&
                    "bg-accent text-white shadow-lg shadow-accent/30 scale-105",
                  isCompleted && !isCurrent && "bg-accent/20 text-accent",
                  !isCompleted && !isCurrent && "bg-muted text-muted-foreground"
                )}
              >
                <div
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500",
                    isCurrent && "bg-white/20",
                    isCompleted && !isCurrent && "bg-accent text-white",
                    !isCompleted && !isCurrent && "bg-muted-foreground/20"
                  )}
                >
                  {isCompleted && !isCurrent ? (
                    <Check className="w-5 h-5 animate-scale-in" />
                  ) : (
                    <step.icon className="w-5 h-5" />
                  )}
                </div>
                <div className="text-left">
                  <p className="text-xs font-medium opacity-70">
                    Step {step.number}
                  </p>
                  <p className="font-semibold">{step.label}</p>
                </div>
              </button>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="w-16 lg:w-24 h-1 mx-2 rounded-full overflow-hidden bg-muted">
                  <div
                    className={cn(
                      "h-full bg-accent transition-all duration-700 ease-out",
                      step.number <= completedSteps ? "w-full" : "w-0"
                    )}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Mobile Timeline */}
      <div className="md:hidden">
        <div className="flex items-center justify-between mb-4">
          {steps.map((step, index) => {
            const isCompleted = step.number <= completedSteps;
            const isCurrent = step.number === currentStep;
            const isClickable = step.number <= completedSteps + 1;

            return (
              <div key={step.number} className="flex items-center flex-1">
                <button
                  onClick={() => isClickable && onStepClick(step.number)}
                  disabled={!isClickable}
                  className={cn(
                    "relative flex flex-col items-center gap-2 transition-all duration-500",
                    isClickable && "cursor-pointer",
                    !isClickable && "cursor-not-allowed opacity-50"
                  )}
                >
                  <div
                    className={cn(
                      "w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500",
                      isCurrent &&
                        "bg-accent text-white shadow-lg shadow-accent/30 scale-110",
                      isCompleted && !isCurrent && "bg-accent/20 text-accent",
                      !isCompleted &&
                        !isCurrent &&
                        "bg-muted text-muted-foreground"
                    )}
                  >
                    {isCompleted && !isCurrent ? (
                      <Check className="w-5 h-5 animate-scale-in" />
                    ) : (
                      <step.icon className="w-5 h-5" />
                    )}
                  </div>
                  <span
                    className={cn(
                      "text-xs font-medium text-center",
                      isCurrent && "text-accent"
                    )}
                  >
                    {step.label}
                  </span>
                </button>
                {index < steps.length - 1 && (
                  <div className="flex-1 h-1 mx-2 rounded-full overflow-hidden bg-muted">
                    <div
                      className={cn(
                        "h-full bg-accent transition-all duration-700 ease-out",
                        step.number <= completedSteps ? "w-full" : "w-0"
                      )}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
