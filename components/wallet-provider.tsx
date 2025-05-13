"use client"

import type React from "react"

import { useMemo } from "react"
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base"
import { ConnectionProvider, WalletProvider as SolanaWalletProvider } from "@solana/wallet-adapter-react"
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui"
import { PhantomWalletAdapter, SolflareWalletAdapter } from "@solana/wallet-adapter-wallets"
import { useEnvironment } from "@/hooks/use-environment"

// Import wallet adapter CSS
import "@solana/wallet-adapter-react-ui/styles.css"

export function WalletProvider({ children }: { children: React.ReactNode }) {
  const { rpcUrl, environment } = useEnvironment()

  // Set up wallet adapters based on environment
  const wallets = useMemo(() => {
    const network = environment === "devnet" ? WalletAdapterNetwork.Devnet : WalletAdapterNetwork.Mainnet

    return [new PhantomWalletAdapter({ network }), new SolflareWalletAdapter({ network })]
  }, [environment])

  // Configure connection provider to not use WebSocket subscriptions
  const connectionConfig = {
    commitment: "confirmed",
    confirmTransactionInitialTimeout: 60000, // 60 seconds
  }

  return (
    <ConnectionProvider endpoint={rpcUrl} config={connectionConfig}>
      <SolanaWalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </SolanaWalletProvider>
    </ConnectionProvider>
  )
}
