import {
    SET_ITEMS
} from '../redux-types';

export const setItems = (items) => {
    return {
      type: SET_ITEMS,
      payload: items,
    };
  };