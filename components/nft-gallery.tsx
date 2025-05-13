"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useWallet } from "@solana/wallet-adapter-react"
import { useEnvironment } from "@/hooks/use-environment"
import { getNftsForOwner } from "@/lib/nft-service"
import { Loader2 } from "lucide-react"

export default function NftGallery() {
  const { publicKey, connected } = useWallet()
  const { environment, connection } = useEnvironment()
  const [nfts, setNfts] = useState<any[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    let isMounted = true;

    const fetchNfts = async () => {
      if (!connected || !publicKey) return

      setLoading(true)
      try {
        const userNfts = await getNftsForOwner(publicKey, connection)
        if (isMounted) {
          console.log("Fetched NFTs:", userNfts) // Debug log
          setNfts(userNfts)
        }
      } catch (error) {
        console.error("Error fetching NFTs:", error)
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    fetchNfts()

    // Set up an interval to refresh the gallery periodically
    const intervalId = setInterval(fetchNfts, 5000)

    // Cleanup function
    return () => {
      isMounted = false
      clearInterval(intervalId)
    }
  }, [publicKey, connected, environment, connection])

  // Helper function to get mint address
  const getMintAddress = (nft: any) => {
    console.log("Processing NFT:", JSON.stringify(nft, null, 2)) // Debug log with full object
    
    if (!nft.mint) {
      console.warn("No mint address found for NFT:", nft)
      return ""
    }
    
    // If mint is already a string, return it
    if (typeof nft.mint === 'string') {
      return nft.mint
    }
    
    // If mint is an object with address property
    if (nft.mint.address) {
      return nft.mint.address.toString()
    }
    
    // If mint has toString method
    if (typeof nft.mint.toString === 'function') {
      return nft.mint.toString()
    }
    
    // If mint has toBase58 method
    if (typeof nft.mint.toBase58 === 'function') {
      return nft.mint.toBase58()
    }
    
    console.warn("Could not extract mint address from:", nft.mint)
    return ""
  }

  if (!connected) {
    return (
      <Card>
        <CardContent className="p-6 text-center">
          <p className="text-muted-foreground">Connect your wallet to view your NFTs</p>
        </CardContent>
      </Card>
    )
  }

  if (loading && nfts.length === 0) {
    return (
      <Card>
        <CardContent className="p-6 flex justify-center">
          <div className="flex items-center gap-2">
            <Loader2 className="h-4 w-4 animate-spin" />
            <span>Loading your NFTs...</span>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (nfts.length === 0) {
    return (
      <Card>
        <CardContent className="p-6 text-center">
          <p className="text-muted-foreground">No NFTs found. Mint your first NFT to see it in the gallery!</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      
      {nfts.length === 0 ? (
        <p>No NFTs found in your wallet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {nfts.map((nft, index) => {
            const mintAddress = getMintAddress(nft)
            console.log(`NFT ${index} mint address:`, mintAddress) // Debug log for each NFT
            return (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={nft.image}
                  alt={nft.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{nft.name}</h3>
                  <div className="mt-2">
                    <a
                      href={`https://explorer.solana.com/address/${mintAddress}?cluster=devnet`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      View on Solana Explorer
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
