// @flow

import * as itemActions from '../../actions/itemActions';

import type { Todo } from '../../types';

export type TodoItemProps = {
  id: string,
  item: Todo,
  updateTodo: typeof itemActions.updateTodo,
  deleteTodo: typeof itemActions.deleteTodo,
  styles?: Object,
  rules?: Object,
}

export { TodoItem } from './TodoItem';
