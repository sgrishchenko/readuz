// @flow

import React from 'react';
import { connect } from 'react-redux';

import type { CounterProps } from './index';

const Counter = ({ count }: CounterProps) => (
  <span>
    {count} {count === 1 ? 'item' : 'items'} left
  </span>
);

export default connect(state => ({
  count: Object.values(state.items)
    .filter(item => item && typeof item === 'object' && !item.completed)
    .length,
}))(Counter);
