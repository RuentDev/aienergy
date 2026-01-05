"use client"

import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import type { ReactNode } from "react"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  animation?: "fade-up" | "fade-in" | "slide-in" | "scale-in"
  delay?: number
}

export function AnimatedSection({ children, className = "", animation = "fade-up", delay = 0 }: AnimatedSectionProps) {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1, triggerOnce: true })

  const animationClass = {
    "fade-up": "opacity-0 translate-y-8",
    "fade-in": "opacity-0",
    "slide-in": "opacity-0 -translate-x-8",
    "scale-in": "opacity-0 scale-95",
  }[animation]

  const visibleClass = {
    "fade-up": "opacity-100 translate-y-0",
    "fade-in": "opacity-100",
    "slide-in": "opacity-100 translate-x-0",
    "scale-in": "opacity-100 scale-100",
  }[animation]

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${isVisible ? visibleClass : animationClass} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
