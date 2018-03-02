import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from '../constants/actionTypes';

export const addTodo = text => ({ type: ADD_TODO, text });
export const deleteTodo = id => ({ type: DELETE_TODO, id });
export const updateTodo = todo => ({ type: UPDATE_TODO, todo });
