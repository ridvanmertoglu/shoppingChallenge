import {
    SET_ITEMS,
    SET_TAGS,
} from '../redux-types';

export const setItems = (items) => {
    return {
      type: SET_ITEMS,
      payload: items,
    };
  };

  export const setTags= (tags) => {
    return {
      type: SET_TAGS,
      payload: tags,
    };
  };