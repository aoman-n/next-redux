import React, { FC, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StoreState } from '../../store';
import * as actions from '../../store/counter/actions';

import Component from '../presentators/counter';

const counterSelector = (state: StoreState) => state.counter.count;

const Container: FC = () => {
  const count = useSelector(counterSelector);
  const dispatch = useDispatch();

  const onClickIncrement = useCallback(() => {
    dispatch(actions.increment());
  }, []);

  const onClickDecrement = useCallback(() => {
    dispatch(actions.decrement());
  }, []);

  const onClickSetCount = useCallback((amount: number) => {
    dispatch(actions.setCount(amount));
  }, []);

  return (
    <Component {...{ count, onClickDecrement, onClickIncrement, onClickSetCount }} />
  )
}

export default Container;