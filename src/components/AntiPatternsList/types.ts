import { FilterProperties } from '../../utils/constants';

export type RelatedAntiPatternField = {
  title: string;
};

export type HyoerlinkField = {
  title: string;
  href: string;
};

export type TextImageField = {
  text: string;
  image?: string;
};

export type TAntiPatternsItem = {
  name: string;
  alsoKnownAs?: string;
  category: keyof typeof FilterProperties;
  problem: TextImageField;
  symptomsAndConsequences: string;
  solution: TextImageField;
  resultingContext: string;
  example: TextImageField;
  notes?: string;
  relatedAntiPatterns: RelatedAntiPatternField[];
  references: HyoerlinkField[];
  highlight?: string;
};
