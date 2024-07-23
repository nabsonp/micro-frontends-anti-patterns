export const SEARCH_DEBOUNCE_TIME = 400;

export const ACTIONS = {
  USER_TYPING: 'USER_TYPING',
  USER_STOP_TYPING: 'USER_STOP_TYPING',
  CLEAR_FORM: 'CLEAR_FORM',
} as const;

export const INIT_STATE = {
  typing: false,
  query: '',
  search: '',
};

type State = {
  typing: boolean;
  query: string;
  search: string;
};

export type ActionTypes =
  | { type: 'USER_TYPING'; payload: string }
  | { type: 'USER_STOP_TYPING' }
  | { type: 'CLEAR_FORM' };

export function reducer(state: State, action: ActionTypes) {
  switch (action.type) {
    case ACTIONS.USER_TYPING: {
      return { ...state, query: action.payload, typing: true };
    }
    case ACTIONS.USER_STOP_TYPING: {
      return { ...state, typing: false, search: state.query };
    }
    case ACTIONS.CLEAR_FORM: {
      return { typing: false, search: '', query: '' };
    }
    default: {
      return state;
    }
  }
}
