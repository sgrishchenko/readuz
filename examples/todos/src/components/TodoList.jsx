import React from 'react';
import { connect } from 'react-redux';
import { connect as felaConnect } from 'react-fela';
import { compose } from 'redux';
import TodoItem from './TodoItem';
import { ACTIVE, COMPLETED } from '../constants/filterTypes';

const TodoList = ({ items, styles }) => (
  <ul className={styles.list}>
    {items.map(id => (
      <li key={id} className={styles.item}>
        <TodoItem id={id} />
      </li>
    ))}
  </ul>
);

const mapStateToProps = state => ({
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
});

const style = {
  list: {
    padding: 0,
    margin: 0,
    listStyle: 'none',
  },
  item: {
    borderBottom: '1px solid #ededed',
  },
};

export default compose(
  connect(mapStateToProps, {}),
  felaConnect(style),
)(TodoList);
