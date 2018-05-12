// @flow

import * as itemActions from '../../actions/itemActions';

export type ToggleProps = {
  allCompleted: boolean,
  toggleAllTodos: typeof itemActions.toggleAllTodos,
  styles?: Object,
}

export { default } from './Toggle';
