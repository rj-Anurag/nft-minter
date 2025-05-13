"use client"

import { useContext } from "react"
import { EnvironmentContext } from "@/providers/environment-provider"

export function useEnvironment() {
  const context = useContext(EnvironmentContext)

  if (!context) {
    throw new Error("useEnvironment must be used within an EnvironmentProvider")
  }

  return context
}
