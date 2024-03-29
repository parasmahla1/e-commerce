import { createClient } from "next-sanity";

export const sanityClient = createClient({
  projectId: "vege5s5z",
  dataset: 'production',
  apiVersion: "2024-03-20",
  useCdn: true,
});
