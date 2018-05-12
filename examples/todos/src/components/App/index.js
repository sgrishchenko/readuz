// @flow

import * as itemActions from '../../actions/itemActions';

export type AppProps = {
  todosExists: boolean,
  addTodo: typeof itemActions.addTodo,
  styles?: Object,
}

export { default } from './App';
