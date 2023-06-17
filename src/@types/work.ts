export type Constituent = {
  constituentID: number;
  role: string;
  name: string;
};

export interface Work {
  id: number;
  name: string;
  author: string;
  image: string;
  imageSmall: string;
  additionalImages: string[];
  isPublicDomain: boolean;
  constituents: Constituent[] | null;
}
