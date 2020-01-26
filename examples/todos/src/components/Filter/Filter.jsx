// @flow

import { inject, type Reader } from 'readuz';
import React, { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useFela } from 'react-fela';
import * as filters from '../../constants/filterTypes';
import * as filterActions from '../../actions/filterActions';

import type { State } from '../../types';
import type { ComponentEnv } from '../componentEnv';

export const Filter: Reader<ComponentEnv, React$ComponentType<{}>> = inject(
  (env: ComponentEnv) => env.Filter.style,
  (style) => {
    const FilterComponent = () => {
      const selected = useSelector((state: State) => state.filter);

      const dispatch = useDispatch();

      const { css } = useFela({ selected });

      return (
        <div>
          <ul className={css(style.list)}>
            {Object.keys(filters)
              .map((filterType) => filters[filterType])
              .map((filter) => {
                const onClick = () => {
                  dispatch(filterActions.applyFilter(filter));
                };

                return (
                  <li key={filter}>
                    <div
                      role="button"
                      tabIndex={0}
                      onClick={onClick}
                      onKeyDown={(event) => event.key === 'Enter' && onClick()}
                      className={css(style.item)}
                    >
                      {filter}
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
      );
    };

    return memo(FilterComponent);
  },
);
