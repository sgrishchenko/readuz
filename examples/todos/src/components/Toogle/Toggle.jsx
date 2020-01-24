// @flow

import { inject, type Reader } from 'readuz';
import React from 'react';
import { connect } from 'react-redux';
import { connect as felaConnect } from 'react-fela';
import { compose } from 'redux';
import * as itemActions from '../../actions/itemActions';

import type { State } from '../../types';
import type { ComponentEnv } from '../componentEnv';
import type { ToggleProps } from './index';

export const Toggle: Reader<ComponentEnv, React$ComponentType<{}>> = inject(
  (env: ComponentEnv) => env.Toggle.style,
  (style) => {
    const ToggleComponent = ({ allCompleted, toggleAllTodos, styles = {} }: ToggleProps) => (
      <div
        role="checkbox"
        aria-checked="false"
        tabIndex={0}
        onClick={() => toggleAllTodos(!allCompleted)}
        onKeyDown={(event) => event.key === 'Enter' && toggleAllTodos(!allCompleted)}
        className={styles.toggle}
      >
        <div className={styles.toggleIcon} />
      </div>
    );

    const mapStateToProps = (state: State) => ({
      allCompleted: Object.values(state.items)
        .every((item) => item && typeof item === 'object' && item.completed),
    });

    const mapDispatchToProps = {
      toggleAllTodos: itemActions.toggleAllTodos,
    };

    return compose(
      connect(mapStateToProps, mapDispatchToProps),
      felaConnect(style),
    )(ToggleComponent);
  },
);
