// @flow

import { handleActions, combineActions, type ActionType } from 'redux-actions';
import {
  ADD_TODO, UPDATE_TODO, DELETE_TODO, DELETE_COMPLETED_TODOS, TOGGLE_ALL_TODOS,
} from '../constants/actionTypes';
import {
  addTodo, updateTodo, deleteTodo, toggleAllTodos,
} from '../actions/itemActions';
import type { Todos } from '../types';

export const itemReducer = handleActions<Todos, ActionType<any>>({
  [combineActions(ADD_TODO, UPDATE_TODO)]: (
    state: Todos,
    { payload }: ActionType<typeof addTodo> | ActionType<typeof updateTodo>,
  ) => {
    const { id } = payload;

    return {
      ...state,
      [id]: {
        ...(state[id] || {}),
        ...payload,
      },
    };
  },
  [DELETE_TODO]: (state: Todos, { payload }: ActionType<typeof deleteTodo>) => (
    Object.entries(state)
      .filter(([id]) => id !== payload)
      .reduce((result, [id, todo]) => ({
        ...result,
        [id]: todo,
      }), {})
  ),
  [DELETE_COMPLETED_TODOS]: (state: Todos) => (
    Object.entries(state)
      .filter(([, todo]) => todo && typeof todo === 'object' && !todo.completed)
      .reduce((result, [id, todo]) => ({
        ...result,
        [id]: todo,
      }), {})
  ),
  [TOGGLE_ALL_TODOS]: (state: Todos, { payload }: ActionType<typeof toggleAllTodos>) => (
    Object.entries(state)
      .reduce((result, [id, todo]) => ({
        ...result,
        [id]: {
          ...todo,
          completed: payload,
        },
      }), {})
  ),
}, {});
