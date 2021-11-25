import logger from 'redux-logger';

import { createStore, applyMiddleware, compose} from 'redux';

import { rootReducer } from './reducers/root.reducer';

const configureStore = () => {
  let composed = [applyMiddleware(logger)];

  if (process.env.NODE_ENV === 'production') {
    composed = [applyMiddleware()];
  }

  const store = createStore(rootReducer, undefined, compose(...composed));

  return store;
};

export default configureStore;
