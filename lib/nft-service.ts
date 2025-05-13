import type { Connection, PublicKey, TransactionSignature } from "@solana/web3.js"
import { LAMPORTS_PER_SOL } from "@solana/web3.js"
import { Metaplex, walletAdapterIdentity, mockStorage } from "@metaplex-foundation/js"
import type { NftMetadata } from "@/types/nft"
import type { WalletContextState } from "@solana/wallet-adapter-react"
import type { CustomConnection } from "@/lib/custom-connection"

// Minimum SOL required for minting (with some buffer)
const MIN_SOL_BALANCE_FOR_MINTING = 0.02 * LAMPORTS_PER_SOL // 0.02 SOL in lamports

// Check if wallet has enough SOL for minting
export async function hasEnoughSolForMinting(connection: CustomConnection, publicKey: PublicKey): Promise<boolean> {
  try {
    const balance = await connection.getBalance(publicKey)
    return balance >= MIN_SOL_BALANCE_FOR_MINTING
  } catch (error) {
    console.error("Error checking balance:", error)
    return false
  }
}

// Get wallet balance in SOL
export async function getWalletBalance(connection: CustomConnection, publicKey: PublicKey): Promise<number> {
  try {
    const balance = await connection.getBalance(publicKey)
    return balance / LAMPORTS_PER_SOL
  } catch (error) {
    console.error("Error getting balance:", error)
    return 0
  }
}

// Wait for transaction confirmation using polling instead of subscription
async function confirmTransaction(connection: CustomConnection, signature: TransactionSignature): Promise<boolean> {
  try {
    // Use the custom method from our CustomConnection class
    const result = await connection.confirmTransactionUsingPolling(signature, "confirmed")
    return !result.value.err
  } catch (error) {
    console.error("Error confirming transaction:", error)
    throw error
  }
}

// Create and mint an NFT
export async function createNft(metadata: NftMetadata, connection: CustomConnection, wallet: WalletContextState) {
  try {
    if (!wallet.publicKey || !wallet.signTransaction || !wallet.signAllTransactions) {
      throw new Error("Wallet is not connected or doesn't support signing")
    }

    // Check if wallet has enough SOL
    const hasEnoughSol = await hasEnoughSolForMinting(connection, wallet.publicKey)
    if (!hasEnoughSol) {
      throw new Error("Insufficient SOL balance for minting. Please add more SOL to your wallet.")
    }

    // Initialize Metaplex with wallet adapter identity and mock storage
    // Using mock storage for demonstration purposes to avoid Arweave/Bundlr issues
    const metaplex = Metaplex.make(connection as unknown as Connection)
      .use(walletAdapterIdentity(wallet))
      .use(mockStorage())

    // Convert the image file to a data URL for mock storage
    const reader = new FileReader()
    const imageDataUrl = await new Promise<string>((resolve) => {
      reader.onload = () => resolve(reader.result as string)
      reader.readAsDataURL(metadata.image!)
    })
    // Upload the image (using mock storage)
    const imageUri = await metaplex.storage().upload({
      buffer: Buffer.from(imageDataUrl.split(',')[1], 'base64'),
      fileName: metadata.name,
      displayName: metadata.name,
      uniqueName: "",
      contentType: null,
      extension: null,
      tags: []
    })

    // Create metadata JSON
    const { uri } = await metaplex.nfts().uploadMetadata({
      name: metadata.name,
      description: metadata.description,
      image: imageUri,
      attributes: metadata.attributes.map(attr => ({
        trait_type: attr.trait_type,
        value: attr.value
      })),
    })

    // Create the NFT with specific confirmation options to avoid subscriptions
    const { nft, response } = await metaplex.nfts().create({
      uri,
      name: metadata.name,
      sellerFeeBasisPoints: 500, // 5%
    })

    // If we have a transaction signature, confirm it manually using our custom method
    if (response && response.signature) {
      await confirmTransaction(connection, response.signature)
    }

    return nft
  } catch (error) {
    console.error("Error creating NFT:", error)
    throw error
  }
}

// Store recently minted NFTs in memory for demo purposes
const recentlyMintedNfts: any[] = []

// Add a minted NFT to the recent list
export function addMintedNft(nft: any, metadata: NftMetadata) {
  // Create a simplified NFT object with the metadata
  const nftWithMetadata = {
    mint: nft.mint.address ? nft.mint.address.toString() : nft.mint.toString(),
    name: metadata.name,
    image: URL.createObjectURL(metadata.image!),
    attributes: metadata.attributes,
  }

  // Add to the beginning of the array
  recentlyMintedNfts.unshift(nftWithMetadata)
  console.log("Added NFT to gallery:", nftWithMetadata) // Debug log
}

// Get NFTs for a wallet owner - using a mock implementation due to RPC limitations
export async function getNftsForOwner(owner: PublicKey, connection: CustomConnection) {
  try {
    // For demo purposes, return the recently minted NFTs
    // In a production app, you would use a different RPC provider or method
    console.log("Returning NFTs:", recentlyMintedNfts) // Debug log
    return recentlyMintedNfts.map(nft => ({
      ...nft,
      mint: nft.mint // Ensure mint is a string
    }))
  } catch (error) {
    console.error("Error fetching NFTs:", error)
    return []
  }
}
