import { ADD_TODO, UPDATE_TODO, DELETE_TODO, DELETE_COMPLETED_TODOS, TOGGLE_ALL_TODOS } from '../constants/actionTypes';

export const addTodo = text => ({ type: ADD_TODO, text });
export const updateTodo = todo => ({ type: UPDATE_TODO, todo });
export const deleteTodo = id => ({ type: DELETE_TODO, id });

export const deleteCompletedTodos = () => ({ type: DELETE_COMPLETED_TODOS});
export const toggleAllTodos = complete => ({ type: TOGGLE_ALL_TODOS, complete });
