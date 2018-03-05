// @flow

import { ADD_TODO, UPDATE_TODO, DELETE_TODO, DELETE_COMPLETED_TODOS, TOGGLE_ALL_TODOS } from '../constants/actionTypes';
import type { Todo } from '../types';

export const addTodo = (text: string) => ({ type: ADD_TODO, text });
export const updateTodo = (todo: Todo) => ({ type: UPDATE_TODO, todo });
export const deleteTodo = (id: number) => ({ type: DELETE_TODO, id });

export const deleteCompletedTodos = () => ({ type: DELETE_COMPLETED_TODOS });
export const toggleAllTodos = (complete: boolean) => ({ type: TOGGLE_ALL_TODOS, complete });
