export enum DrawerHeaderItemEnum {
  CATALOG = 'catalog',
  HOME = 'home',
  ABOUT = 'info',
  BACKGROUND = 'background',
}

export enum FilterItemsEnum {
  ALL = 'all',
  INTER_FRONTEND = 'Inter-frontend',
  INTRA_FRONTEND = 'Intra-frontend',
  OPERATION = 'Operation',
  DEVELOPMENT = 'Development',
}

export const FilterProperties = {
  'Inter-frontend': {
    color: 'tag1',
    hint: 'Considers the structural division and communication involving two or more MFEs.',
  },
  'Intra-frontend': {
    color: 'tag2',
    hint: 'Considers a single MFE component and its design.',
  },
  Operation: {
    color: 'tag3',
    hint: 'Related to the operational practices and continuous maintenance of the application.',
  },
  Development: {
    color: 'tag4',
    hint: 'Related to the development team and their decisions around the architecture.',
  },
};
