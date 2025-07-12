export interface About {
  name: string;
  description: string;
  version: string;
  author: string;
  license: string;
}

export interface NotFoundData {
  title: string;
  code: number;
  message: string;
  linkText: string;
}

export interface Metadata {
  title: string;
  description: string;
}

import aboutData from "./about.json";
import notFoundData from "./not-found.json";
import metaData from "./metadata.json";

export const about = aboutData as About;
export const notFound = notFoundData as NotFoundData;
export const metadata = metaData as Metadata;

export const global = {
  about,
  "not-found": notFound,
  metadata,
};

export default { global };
