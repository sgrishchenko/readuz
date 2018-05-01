// @flow

import React from 'react';
import { connect } from 'react-redux';
import { connect as felaConnect } from 'react-fela';
import { compose } from 'redux';
import * as itemActions from '../../actions/itemActions';
import style from './Toggle.style';

import type { State } from '../../types';

export type ToggleProps = {
  allCompleted: boolean,
  toggleAllTodos: typeof itemActions.toggleAllTodos,
  styles: Object,
}

const Toggle = ({ allCompleted, toggleAllTodos, styles }: ToggleProps) => (
  <div
    role="checkbox"
    aria-checked="false"
    tabIndex={0}
    onClick={() => toggleAllTodos(!allCompleted)}
    onKeyDown={event => event.key === 'Enter' && toggleAllTodos(!allCompleted)}
    className={styles.toggle}
  >
    <div className={styles.toggleIcon} />
  </div>
);

const mapStateToProps = (state: State) => ({
  allCompleted: Object.values(state.items)
    .every(item => item && typeof item === 'object' && item.completed),
});

const mapDispatchToProps = {
  toggleAllTodos: itemActions.toggleAllTodos,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  felaConnect(style),
)(Toggle);
