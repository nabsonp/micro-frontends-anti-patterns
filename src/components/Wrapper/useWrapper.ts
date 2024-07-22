import { useEffect, useReducer } from 'react';

import { ACTIONS, INIT_STATE, reducer } from '../../reducer/searchReducer';
import { useDebounce } from '../../hooks/useDebounce';

export const SEARCH_DEBOUNCE_TIME = 400;

const useWrapper = () => {
  const [{ query, search, typing }, dispatch] = useReducer(reducer, INIT_STATE);
  const debouncedQuery = useDebounce(query, SEARCH_DEBOUNCE_TIME);

  useEffect(() => {
    if (query === '') dispatch({ type: ACTIONS.CLEAR_FORM });
    else
      debouncedQuery === query && dispatch({ type: ACTIONS.USER_STOP_TYPING });
  }, [debouncedQuery, dispatch, query]);

  return {
    dispatch,
    search,
    typing,
    query,
    debouncedQuery,
  };
};

export default useWrapper;
