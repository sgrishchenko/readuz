import React from 'react';
import { connect } from 'react-redux';

const Counter = ({ count }) => (
  <span>
    {count} {count === 1 ? 'item' : 'items'} left
  </span>
);

export default connect(state => ({
  count: Object.values(state.items)
    .filter(item => !item.completed)
    .length,
}))(Counter);
