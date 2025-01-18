import { createClient } from 'next-sanity';
import ImageUrlBuilder from '@sanity/image-url';
import { apiVersion, dataset, projectId } from '../env';

// Sanity client configuration
const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

// Correct usage of ImageUrlBuilder
const builder =  ImageUrlBuilder(client);

// Function to generate image URLs
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const urlFor = (source: any) => builder.image(source);

export default client;
