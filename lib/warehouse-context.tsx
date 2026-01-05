"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Warehouse = "Sydney" | "Brisbane" | "Melbourne"

interface WarehouseContextType {
  warehouse: Warehouse
  setWarehouse: (warehouse: Warehouse) => void
}

const WarehouseContext = createContext<WarehouseContextType | undefined>(undefined)

export function WarehouseProvider({ children }: { children: ReactNode }) {
  const [warehouse, setWarehouse] = useState<Warehouse>("Sydney")

  return <WarehouseContext.Provider value={{ warehouse, setWarehouse }}>{children}</WarehouseContext.Provider>
}

export function useWarehouse() {
  const context = useContext(WarehouseContext)
  if (context === undefined) {
    throw new Error("useWarehouse must be used within a WarehouseProvider")
  }
  return context
}
