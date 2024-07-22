import { ActionTypes } from '../../reducer/searchReducer';

export type WrapperContextProps = {
  typing: boolean;
  search: string;
  query: string;
  dispatch: React.Dispatch<ActionTypes>;
  debouncedQuery: string;
};
