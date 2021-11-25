import { combineReducers } from 'redux';

import {
  itemsReducer,
  companiesReducer,
} from './';


const appReducer = combineReducers({
  itemsReducer,
  companiesReducer,
});


export const rootReducer = (
  state,
  action,
) => {
  return appReducer(state, action);
};
