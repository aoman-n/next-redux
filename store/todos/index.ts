import { Action } from '../actions';
import ActionTypes from './actionTypes';

interface Todo {
  id: string;
  done: boolean;
  task: string;
}

interface State {
  todos: Todo[];
}

export const initialState = (injects?: State) => ({
  todos: [],
  ...injects
});

const reducer = (state: State = initialState(), action: Action) => {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case ActionTypes.DONE_TODO:
      const newTodos = state.todos.map(todo =>
        todo.id === action.payload.id ? { ...todo, done: true } : todo
      );
      return { ...state, todos: newTodos };
    default:
      return state;
  }
};

export default reducer;
