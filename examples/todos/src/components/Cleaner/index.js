// @flow

import * as itemActions from '../../actions/itemActions';

export type CleanerProps = {
  completedAny: boolean,
  deleteCompletedTodos: typeof itemActions.deleteCompletedTodos,
  styles?: Object,
}

export { Cleaner } from './Cleaner';
