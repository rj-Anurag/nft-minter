export interface NftAttribute {
  trait_type: string
  value: string
}

export interface NftMetadata {
  name: string
  description: string
  image: File | null
  attributes: NftAttribute[]
}
