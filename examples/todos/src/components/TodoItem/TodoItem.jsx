// @flow

import { inject, type Reader } from 'readuz';
import React, { memo, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFela } from 'react-fela';
import * as itemActions from '../../actions/itemActions';

import type { State } from '../../types';
import type { ComponentEnv } from '../componentEnv';

export const TodoItem: Reader<ComponentEnv, React$ComponentType<{ id: string }>> = inject(
  (env: ComponentEnv) => env.TodoInput.component,
  (env: ComponentEnv) => env.TodoItem.style,
  (TodoInput, style) => {
    const TodoItemComponent = ({ id }: { id: string }) => {
      const [editing, setEditing] = useState(false);

      const item = useSelector((state: State) => state.items[id]);

      const dispatch = useDispatch();

      const onCompletedChange = (event: SyntheticInputEvent<HTMLInputElement>) => {
        dispatch(
          itemActions.updateTodo({
            ...item,
            completed: event.target.checked,
          }),
        );
      };

      const onDoubleClick = () => setEditing(true);

      const onBlur = () => setEditing(false);

      const onSave = (text: string) => {
        setEditing(false);
        dispatch(
          itemActions.updateTodo({
            ...item,
            text,
          }),
        );
      };

      const onDeleteClick = () => {
        dispatch(itemActions.deleteTodo(id));
      };

      const { css } = useFela({ completed: item.completed });
      const todoInputExtend = useMemo(() => ({
        input: style.input,
      }), []);

      return !editing
        ? (
          <div className={css(style.container)}>
            <input
              type="checkbox"
              className={css(style.checkbox)}
              checked={item.completed}
              onChange={onCompletedChange}
            />
            <span
              title="Double-click to edit a todo"
              className={css(style.text)}
              onDoubleClick={onDoubleClick}
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
        )
        : (
          <div className={css(style.container)}>
            <TodoInput
              text={item.text}
              onSave={onSave}
              extend={todoInputExtend}
              inputRef={(input) => {
                if (!input) return;

                input.focus();
                input.setSelectionRange(input.value.length, input.value.length);
                input.addEventListener('blur', onBlur);
              }}
            />
          </div>
        );
    };

    return memo(TodoItemComponent);
  },
);
