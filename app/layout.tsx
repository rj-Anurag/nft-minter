import type React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { WalletProvider } from "@/components/wallet-provider"
import { Toaster } from "@/components/ui/toaster"
import { EnvironmentProvider } from "@/providers/environment-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Solana NFT Minting Platform",
  description: "Mint NFTs on Solana Devnet and Mainnet",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <EnvironmentProvider>
            <WalletProvider>
              {children}
              <Toaster />
            </WalletProvider>
          </EnvironmentProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
