import React from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';
import { ACTIVE, COMPLETED } from '../constants/filterTypes';

const TodoList = ({ items }) => (
  <ul>
    {items.map(id => (
      <li key={id}>
        <TodoItem id={id}/>
      </li>
    ))}
  </ul>
);

export default connect(state => ({
  items: Object.entries(state.items)
    .filter(([, item]) => {
      switch (state.filter) {
        case COMPLETED:
          return item.completed;
        case ACTIVE:
          return !item.completed;
        default:
          return true;
      }
    })
    .map(([id]) => id),
}))(TodoList);
