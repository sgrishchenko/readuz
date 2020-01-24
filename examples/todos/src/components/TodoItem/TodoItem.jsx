// @flow

import { inject, type Reader } from 'readuz';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { connect as felaConnect } from 'react-fela';
import { compose } from 'redux';
import * as itemActions from '../../actions/itemActions';

import type { State } from '../../types';
import type { ComponentEnv } from '../componentEnv';
import type { TodoItemProps } from './index';

export type TodoItemState = {
  editing: boolean,
}

export const TodoItem: Reader<ComponentEnv, React$ComponentType<{ id: string }>> = inject(
  (env: ComponentEnv) => env.TodoInput.component,
  (env: ComponentEnv) => env.TodoItem.style,
  (TodoInput, style) => {
    class TodoItemComponent extends Component<TodoItemProps, TodoItemState> {
      constructor(props: TodoItemProps) {
        super(props);

        this.state = {
          editing: false,
        };
      }

      onCompletedChange = (event: SyntheticInputEvent<HTMLInputElement>) => {
        const { item, updateTodo } = this.props;
        updateTodo({
          ...item,
          completed: event.target.checked,
        });
      };

      onDoubleClick = () => this.setState({ editing: true });

      onBlur = () => this.setState({ editing: false });

      onSave = (text: string) => {
        const { item, updateTodo } = this.props;
        this.setState({ editing: false });
        updateTodo({
          ...item,
          text,
        });
      };

      render() {
        const { id, item, deleteTodo } = this.props;
        const { styles = {}, rules = {} } = this.props;
        const { editing } = this.state;

        return !editing
          ? (
            <div className={styles.container}>
              <input
                type="checkbox"
                className={styles.checkbox}
                checked={item.completed}
                onChange={this.onCompletedChange}
              />
              <span
                title="Double-click to edit a todo"
                className={styles.text}
                onDoubleClick={this.onDoubleClick}
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
                onSave={this.onSave}
                extend={{ input: rules.input }}
                inputRef={(input) => {
                  if (!input) return;

                  input.focus();
                  input.setSelectionRange(input.value.length, input.value.length);
                  input.addEventListener('blur', this.onBlur);
                }}
              />
            </div>
          );
      }
    }

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
