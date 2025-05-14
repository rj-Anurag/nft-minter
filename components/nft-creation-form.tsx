"use client";

import type React from "react";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PlusCircle, X } from "lucide-react";
import type { NftMetadata, NftAttribute } from "@/types/nft";
// New imports for FileUpload component
import { motion } from "motion/react";
import { IconUpload } from "@tabler/icons-react";
import { useDropzone } from "react-dropzone";
import { cn } from "@/lib/utils";

// FileUpload component (copied from your provided code)
const mainVariant = {
  initial: {
    x: 0,
    y: 0,
  },
  animate: {
    x: 20,
    y: -20,
    opacity: 0.9,
  },
};

const secondaryVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

function GridPattern() {
  const columns = 41;
  const rows = 11;
  return (
    <div className="flex bg-gray-100 dark:bg-neutral-900 shrink-0 flex-wrap justify-center items-center gap-x-px gap-y-px scale-105">
      {Array.from({ length: rows }).map((_, row) =>
        Array.from({ length: columns }).map((_, col) => {
          const index = row * columns + col;
          return (
            <div
              key={`${col}-${row}`}
              className={`w-10 h-10 flex shrink-0 rounded-[2px] ${
                index % 2 === 0
                  ? "bg-gray-50 dark:bg-neutral-950"
                  : "bg-gray-50 dark:bg-neutral-950 shadow-[0px_0px_1px_3px_rgba(255,255,255,1)_inset] dark:shadow-[0px_0px_1px_3px_rgba(0,0,0,1)_inset]"
              }`}
            />
          );
        })
      )}
    </div>
  );
}

