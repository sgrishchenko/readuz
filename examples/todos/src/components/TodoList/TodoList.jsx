// @flow

import { inject } from 'readuz';
import React from 'react';
import { connect } from 'react-redux';
import { connect as felaConnect } from 'react-fela';
import { compose } from 'redux';
import { ACTIVE, COMPLETED } from '../../constants/filterTypes';

import type { State } from '../../types';
import type { ComponentEnv } from '../componentEnv';
import type { TodoListProps } from './index';

export default inject(
  (env: ComponentEnv) => env.TodoItem.component,
  (env: ComponentEnv) => env.TodoList.style,
  (TodoItem, style) => {
    const TodoList = ({ items, styles = {} }: TodoListProps) => (
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

    return compose(
      connect(mapStateToProps, {}),
      felaConnect(style),
    )(TodoList);
  },
);
