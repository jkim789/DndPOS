import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers/Root-reducer';

export default createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      thunkMiddleware, createLogger({ collapsed: true }
  )))
);