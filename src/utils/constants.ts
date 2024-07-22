export enum DrawerHeaderItemEnum {
  CATALOG = 'catalog',
  HOME = 'home',
  ABOUT_CATALOG = 'about-catalog',
  ABOUT_US = 'abaout-us',
}

export enum FilterItemsEnum {
  ALL = 'all',
  INTER_FRONTEND = 'Inter-frontend',
  INTRA_FRONTEND = 'Intra-frontend',
  OPERATION = 'Operation',
  DEVELOPMENT = 'Development',
}

export const FilterProperties = {
  'Inter-frontend': { color: 'tag1', hint: 'Inter frontend explication' },
  'Intra-frontend': { color: 'tag2', hint: 'Intra frontend explication' },
  Operation: { color: 'tag3', hint: 'Operation explication' },
  Development: { color: 'tag4', hint: 'Development explication' },
};
