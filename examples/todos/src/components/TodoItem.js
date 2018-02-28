import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo } from '../actions/todosActions';

const App = ({ id, todo, ...props }) => (
  <div>
    {todo.text}
    <button
      onClick={() => props.deleteTodo(id)}
    >
      x
    </button>
  </div>
);

export default connect((state, props) => ({
  todo: state.todos[props.id],
}), {
  deleteTodo,
})(App);
