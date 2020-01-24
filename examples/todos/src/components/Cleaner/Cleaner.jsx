// @flow

import { inject, type Reader } from 'readuz';
import React from 'react';
import { connect } from 'react-redux';
import { connect as felaConnect } from 'react-fela';
import { compose } from 'redux';
import * as itemActions from '../../actions/itemActions';

import type { State } from '../../types';
import type { ComponentEnv } from '../componentEnv';
import type { CleanerProps } from './index';

export const Cleaner: Reader<ComponentEnv, React$ComponentType<{}>> = inject(
  (env: ComponentEnv) => env.Cleaner.style,
  (style) => {
    const CleanerComponent = ({
      completedAny,
      deleteCompletedTodos,
      styles = {},
    }: CleanerProps) => {
      if (!completedAny) {
        return null;
      }
      return (
        <button
          type="button"
          onClick={deleteCompletedTodos}
          className={styles.button}
        >
          Clear completed
        </button>
      );
    };

    const mapStateToProps = (state: State) => ({
      completedAny: Object.values(state.items)
        .some((item) => item && typeof item === 'object' && item.completed),
    });

    const mapDispatchToProps = {
      deleteCompletedTodos: itemActions.deleteCompletedTodos,
    };

    return compose(
      connect(mapStateToProps, mapDispatchToProps),
      felaConnect(style),
    )(CleanerComponent);
  },
);
