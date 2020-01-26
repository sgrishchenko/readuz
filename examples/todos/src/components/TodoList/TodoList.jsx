// @flow

import { inject, type Reader } from 'readuz';
import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { useFela } from 'react-fela';
import { ACTIVE, COMPLETED } from '../../constants/filterTypes';

import type { State } from '../../types';
import type { ComponentEnv } from '../componentEnv';

export const TodoList: Reader<ComponentEnv, React$ComponentType<{}>> = inject(
  (env: ComponentEnv) => env.TodoItem.component,
  (env: ComponentEnv) => env.TodoList.style,
  (TodoItem, style) => {
    const TodoListComponent = () => {
      const items = useSelector((state: State) => (
        Object.entries(state.items)
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
          .map(([id]) => id)
      ));

      const { css } = useFela();

      return (
        <ul className={css(style.list)}>
          {items.map((id) => (
            <li key={id} className={css(style.item)}>
              <TodoItem id={id} />
            </li>
          ))}
        </ul>
      );
    };

    return memo(TodoListComponent);
  },
);
