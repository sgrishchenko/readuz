// @flow

import { createAction } from 'redux-actions';
import uuid from 'uuid/v1';
import {
  ADD_TODO, UPDATE_TODO, DELETE_TODO, DELETE_COMPLETED_TODOS, TOGGLE_ALL_TODOS,
} from '../constants/actionTypes';

import type { Todo } from '../types';

export const addTodo = createAction<string, [string], Todo>(ADD_TODO, (text: string) => ({
  id: uuid(),
  text,
  completed: false,
}));
export const updateTodo = createAction<string, Todo>(UPDATE_TODO);
export const deleteTodo = createAction<string, string>(DELETE_TODO);

export const deleteCompletedTodos = createAction<string, void>(DELETE_COMPLETED_TODOS);
export const toggleAllTodos = createAction<string, boolean>(TOGGLE_ALL_TODOS);
