// @flow

import React from 'react';
import { connect } from 'react-redux';
import { connect as felaConnect } from 'react-fela';
import { compose } from 'redux';
import * as itemActions from '../../actions/itemActions';
import style from './Cleaner.style';

import type { State } from '../../types';

export type CleanerProps = {
  completedAny: boolean,
  deleteCompletedTodos: typeof itemActions.deleteCompletedTodos,
  styles: Object,
}

const Cleaner = ({ completedAny, deleteCompletedTodos, styles }: CleanerProps) => {
  if (!completedAny) {
    return null;
  }
  return (
    <button
      onClick={deleteCompletedTodos}
      className={styles.button}
    >
      Clear completed
    </button>
  );
};

const mapStateToProps = (state: State) => ({
  completedAny: Object.keys(state.items)
    .some(item => item && typeof item === 'object' && item.completed),
});

const mapDispatchToProps = {
  deleteCompletedTodos: itemActions.deleteCompletedTodos,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  felaConnect(style),
)(Cleaner);
