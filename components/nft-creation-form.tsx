"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { PlusCircle, X, Upload, ImageIcon } from "lucide-react"
import type { NftMetadata, NftAttribute } from "@/types/nft"

interface NftCreationFormProps {
  metadata: NftMetadata
  onChange: (metadata: NftMetadata) => void
  onPreview: () => void
}

export default function NftCreationForm({ metadata, onChange, onPreview }: NftCreationFormProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({ ...metadata, name: e.target.value })
  }

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange({ ...metadata, description: e.target.value })
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Create a preview URL
    const previewUrl = URL.createObjectURL(file)
    setImagePreview(previewUrl)

    // Update the metadata with the file
    onChange({ ...metadata, image: file })
  }

  const handleAddAttribute = () => {
    const newAttributes = [...metadata.attributes, { trait_type: "", value: "" }]
    onChange({ ...metadata, attributes: newAttributes })
  }

  const handleRemoveAttribute = (index: number) => {
    const newAttributes = metadata.attributes.filter((_, i) => i !== index)
    onChange({ ...metadata, attributes: newAttributes })
  }

  const handleAttributeChange = (index: number, field: keyof NftAttribute, value: string) => {
    const newAttributes = [...metadata.attributes]
    newAttributes[index] = { ...newAttributes[index], [field]: value }
    onChange({ ...metadata, attributes: newAttributes })
  }

  const triggerFileInput = () => {
    fileInputRef.current?.click()
  }

  const isFormValid = () => {
    return metadata.name.trim() !== "" && metadata.image !== null
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="space-y-4">
            <div>
              <Label htmlFor="nft-name" className="text-base">
                NFT Name *
              </Label>
              <Input
                id="nft-name"
                placeholder="Enter NFT name"
                value={metadata.name}
                onChange={handleNameChange}
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="nft-description" className="text-base">
                Description
              </Label>
              <Textarea
                id="nft-description"
                placeholder="Describe your NFT"
                value={metadata.description}
                onChange={handleDescriptionChange}
                className="mt-1 min-h-[120px]"
              />
            </div>

            <div>
              <Label className="text-base mb-2 block">Attributes</Label>
              {metadata.attributes.map((attr, index) => (
                <div key={index} className="flex gap-2 mb-2">
                  <Input
                    placeholder="Trait name"
                    value={attr.trait_type}
                    onChange={(e) => handleAttributeChange(index, "trait_type", e.target.value)}
                    className="flex-1"
                  />
                  <Input
                    placeholder="Value"
                    value={attr.value}
                    onChange={(e) => handleAttributeChange(index, "value", e.target.value)}
                    className="flex-1"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleRemoveAttribute(index)}
                    className="h-10 w-10"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
              <Button variant="outline" size="sm" onClick={handleAddAttribute} className="mt-2">
                <PlusCircle className="h-4 w-4 mr-2" />
                Add Attribute
              </Button>
            </div>
          </div>
        </div>

        <div>
          <Label className="text-base mb-2 block">NFT Image *</Label>
          <Card
            className="border-dashed border-2 hover:border-primary/50 transition-colors cursor-pointer"
            onClick={triggerFileInput}
          >
            <CardContent className="flex flex-col items-center justify-center p-6 h-[300px]">
              {imagePreview ? (
                <img
                  src={imagePreview || "/placeholder.svg"}
                  alt="NFT Preview"
                  className="max-h-full max-w-full object-contain rounded-lg"
                />
              ) : (
                <div className="flex flex-col items-center justify-center text-center">
                  <div className="bg-muted rounded-full p-4 mb-4">
                    <ImageIcon className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <p className="text-lg font-medium mb-1">Upload NFT Image</p>
                  <p className="text-sm text-muted-foreground mb-4">PNG, JPG or GIF (Max 10MB)</p>
                  <Button variant="outline" size="sm">
                    <Upload className="h-4 w-4 mr-2" />
                    Select File
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
          <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
        </div>
      </div>

      <div className="flex justify-end">
        <Button onClick={onPreview} disabled={!isFormValid()} className="bg-purple-600 hover:bg-purple-700">
          Preview NFT
        </Button>
      </div>
    </div>
  )
}
