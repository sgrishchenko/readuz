// @flow

import { inject, type Reader } from 'readuz';
import React, { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useFela } from 'react-fela';
import * as itemActions from '../../actions/itemActions';

import type { State } from '../../types';
import type { ComponentEnv } from '../componentEnv';

export const Toggle: Reader<ComponentEnv, React$ComponentType<{}>> = inject(
  (env: ComponentEnv) => env.Toggle.style,
  (style) => {
    const ToggleComponent = () => {
      const allCompleted = useSelector((state: State) => (
        Object.values(state.items)
          .every((item) => item && typeof item === 'object' && item.completed)
      ));

      const dispatch = useDispatch();

      const onClick = () => {
        dispatch(itemActions.toggleAllTodos(!allCompleted));
      };

      const { css } = useFela({ allCompleted });

      return (
        <div
          role="checkbox"
          aria-checked="false"
          tabIndex={0}
          onClick={onClick}
          onKeyDown={(event) => event.key === 'Enter' && onClick()}
          className={css(style.toggle)}
        >
          <div className={css(style.toggleIcon)} />
        </div>
      );
    };

    return memo(ToggleComponent);
  },
);
