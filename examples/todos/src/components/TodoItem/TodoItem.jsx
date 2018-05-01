// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { connect as felaConnect } from 'react-fela';
import { compose } from 'redux';
import TodoInput from '../TodoInput';
import * as itemActions from '../../actions/itemActions';
import style from './TodoItem.style';

import type { State, Todo } from '../../types';

export type TodoItemProps = {
  id: string,
  item: Todo,
  updateTodo: typeof itemActions.updateTodo,
  deleteTodo: typeof itemActions.deleteTodo,
  styles: Object,
  rules: Object,
}

export type TodoItemState = {
  editing: boolean,
}

class TodoItem extends Component<TodoItemProps, TodoItemState> {
  state = {
    editing: false,
  };

  onCompletedChange = (event: SyntheticInputEvent<HTMLInputElement>) => this.props.updateTodo({
    ...this.props.item,
    completed: event.target.checked,
  });

  onDoubleClick = () => this.setState({ editing: true });

  onBlur = () => this.setState({ editing: false });

  onSave = (text: string) => {
    this.setState({ editing: false });
    this.props.updateTodo({
      ...this.props.item,
      text,
    });
  };

  render() {
    const { id, item } = this.props;
    const { styles, rules } = this.props;

    return !this.state.editing
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
            className={styles.destroy}
            onClick={() => this.props.deleteTodo(id)}
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

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  felaConnect(style),
)(TodoItem);
