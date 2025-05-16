import type { Connection, PublicKey, TransactionSignature } from "@solana/web3.js";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { Metaplex, walletAdapterIdentity } from "@metaplex-foundation/js"; // Removed mockStorage
import pinataSDK from "@pinata/sdk" // Import Pinata SDK
import type { NftMetadata } from "@/types/nft";
import type { WalletContextState } from "@solana/wallet-adapter-react";
import type { CustomConnection } from "@/lib/custom-connection"; // Assuming CustomConnection is still needed for connection handling

// Initialize Pinata with your API keys
// Remember to replace with your actual API keys or use environment variables
const pinata = new pinataSDK(process.env.NEXT_PUBLIC_PINATA_API_KEY, process.env.NEXT_PUBLIC_PINATA_SECRET_API_KEY);

// Define the minimum SOL balance required for minting
const MIN_SOL_BALANCE_FOR_MINTING = 0.1; // Replace with the desired value in SOL


// Check if wallet has enough SOL for minting
export async function hasEnoughSolForMinting(connection: CustomConnection, publicKey: PublicKey): Promise<boolean> {
  try {
    const balance = await connection.getBalance(publicKey);
    return balance >= MIN_SOL_BALANCE_FOR_MINTING;
  } catch (error) {
    console.error("Error checking balance:", error);
    return false;
  }
}

// Get wallet balance in SOL
export async function getWalletBalance(connection: CustomConnection, publicKey: PublicKey): Promise<number> {
  try {
    const balance = await connection.getBalance(publicKey);
    return balance / LAMPORTS_PER_SOL;
  } catch (error) {
    console.error("Error getting balance:", error);
    return 0;
  }
}

// Wait for transaction confirmation using polling instead of subscription
async function confirmTransaction(connection: CustomConnection, signature: TransactionSignature): Promise<boolean> {
  try {
    // Use the custom method from our CustomConnection class
    const result = await connection.confirmTransactionUsingPolling(signature, "confirmed");
    return !result.value.err;
  } catch (error) {
    console.error("Error confirming transaction:", error);
    throw error;
  }
}

// Function to upload NFT image and metadata to the API route
async function uploadNftData(metadata: NftMetadata): Promise<{ imageUri: string; metadataUri: string }> {
  if (!metadata.image) {
    throw new Error("Image file is missing.");
  }

  const formData = new FormData();
  formData.append('image', metadata.image);

  // Create metadata JSON structure for the API route
  const metadataJson = {
    name: metadata.name,
    description: metadata.description,
    // Image URI will be added by the API route after upload
    attributes: metadata.attributes.map(attr => ({
      trait_type: attr.trait_type,
      value: attr.value
    })),
    properties: {
      files: [
        {
          // URI will be added by the API route
          type: metadata.image.type
        }
      ],
      category: 'image',
      creators: [
        {
          address: "", // Wallet address will be added by the API route or you can send it
          share: 100
        }
      ]
    }
  };
  formData.append('metadata', JSON.stringify(metadataJson));

  const response = await fetch('/api/upload-to-ipfs', {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    throw new Error(`Upload failed with status ${response.status}`);
  }

  return response.json();
}

// Create and mint an NFT
export async function createNft(metadata: any) {
  const response = await fetch("/api/pinata", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(metadata),
  });

  if (!response.ok) {
    throw new Error("Failed to create NFT");
  }

  return await response.json();
}


// Store recently minted NFTs in memory for demo purposes
const recentlyMintedNfts: any[] = []

// Add a minted NFT to the recent list
export function addMintedNft(nft: any, metadata: NftMetadata) {
  // Create a simplified NFT object with the metadata
  const nftWithMetadata = {
    mint: nft.mint.address ? nft.mint.address.toString() : nft.mint.toString(),
    name: metadata.name,
    // Use the correct IPFS URI for the image from the uploaded metadata
    // This assumes you store the image URI in the metadata when uploading
    image: `https://gateway.pinata.cloud/ipfs/${(nft.metadataAccount as any)?.data.uri.split('ipfs://')[1]}`, // Construct gateway URL
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
