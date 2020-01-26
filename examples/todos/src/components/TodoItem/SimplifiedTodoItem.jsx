// @flow

import { inject, type Reader } from 'readuz';
import React, { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { connect as felaConnect, useFela } from 'react-fela';
import { compose } from 'redux';
import * as itemActions from '../../actions/itemActions';

import type { State } from '../../types';
import type { ComponentEnv } from '../componentEnv';

export const SimplifiedTodoItem: Reader<ComponentEnv, React$ComponentType<{ id: string }>> = inject(
  (env: ComponentEnv) => env.TodoItem.style,
  (style) => {
    const TodoItemComponent = ({ id }: { id: string }) => {
      const item = useSelector((state: State) => state.items[id]);

      const dispatch = useDispatch();

      const onCompletedChange = () => {
        dispatch(
          itemActions.updateTodo({
            ...item,
            completed: !item.completed,
          }),
        );
      };

      const onDeleteClick = () => {
        dispatch(itemActions.deleteTodo(id));
      };

      const { css } = useFela({ completed: item.completed });

      return (
        <div className={css(style.container)}>
          <span
            role="checkbox"
            aria-checked={item.completed}
            tabIndex={0}
            title="Click to mark todo as completed"
            className={css(style.text)}
            onClick={onCompletedChange}
            onKeyDown={(event) => event.key === 'Enter' && onCompletedChange()}
          >
            {item.text}
          </span>
          <button
            type="button"
            aria-label="Delete todo"
            className={css(style.destroy)}
            onClick={onDeleteClick}
          />
        </div>
      );
    };

    return compose(
      memo,
      felaConnect(style),
    )(TodoItemComponent);
  },
);
