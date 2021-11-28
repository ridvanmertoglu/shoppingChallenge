import { combineReducers } from 'redux';

import {
  itemsReducer,
  companiesReducer,
  basketReducer
} from './';


const appReducer = combineReducers({
  itemsReducer,
  companiesReducer,
  basketReducer,
});


export const rootReducer = (
  state,
  action,
) => {
  return appReducer(state, action);
};
