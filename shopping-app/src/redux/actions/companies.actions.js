import {
    SET_COMPANIES
} from '../redux-types';

export const setCompanies = (companies) => {
    return {
      type: SET_COMPANIES,
      payload: companies,
    };
  };