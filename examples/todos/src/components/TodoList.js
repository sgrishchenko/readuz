import React from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';


const TodoList = ({ todos }) => (
  <ul>
    {Object.keys(todos).map(id => (
      <li key={id}>
        <TodoItem id={id}/>
      </li>
    ))}
  </ul>
);

export default connect(state => ({
  todos: state.todos,
}))(TodoList);
