import React, { Component } from 'react';
import { connect } from 'react-redux';
import { connect as felaConnect } from 'react-fela';
import { compose } from 'redux';
import { combineRules } from 'fela';
import { identifier } from '../configs/felaConfig';
import { deleteTodo, updateTodo } from '../actions/itemActions';
import TodoInput from './TodoInput';
import activeIcon from './active.svg';
import completedIcon from './completed.svg';

class TodoItem extends Component {
  state = {
    editing: false,
  };

  onCompletedChange = event => this.props.updateTodo({
    ...this.props.item,
    completed: event.target.checked,
  });

  onDoubleClick = () => this.setState({ editing: true });

  onBlur = () => this.setState({ editing: false });

  onSave = (text) => {
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
          <label
            title="Double-click to edit a todo"
            className={styles.text}
            onDoubleClick={this.onDoubleClick}
          >
            {item.text}
          </label>
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

const mapStateToProps = (state, props) => ({
  item: state.items[props.id],
});

const mapDispatchToProps = {
  deleteTodo,
  updateTodo,
};

const destroy = identifier();
const style = {
  container: {
    display: 'flex',
    alignItems: 'center',
    [`:hover .${destroy}`]: {
      display: 'block',
    },
  },
  checkbox: {
    appearance: 'none',
    outline: 'none',
    width: '40px',
    ':after': {
      content: `url(${activeIcon})`,
    },
    ':checked:after': {
      content: `url(${completedIcon})`,
    },
  },
  text: ({ item }) => {
    const completedStyle = item.completed
      ? {
        color: '#d9d9d9',
        textDecoration: 'line-through',
      }
      : {};

    return {
      display: 'block',
      flexGrow: 1,
      padding: '15px',
      fontSize: '24px',
      transition: 'color 0.4s',
      ...completedStyle,
    };
  },
  destroy: combineRules(destroy, () => ({
    display: 'none',
    fontSize: '30px',
    width: '60px',
    outline: 'none',
    background: 'none',
    border: 'none',
    color: '#cc9a9a',
    transition: 'color 0.2s ease-out',
    ':after': {
      content: '"×"',
    },
    ':hover': {
      color: '#af5b5e',
    },
  })),
  input: {
    backgroundColor: '#ffffff',
    border: '1px solid #999999',
    boxShadow: 'inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2)',
  },
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  felaConnect(style),
)(TodoItem);
