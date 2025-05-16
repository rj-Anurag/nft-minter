"use client"

import { useState, useEffect } from "react"
import { useWallet } from "@solana/wallet-adapter-react"
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Loader2, AlertCircle, CheckCircle2, Info, Wallet } from "lucide-react"
import NftCreationForm from "@/components/nft-creation-form"
import NftPreview from "@/components/nft-preview"
import NftGallery from "@/components/nft-gallery"
import type { NftMetadata } from "@/types/nft"
import { createNft, addMintedNft, getWalletBalance } from "@/lib/nft-service"
import { useToast } from "@/hooks/use-toast"
import { useEnvironment } from "@/hooks/use-environment"

export default function NftMintingPlatform() {
  const wallet = useWallet()
  const { connected, publicKey } = wallet
  const { toast } = useToast()
  const { environment, setEnvironment, connection } = useEnvironment()

  const [nftMetadata, setNftMetadata] = useState<NftMetadata>({
    name: "",
    description: "",
    image: null,
    attributes: [],
  })

  const [previewMode, setPreviewMode] = useState(false)
  const [isMinting, setIsMinting] = useState(false)
  const [mintedNft, setMintedNft] = useState<any>(null)
  const [mintError, setMintError] = useState<string | null>(null)
  const [walletBalance, setWalletBalance] = useState<number | null>(null)

  // Fetch wallet balance when connected
  useEffect(() => {
    const fetchBalance = async () => {
      if (connected && publicKey) {
        const balance = await getWalletBalance(connection, publicKey)
        setWalletBalance(balance)
      } else {
        setWalletBalance(null)
      }
    }

    fetchBalance()

    // Set up interval to refresh balance
    const intervalId = setInterval(fetchBalance, 10000) // every 10 seconds

    return () => clearInterval(intervalId)
  }, [connected, publicKey, connection, environment])

  const handleMetadataChange = (metadata: NftMetadata) => {
    setNftMetadata(metadata)
  }

  const handlePreview = () => {
    setPreviewMode(true)
  }

  const handleEditMetadata = () => {
    setPreviewMode(false)
  }

  const handleMint = async () => {
    if (!connected || !publicKey) {
      toast({
        title: "Wallet not connected",
        description: "Please connect your wallet to mint an NFT",
        variant: "destructive",
      })
      return
    }

    if (!nftMetadata.image) {
      toast({
        title: "Image required",
        description: "Please upload an image for your NFT",
        variant: "destructive",
      })
      return
    }

    // Check if wallet balance is too low (rough estimate)
    if (walletBalance !== null && walletBalance < 0.02) {
      toast({
        title: "Insufficient SOL balance",
        description:
          environment === "devnet"
            ? "You need at least 0.02 SOL to mint. Get free Devnet SOL from a faucet."
            : "You need at least 0.02 SOL to mint. Please add more SOL to your wallet.",
        variant: "destructive",
      })
      setMintError("Insufficient SOL balance for minting. Please add more SOL to your wallet.")
      return
    }

    setIsMinting(true)
    setMintError(null)

    try {
      // Pass the entire wallet object instead of just the publicKey
      const result = await createNft(nftMetadata, connection, wallet)
      setMintedNft(result)

      // Add the minted NFT to our local storage for the gallery
      addMintedNft(result, nftMetadata)

      // Refresh balance after minting
      if (publicKey) {
        const balance = await getWalletBalance(connection, publicKey)
        setWalletBalance(balance)
      }

      toast({
        title: "NFT Minted Successfully!",
        description: `Your NFT "${nftMetadata.name}" has been minted`,
        variant: "default",
      })
    } catch (error) {
      console.error("Minting error:", error)
      const errorMessage = error instanceof Error ? error.message : "Unknown error occurred"

      // Check for specific error messages
      if (errorMessage.includes("insufficient lamports") || errorMessage.includes("Insufficient SOL")) {
        setMintError(
          environment === "devnet"
            ? "Insufficient SOL balance. Get free Devnet SOL from a faucet."
            : "Insufficient SOL balance. Please add more SOL to your wallet.",
        )
      } else {
        setMintError(errorMessage)
      }

      toast({
        title: "Minting Failed",
        description: errorMessage,
        variant: "destructive",
      })
    } finally {
      setIsMinting(false)
    }
  }

  const resetForm = () => {
    setNftMetadata({
      name: "",
      description: "",
      image: null,
      attributes: [],
    })
    setPreviewMode(false)
    setMintedNft(null)
    setMintError(null)
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div className="flex items-center gap-2">
          <span className="font-medium">Environment:</span>
          <Tabs value={environment} onValueChange={setEnvironment as (value: string) => void} className="w-[400px]">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="devnet" className="data-[state=active]:bg-white data-[state=active]:text-black">
                Devnet (Testing)
              </TabsTrigger>
              <TabsTrigger value="mainnet" className="data-[state=active]:bg-stone-50 data-[state=active]:text-black">
                Mainnet (Production)
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        <div className="flex items-center gap-4">
          {connected && walletBalance !== null && (
            <div className="flex items-center gap-2 bg-[hsl(240_4%_16%)] px-3 py-1 rounded-md">
              <Wallet className="h-4 w-4" />
              <span>{walletBalance.toFixed(4)} SOL</span>
            </div>
          )}
          <WalletMultiButton   />
        </div>
      </div>

      <Alert className="mb-6 border bg-[hsl(240_4%_16%)] ">
        <AlertTitle>Demo Mode</AlertTitle>
        <AlertDescription>
          This is running in demo mode with mock storage and gallery. In a production environment, you would use
          Arweave/IPFS for storage and a different RPC provider for fetching NFTs.
        </AlertDescription>
      </Alert>

      {environment === "devnet" && (
        <Alert className="mb-6 border bg-zinc-50 text-black">
          <AlertTitle>Devnet SOL Required</AlertTitle>
          <AlertDescription>
            You need Devnet SOL to mint NFTs. Get free Devnet SOL from{" "}
            <a
              href="https://solfaucet.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              solfaucet.com
            </a>
          </AlertDescription>
        </Alert>
      )}

      {environment === "mainnet" && (
        <Alert className="mb-6 border bg-zinc-50 text-black">
          <AlertTitle>Mainnet Mode Active</AlertTitle>
          <AlertDescription>You are using Mainnet. Real SOL will be used for transactions.</AlertDescription>
        </Alert>
      )}

      {mintedNft ? (
        <Card className="mb-8 bg-[hsl(240_4%_16%)]">
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center">
              <CheckCircle2 className="h-16 w-16 text-purple-200 mb-4" />
              <h2 className="text-2xl font-bold mb-2">NFT Minted Successfully!</h2>
              <p className="mb-4 text-muted-foreground">Your NFT has been minted on the {environment} network.</p>

              <div className="grid gap-2 w-full max-w-md mb-6">
                <div className="flex justify-between">
                  <span className="font-medium">NFT Name:</span>
                  <span>{nftMetadata.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Mint Description:</span>
                  <span>{nftMetadata.description}</span>
                </div>
              </div>

              <Button onClick={resetForm}>Mint Another NFT</Button>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardContent className="pt-6 bg-[hsl(240_4%_16%)]">
            {!connected ? (
              <div className="flex flex-col items-center py-12">
                <h2 className="text-2xl font-bold mb-4">Connect Your Wallet</h2>
                <p className="text-muted-foreground mb-6">Connect your Solana wallet to start minting NFTs</p>
                <WalletMultiButton />
              </div>
            ) : previewMode ? (
              <div className="space-y-6">
                <NftPreview metadata={nftMetadata} />

                <div className="flex flex-col sm:flex-row gap-4 justify-end">
                  <Button className="bg-white" onClick={handleEditMetadata} disabled={isMinting}>
                    Edit Metadata
                  </Button>
                  <Button onClick={handleMint} disabled={isMinting} className="bg-purple-300 hover:bg-purple-400">
                    {isMinting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Minting...
                      </>
                    ) : (
                      `Mint on ${environment === "devnet" ? "Devnet" : "Mainnet"}`
                    )}
                  </Button>
                </div>

                {mintError && (
                  <Alert variant="destructive" className="mt-4">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>
                      {mintError}
                      {mintError.includes("Insufficient SOL") && environment === "devnet" && (
                        <div className="mt-2">
                          <a
                            href="https://solfaucet.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white underline"
                          >
                            Get free Devnet SOL from a faucet
                          </a>
                        </div>
                      )}
                    </AlertDescription>
                  </Alert>
                )}
              </div>
            ) : (
              <NftCreationForm metadata={nftMetadata} onChange={handleMetadataChange} onPreview={handlePreview} />
            )}
          </CardContent>
        </Card>
      )}

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6 ">Your NFT Gallery</h2>
        <NftGallery />
      </div>
    </div>
  )
}


