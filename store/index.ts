import { createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer, { initialState } from './reducer';

export type StoreState = ReturnType<typeof initialState>;
export type ReduxStore = Store<StoreState>;

export function initStore(state = initialState()) {
  return createStore(reducer, state, composeWithDevTools());
}
