import type { Metadata } from "next"
import NftMintingPlatform from "@/components/nft-minting-platform"

export const metadata: Metadata = {
  title: "Solana NFT Minting Platform",
  description: "Mint NFTs on Solana Devnet and Mainnet",
}

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Solana NFT Minting Platform</h1>
      <NftMintingPlatform />
    </main>
  )
}