const FileUpload = ({
  onChange,
}: {
  onChange?: (file: File | null) => void; // Modified to handle single file
}) => {
  const [file, setFile] = useState<File | null>(null); // Changed to single file
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (newFiles: File[]) => {
    const selectedFile = newFiles[0] || null; // Take only the first file
    setFile(selectedFile);
    onChange && onChange(selectedFile);
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const { getRootProps, isDragActive } = useDropzone({
    multiple: false,
    accept: { "image/*": [] }, // Restrict to image files
    noClick: true,
    onDrop: handleFileChange,
    onDropRejected: (error) => {
      console.log(error);
    },
  });

  return (
    <div className="w-full" {...getRootProps()}>
      <motion.div
        onClick={handleClick}
        whileHover="animate"
        className="p-6 group/file block rounded-xl cursor-pointer w-full relative overflow-hidden border border-dashed border-white hover:border-primary/50" // Adjusted styling
      >
        <input
          ref={fileInputRef}
          id="file-upload-handle"
          type="file"
          accept="image/*" // Restrict to image files
          onChange={(e) => handleFileChange(Array.from(e.target.files || []))}
          className="hidden"
        />
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]">
          <GridPattern />
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="relative z-20 font-sans font-bold text-neutral-700 dark:text-neutral-300 text-base">
            Upload NFT Image
          </p>
          <p className="relative z-20 font-sans font-normal text-neutral-400 dark:text-neutral-400 text-sm mt-2">
            Drag or drop your image here or click to upload (PNG, JPG, GIF, Max 10MB)
          </p>
          <div className="relative w-full mt-6 max-w-xl mx-auto">
            {file && (
              <motion.div
                key="file-upload"
                layoutId="file-upload"
                className={cn(
                  "relative overflow-hidden z-40 bg-white dark:bg-neutral-900 flex flex-col items-start justify-start md:h-24 p-4 mt-4 w-full mx-auto rounded-md",
                  "shadow-sm"
                )}
              >
                <div className="flex justify-between w-full items-center gap-4">
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    layout
                    className="text-base text-neutral-700 dark:text-neutral-300 truncate max-w-xs"
                  >
                    {file.name}
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    layout
                    className="rounded-lg px-2 py-1 w-fit shrink-0 text-sm text-neutral-600 dark:bg-neutral-800 dark:text-white shadow-input"
                  >
                    {(file.size / (1024 * 1024)).toFixed(2)} MB
                  </motion.p>
                </div>
                <div className="flex text-sm md:flex-row flex-col items-start md:items-center w-full mt-2 justify-between text-neutral-600 dark:text-neutral-400">
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    layout
                    className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800"
                  >
                    {file.type}
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    layout
                  >
                    modified {new Date(file.lastModified).toLocaleDateString()}
                  </motion.p>
                </div>
              </motion.div>
            )}
            {!file && (
              <motion.div
                layoutId="file-upload"
                variants={mainVariant}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                className={cn(
                  "relative group-hover/file:shadow-2xl z-40 bg-white dark:bg-neutral-900 flex items-center justify-center h-32 mt-4 w-full max-w-[8rem] mx-auto rounded-md",
                  "shadow-[0px_10px_50px_rgba(0,0,0,0.1)]"
                )}
              >
                {isDragActive ? (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-neutral-600 flex flex-col items-center"
                  >
                    Drop it
                    <IconUpload className="h-4 w-4 text-neutral-600 dark:text-neutral-400" />
                  </motion.p>
                ) : (
                  <IconUpload className="h-4 w-4 text-neutral-600 dark:text-neutral-300" />
                )}
              </motion.div>
            )}
            {!file && (
              <motion.div
                variants={secondaryVariant}
                className="absolute opacity-0 border border-dashed border-sky-400 inset-0 z-30 bg-transparent flex items-center justify-center h-32 mt-4 w-full max-w-[8rem] mx-auto rounded-md"
              ></motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

interface NftCreationFormProps {
  metadata: NftMetadata;
  onChange: (metadata: NftMetadata) => void;
  onPreview: () => void;
}

export default function NftCreationForm({ metadata, onChange, onPreview }: NftCreationFormProps) {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({ ...metadata, name: e.target.value });
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange({ ...metadata, description: e.target.value });
  };

  const handleImageChange = (file: File | null) => {
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
      onChange({ ...metadata, image: file });
    } else {
      setImagePreview(null);
      onChange({ ...metadata, image: null });
    }
  };

  const handleAddAttribute = () => {
    const newAttributes = [...metadata.attributes, { trait_type: "", value: "" }];
    onChange({ ...metadata, attributes: newAttributes });
  };

  const handleRemoveAttribute = (index: number) => {
    const newAttributes = metadata.attributes.filter((_, i) => i !== index);
    onChange({ ...metadata, attributes: newAttributes });
  };

  const handleAttributeChange = (index: number, field: keyof NftAttribute, value: string) => {
    const newAttributes = [...metadata.attributes];
    newAttributes[index] = { ...newAttributes[index], [field]: value };
    onChange({ ...metadata, attributes: newAttributes });
  };

  const isFormValid = () => {
    return metadata.name.trim() !== "" && metadata.image !== null;
  };

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
                className="mt-1 border border-white rounded-xl"
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
                className="mt-1 min-h-[120px] border border-white rounded-xl"
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
              <Button
                variant="outline"
                size="sm"
                onClick={handleAddAttribute}
                className="mt-2 border border-white rounded-xl hover:bg-white hover:text-black"
              >
                <PlusCircle className="h-4 w-4 mr-2" />
                Add Attribute
              </Button>
            </div>
          </div>
        </div>

        <div>
          <Label className="text-base mb-2 block">NFT Image *</Label>
          <FileUpload onChange={handleImageChange} />
          {imagePreview && (
            <div className="mt-4">
              <img
                src={imagePreview}
                alt="NFT Preview"
                className="max-h-[300px] max-w-full object-contain rounded-lg"
              />
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-end">
        <Button
          onClick={onPreview}
          disabled={!isFormValid()}
          className="bg-white text-black hover:animate-bounce "
        >
          Preview NFT
        </Button>
      </div>
    </div>
  );
}