"use client"

import type React from "react"

import { createContext, useState, useEffect } from "react"
import type { Commitment } from "@solana/web3.js"
import { CustomConnection } from "@/lib/custom-connection"

type Environment = "devnet" | "mainnet"

interface EnvironmentContextType {
  environment: Environment
  setEnvironment: (env: Environment) => void
  connection: CustomConnection
  rpcUrl: string
}

export const EnvironmentContext = createContext<EnvironmentContextType>({
  environment: "devnet",
  setEnvironment: () => {},
  connection: {} as CustomConnection,
  rpcUrl: "",
})

const DEVNET_RPC_URL = "https://solana-devnet.g.alchemy.com/v2/o_5ZQfNlZa_8r5Hr-mrcGpRhVqKkKjhy"
const MAINNET_RPC_URL = "https://solana-mainnet.g.alchemy.com/v2/o_5ZQfNlZa_8r5Hr-mrcGpRhVqKkKjhy"

export function EnvironmentProvider({ children }: { children: React.ReactNode }) {
  const [environment, setEnvironment] = useState<Environment>("devnet")
  const [connection, setConnection] = useState<CustomConnection>(createCustomConnection(DEVNET_RPC_URL))
  const [rpcUrl, setRpcUrl] = useState<string>(DEVNET_RPC_URL)

  // Create a custom connection that doesn't use WebSocket subscriptions
  function createCustomConnection(url: string): CustomConnection {
    const commitment: Commitment = "confirmed"
    return new CustomConnection(url, {
      commitment,
      confirmTransactionInitialTimeout: 60000, // 60 seconds
    })
  }

  useEffect(() => {
    const url = environment === "devnet" ? DEVNET_RPC_URL : MAINNET_RPC_URL
    setRpcUrl(url)
    setConnection(createCustomConnection(url))
  }, [environment])

  return (
    <EnvironmentContext.Provider value={{ environment, setEnvironment, connection, rpcUrl }}>
      {children}
    </EnvironmentContext.Provider>
  )
}
