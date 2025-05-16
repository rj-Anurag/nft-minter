import type { NextApiRequest, NextApiResponse } from 'next';
import pinataSDK from '@pinata/sdk';
import formidable from 'formidable';
import fs from 'fs';

// Initialize Pinata with your API keys
// Ensure you have PINATA_API_KEY and PINATA_SECRET_API_KEY set in your environment variables (e.g., .env.local)
const pinata = new pinataSDK(process.env.NEXT_PUBLIC_PINATA_API_KEY, process.env.NEXT_PUBLIC_PINATA_SECRET_KEY);

// Configure formidable to handle file uploads
const form = formidable({ keepExtensions: true });

// Disable default body parser for this route to use formidable
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    // Parse the form data from the request
    form.parse(req, async (err: any, fields: { metadataJsonString?: string | string[]; }, files: { image?: formidable.File[]; }) => {
      if (err) {
        console.error("Error parsing form:", err);
        return res.status(500).json({ message: 'Error parsing form data' });
      }

      // Assume the image file is sent with the field name 'image'
      const imageFile = files.image?.[0] as formidable.File;

      // Assume metadata JSON is sent as a string with the field name 'metadataJsonString'
      const metadataJsonString = Array.isArray(fields.metadataJsonString)
        ? fields.metadataJsonString[0]
        : fields.metadataJsonString;

      if (!metadataJsonString) {
        return res.status(400).json({ message: 'No metadata JSON string provided' });
      }
      const metadataJson = JSON.parse(metadataJsonString);

      if (!imageFile) {
        return res.status(400).json({ message: 'No image file provided' });
      }

      if (!metadataJsonString) {
         return res.status(400).json({ message: 'No metadata JSON string provided' });
      }

      // Read the uploaded image file as a stream
      const imageStream = fs.createReadStream(imageFile.filepath);

      // Upload image to Pinata
      const imageUploadResult = await pinata.pinFileToIPFS(imageStream, {
        pinataMetadata: {
          name: metadataJson.name || 'nft_image', // Use NFT name or a default name
        } as any,
        pinataOptions: {
           cidVersion: 0 // Specify CID version if needed
        }
      });
      const imageUri = `ipfs://${imageUploadResult.IpfsHash}`;

      // Update the metadata JSON with the correct IPFS image URI
      metadataJson.image = imageUri;
      if (metadataJson.properties && metadataJson.properties.files && metadataJson.properties.files.length > 0) {
          metadataJson.properties.files[0].uri = imageUri;
          metadataJson.properties.files[0].type = imageFile.mimetype;
      } else {
           // Add properties if they don't exist (basic structure)
           metadataJson.properties = {
               files: [
                   {
                       uri: imageUri,
                       type: imageFile.mimetype
                   }
               ],
               category: 'image' // Default category
           };
      }


      // Upload the metadata JSON to Pinata
      const metadataUploadResult = await pinata.pinJSONToIPFS(metadataJson, {
        pinataMetadata: {
          name: `${metadataJson.name || 'nft'}_metadata`, // Use NFT name or a default name
        } as any,
         pinataOptions: {
           cidVersion: 0 // Specify CID version if needed
        }
      });
      const metadataUri = `ipfs://${metadataUploadResult.IpfsHash}`;

      // Return the IPFS URIs
      res.status(200).json({ imageUri, metadataUri });
    });

  } catch (error) {
    console.error("Error uploading to IPFS:", error);
    res.status(500).json({ message: 'Error uploading to IPFS', error: (error as Error).message });
  }
}