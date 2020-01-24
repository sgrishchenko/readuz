// @flow

import { inject, type Reader } from 'readuz';
import React from 'react';
import { connect } from 'react-redux';
import { connect as felaConnect } from 'react-fela';
import { compose } from 'redux';
import * as filters from '../../constants/filterTypes';
import * as filterActions from '../../actions/filterActions';

import type { State } from '../../types';
import type { ComponentEnv } from '../componentEnv';
import type { FilterProps } from './index';

export const Filter: Reader<ComponentEnv, React$ComponentType<{}>> = inject(
  (env: ComponentEnv) => env.Filter.style,
  (style) => {
    const FilterComponent = ({ selected, applyFilter, styles = {} }: FilterProps) => (
      <div>
        <ul className={styles.list}>
          {Object.keys(filters).map((filterType) => filters[filterType]).map((filter) => (
            <li key={filter}>
              <div
                role="button"
                tabIndex={0}
                onClick={() => applyFilter(filter)}
                onKeyDown={(event) => event.key === 'Enter' && applyFilter(filter)}
                className={`${styles.item} ${filter === selected ? styles.selected : ''}`}
              >
                {filter}
              </div>
            </li>
          ))}
        </ul>
      </div>
    );

    const mapStateToProps = (state: State) => ({
      selected: state.filter,
    });

    const mapDispatchToProps = {
      applyFilter: filterActions.applyFilter,
    };

    return compose(
      connect(mapStateToProps, mapDispatchToProps),
      felaConnect(style),
    )(FilterComponent);
  },
);
