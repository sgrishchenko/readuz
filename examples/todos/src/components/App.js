import React from 'react';
import { connect } from 'react-redux';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import { addTodo } from '../actions/todosActions';

const App = props => (
  <div>
    <TodoInput onSave={props.addTodo}/>
    <TodoList/>
  </div>
);

export default connect(undefined, {
  addTodo,
})(App);
