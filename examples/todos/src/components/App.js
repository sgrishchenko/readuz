import React from 'react';
import { connect } from 'react-redux';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import Filter from './Filter';
import { addTodo } from '../actions/itemActions';

const App = props => (
  <div>
    <TodoInput
      placeholder="What needs to be done?"
      onSave={props.addTodo}
    />
    <TodoList/>
    <Filter/>
  </div>
);

export default connect(undefined, {
  addTodo,
})(App);
