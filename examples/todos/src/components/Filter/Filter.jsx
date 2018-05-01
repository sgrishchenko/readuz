// @flow

import React from 'react';
import { connect } from 'react-redux';
import { connect as felaConnect } from 'react-fela';
import { compose } from 'redux';
import * as filters from '../../constants/filterTypes';
import * as filterActions from '../../actions/filterActions';
import style from './Filter.style';

import type { State } from '../../types';

export type FilterProps = {
  selected: boolean,
  applyFilter: typeof filterActions.applyFilter,
  styles: Object,
}

const Filter = ({ selected, styles, applyFilter }: FilterProps) => (
  <div>
    <ul className={styles.list}>
      {Object.keys(filters).map(filterType => filters[filterType]).map(filter => (
        <li key={filter}>
          <div
            role="button"
            tabIndex={0}
            onClick={() => applyFilter(filter)}
            onKeyDown={event => event.key === 'Enter' && applyFilter(filter)}
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

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  felaConnect(style),
)(Filter);
