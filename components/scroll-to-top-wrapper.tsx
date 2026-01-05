"use client"

import { useScrollToTop } from "@/hooks/use-scroll-to-top"
import type { ReactNode } from "react"

export function ScrollToTopWrapper({ children }: { children: ReactNode }) {
  useScrollToTop()
  return <>{children}</>
}
