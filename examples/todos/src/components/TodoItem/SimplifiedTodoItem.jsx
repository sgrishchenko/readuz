// @flow

import { inject, type Reader } from 'readuz';
import React from 'react';
import { connect } from 'react-redux';
import { connect as felaConnect } from 'react-fela';
import { compose } from 'redux';
import * as itemActions from '../../actions/itemActions';

import type { State } from '../../types';
import type { ComponentEnv } from '../componentEnv';
import type { TodoItemProps } from './index';

export const SimplifiedTodoItem: Reader<ComponentEnv, React$ComponentType<{ id: string }>> = inject(
  (env: ComponentEnv) => env.TodoItem.style,
  (style) => {
    const TodoItemComponent = ({
      id, item, deleteTodo, updateTodo, styles = {},
    }: TodoItemProps) => {
      const onCompletedChange = () => updateTodo({
        ...item,
        completed: !item.completed,
      });

      return (
        <div className={styles.container}>
          <span
            role="checkbox"
            aria-checked={item.completed}
            tabIndex={0}
            title="Click to mark todo as completed"
            className={styles.text}
            onClick={onCompletedChange}
            onKeyDown={(event) => event.key === 'Enter' && onCompletedChange()}
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
