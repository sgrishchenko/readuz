// @flow

import * as filterTypes from './constants/filterTypes';

export type Filter = $Values<typeof filterTypes>

export type Todo = {
  id: string,
  completed: boolean,
  text: string,
}

export type Todos = {
  [string]: Todo
}

export type State = {
  items: Todos,
  filter: Filter,
}
