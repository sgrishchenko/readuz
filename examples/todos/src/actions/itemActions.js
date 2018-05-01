// @flow

import { createAction } from 'redux-actions';
import uuid from 'uuid/v1';
import { ADD_TODO, UPDATE_TODO, DELETE_TODO, DELETE_COMPLETED_TODOS, TOGGLE_ALL_TODOS } from '../constants/actionTypes';

import type { Todo } from '../types';

export const addTodo = createAction(ADD_TODO, (text: string) => ({
  id: uuid(),
  text,
  completed: false,
}));
export const updateTodo = createAction(UPDATE_TODO, (todo: Todo) => todo);
export const deleteTodo = createAction(DELETE_TODO, (id: string) => id);

export const deleteCompletedTodos = createAction(DELETE_COMPLETED_TODOS);
export const toggleAllTodos = createAction(TOGGLE_ALL_TODOS, (complete: boolean) => complete);

