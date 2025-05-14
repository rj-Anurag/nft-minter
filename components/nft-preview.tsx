"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { NftMetadata } from "@/types/nft"
import { useEnvironment } from "@/hooks/use-environment"

interface NftPreviewProps {
  metadata: NftMetadata
}

export default function NftPreview({ metadata }: NftPreviewProps) {
  const { environment } = useEnvironment()
  const [imagePreview, setImagePreview] = useState<string | null>(null)

  useEffect(() => {
    if (metadata.image) {
      const previewUrl = URL.createObjectURL(metadata.image)
      setImagePreview(previewUrl)

      return () => {
        URL.revokeObjectURL(previewUrl)
      }
    }
  }, [metadata.image])

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">NFT Preview</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="overflow-hidden border border-[hsl(240_4%_16%)]">
          <div className="aspect-square bg-[hsl(240_4%_16%)]  relative">
            {imagePreview ? (
              <img
                src={imagePreview || "/placeholder.svg"}
                alt={metadata.name}
                className="w-full h-full object-contain"
              />
            ) : (
              <div className="flex items-center justify-center h-full">No image provided</div>
            )}
          </div>
        </Card>

        <div className="space-y-4 border border-white/50 rounded-lg pt-2">
          <div>
            <h3 className="text-xl font-bold">{metadata.name || "Untitled NFT"}</h3>
            <Badge variant="outline" className="mt-1">
              {environment === "devnet" ? "Devnet" : "Mainnet"}
            </Badge>
          </div>

          <p className="text-muted-foreground">{metadata.description || "No description provided"}</p>

          {metadata.attributes.length > 0 && (
            <div>
              <h4 className="text-sm font-medium mb-2">Attributes</h4>
              <div className="grid grid-cols-2 gap-2">
                {metadata.attributes.map((attr, index) => (
                  <Card key={index} className="p-2">
                    <div className="text-xs text-muted-foreground uppercase">{attr.trait_type}</div>
                    <div className="font-medium">{attr.value}</div>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
