// @flow

import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import type { State } from '../../types';

const CounterComponent = () => {
  const count = useSelector((state: State) => (
    Object.values(state.items)
      .filter((item) => item && typeof item === 'object' && !item.completed)
      .length
  ));

  return (
    <span>
      {count}
      {' '}
      {count === 1 ? 'item' : 'items'}
      {' '}
        left
    </span>
  );
};

export const Counter: React$ComponentType<{}> = memo(CounterComponent);
