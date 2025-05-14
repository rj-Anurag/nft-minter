import type { Metadata } from "next"
import NftMintingPlatform from "@/components/nft-minting-platform"
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Solana NFT Minting Platform",
  description: "Mint NFTs on Solana Devnet and Mainnet",
}

export default function Home() {
  return (
    <>
      {/* Grid background */}
      <div
        className={cn(
          "fixed inset-0 -z-10",
          "[background-size:20px_20px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />

      {/* Radial fade overlay */}
      <div className="pointer-events-none fixed inset-0 -z-10 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />

      <main className="container mx-auto px-4 py-8 relative z-10 text-center">
  <p className="inline-block bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
    Mint Your NFTs
  </p>
  <NftMintingPlatform />
</main>

    </>
  )
}
