// @flow

import * as filterActions from '../../actions/filterActions';

export type FilterProps = {
  selected: boolean,
  applyFilter: typeof filterActions.applyFilter,
  styles?: Object,
}

export { default } from './Filter';

