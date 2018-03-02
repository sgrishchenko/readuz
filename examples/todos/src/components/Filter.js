import React from 'react';
import { connect } from 'react-redux';
import { applyFilter } from '../actions/filterActions';
import * as filters from '../constants/filterTypes';

const Filter = props => (
  <div>
    <ul>
      {Object.values(filters).map(filter => (
        <li
          key={filter}
          onClick={() => props.applyFilter(filter)}
        >
          {filter}
        </li>
      ))}
    </ul>
  </div>
);

export default connect(undefined, {
  applyFilter,
})(Filter);
