import { combineReducers } from 'redux';
import counter, { initialState as counterState } from './counter';
import todos, { initialState as todoState } from './todos';

export const initialState = () => ({
  counter: counterState(),
  todos: todoState(),
});

export default combineReducers({
  counter,
  todos,
});
