import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTodo, updateTodo } from '../actions/itemActions';
import TodoInput from './TodoInput';

class TodoItem extends Component {
  state = {
    editing: false,
  };

  onCompletedChange = event => this.props.updateTodo({
    ...this.props.item,
    completed: event.target.value,
  });

  onDoubleClick = () => this.setState({ editing: true });

  onSave = (text) => {
    this.setState({ editing: false });
    this.props.updateTodo({
      ...this.props.item,
      text,
    });
  };

  render() {
    const { id, item, ...props } = this.props;

    return (
      <div>
        {!this.state.editing
          ? (
            <label onDoubleClick={this.onDoubleClick}>
              <input
                type="checkbox"
                checked={item.completed}
                onChange={this.onCompletedChange}
              />
              {item.text}
            </label>
          )
          : (
            <TodoInput
              text={item.text}
              onSave={this.onSave}
            />
          )
        }
        <button
          onClick={() => props.deleteTodo(id)}
        >
          x
        </button>
      </div>
    );
  }
}

export default connect((state, props) => ({
  item: state.items[props.id],
}), {
  deleteTodo,
  updateTodo,
})(TodoItem);
