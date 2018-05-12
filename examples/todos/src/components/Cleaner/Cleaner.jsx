// @flow

import { inject } from 'readuz';
import React from 'react';
import { connect } from 'react-redux';
import { connect as felaConnect } from 'react-fela';
import { compose } from 'redux';
import * as itemActions from '../../actions/itemActions';

import type { State } from '../../types';
import type { ComponentEnv } from '../componentEnv';
import type { CleanerProps } from './index';

export default inject(
  (env: ComponentEnv) => env.Cleaner.style,
  (style) => {
    const Cleaner = ({ completedAny, deleteCompletedTodos, styles = {} }: CleanerProps) => {
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
      completedAny: Object.values(state.items)
        .some(item => item && typeof item === 'object' && item.completed),
    });

    const mapDispatchToProps = {
      deleteCompletedTodos: itemActions.deleteCompletedTodos,
    };

    return compose(
      connect(mapStateToProps, mapDispatchToProps),
      felaConnect(style),
    )(Cleaner);
  },
);
