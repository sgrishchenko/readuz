// @flow

import * as actionTypes from './constants/actionTypes';
import * as filterTypes from './constants/filterTypes';

export type Action<T: {}> = T & {
  type: $Values<typeof actionTypes>,
}

export type Filter = $Values<typeof filterTypes>

export type Todo = {
  id: number,
  completed: boolean,
  text: string,
}
