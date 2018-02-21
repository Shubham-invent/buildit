//import {createStore,applyMiddleware} from 'redux';

import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
//import reduxImmutableStateInvariant from 'redux-ummutable-state-invariant';
export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
  );
}
