import { Action } from '../actions';
import ActionTypes from './actionTypes';

interface State {
  count: number;
}

export const initialState = (injects?: State): State => ({
  count: 0,
  ...injects
});

const reducer = (state: State = initialState(), action: Action): State => {
  switch (action.type) {
    case ActionTypes.INCREMENT:
      return { ...state, count: state.count + 1 };
    case ActionTypes.DECREMENT:
      return { ...state, count: state.count - 1 };
    case ActionTypes.SET_COUNT:
      return { ...state, count: action.payload.amount };
    default:
      return state;
  }
};

export default reducer;
