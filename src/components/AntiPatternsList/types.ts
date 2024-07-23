import { FilterProperties } from '../../utils/constants';

export type TAntiPatternsItem = {
  name: string;
  category: keyof typeof FilterProperties;
  problem: { [key: string]: string };
  example: { [key: string]: string };
  solution: { [key: string]: string };
  highlight?: string;
};
