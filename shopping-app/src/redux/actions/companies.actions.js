import {
    SET_COMPANIES
} from '../redux-types';

export const setCompanies = (items) => {
    return {
      type: SET_COMPANIES,
      payload: items,
    };
  };