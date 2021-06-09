import { LIST_CATEGORIES } from './actions';

export const INITIAL_STATE = {
  categories: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LIST_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
};
