// @flow

import { inject, type Reader } from 'readuz';
import React, { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useFela } from 'react-fela';
import * as itemActions from '../../actions/itemActions';

import type { State } from '../../types';
import type { ComponentEnv } from '../componentEnv';

export const Cleaner: Reader<ComponentEnv, React$ComponentType<{}>> = inject(
  (env: ComponentEnv) => env.Cleaner.style,
  (style) => {
    const CleanerComponent = () => {
      const anyCompleted = useSelector((state: State) => (
        Object.values(state.items)
          .some((item) => item && typeof item === 'object' && item.completed)
      ));

      const dispatch = useDispatch();

      const onClick = () => {
        dispatch(itemActions.deleteCompletedTodos());
      };

      const { css } = useFela();

      if (!anyCompleted) {
        return null;
      }
      return (
        <button
          type="button"
          onClick={onClick}
          className={css(style.button)}
        >
          Clear completed
        </button>
      );
    };

    return memo(CleanerComponent);
  },
);
