// @flow

import { inject, type Reader } from 'readuz';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { connect as felaConnect } from 'react-fela';
import { compose } from 'redux';
import * as itemActions from '../../actions/itemActions';

import type { State } from '../../types';
import type { ComponentEnv } from '../componentEnv';
import type { TodoItemProps } from './index';

export const TodoItem: Reader<ComponentEnv, React$ComponentType<{ id: string }>> = inject(
  (env: ComponentEnv) => env.TodoInput.component,
  (env: ComponentEnv) => env.TodoItem.style,
  (TodoInput, style) => {
    const TodoItemComponent = ({
      id,
      item,
      updateTodo,
      deleteTodo,
      styles,
      rules,
    }: TodoItemProps) => {
      const [editing, setEditing] = useState(false);

      const onCompletedChange = (event: SyntheticInputEvent<HTMLInputElement>) => {
        updateTodo({
          ...item,
          completed: event.target.checked,
        });
      };

      const onDoubleClick = () => setEditing(true);

      const onBlur = () => setEditing(false);

      const onSave = (text: string) => {
        setEditing(false);
        updateTodo({
          ...item,
          text,
        });
      };

      return !editing
        ? (
          <div className={styles.container}>
            <input
              type="checkbox"
              className={styles.checkbox}
              checked={item.completed}
              onChange={onCompletedChange}
            />
            <span
              title="Double-click to edit a todo"
              className={styles.text}
              onDoubleClick={onDoubleClick}
            >
              {item.text}
            </span>
            <button
              type="button"
              aria-label="Delete todo"
              className={styles.destroy}
              onClick={() => deleteTodo(id)}
            />
          </div>
        )
        : (
          <div className={styles.container}>
            <TodoInput
              text={item.text}
              onSave={onSave}
              extend={{ input: rules.input }}
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

    const mapStateToProps = (state: State, props: { id: string }) => ({
      item: state.items[props.id],
    });

    const mapDispatchToProps = {
      deleteTodo: itemActions.deleteTodo,
      updateTodo: itemActions.updateTodo,
    };

    return compose(
      connect(mapStateToProps, mapDispatchToProps),
      felaConnect(style),
    )(TodoItemComponent);
  },
);
