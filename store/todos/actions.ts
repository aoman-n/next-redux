import uuid from 'uuid/v4';
import actionTypes from './actionTypes';

export const addTodo = (task: string) => ({
  type: actionTypes.ADD_TODO,
  payload: {
    id: uuid(),
    done: false,
    task
  }
});

export const doneTodo = (id: string) => ({
  type: actionTypes.DONE_TODO,
  payload: { id }
});
