// @flow

import React from 'react';
import { connect } from 'react-redux';
import { connect as felaConnect } from 'react-fela';
import { compose } from 'redux';
import TodoItem from '../TodoItem';
import { ACTIVE, COMPLETED } from '../../constants/filterTypes';
import style from './TodoList.style';

import type { State } from '../../types';

export type TodoListProps = {
  items: string[],
  styles: Object,
}

const TodoList = ({ items, styles }: TodoListProps) => (
  <ul className={styles.list}>
    {items.map(id => (
      <li key={id} className={styles.item}>
        <TodoItem id={id} />
      </li>
    ))}
  </ul>
);

const mapStateToProps = (state: State) => ({
  items: Object.entries(state.items)
    .filter(([, item]) => {
      if (!item || typeof item !== 'object') {
        return false;
      }

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

export default compose(
  connect(mapStateToProps, {}),
  felaConnect(style),
)(TodoList);
