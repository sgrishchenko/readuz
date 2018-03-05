import React from 'react';
import { connect } from 'react-redux';
import { connect as felaConnect } from 'react-fela';
import { compose } from 'redux';
import { KEY_RETURN } from 'keycode-js';
import { applyFilter } from '../actions/filterActions';
import * as filters from '../constants/filterTypes';

const Filter = ({ selected, styles, ...props }) => (
  <div>
    <ul className={styles.list}>
      {Object.values(filters).map(filter => (
        <li key={filter}>
          <div
            role="button"
            tabIndex={0}
            onClick={() => props.applyFilter(filter)}
            onKeyDown={event => event.which === KEY_RETURN && props.applyFilter(filter)}
            className={`${styles.item} ${filter === selected ? styles.selected : ''}`}
          >
            {filter}
          </div>
        </li>
      ))}
    </ul>
  </div>
);

const mapStateToProps = state => ({
  selected: state.filter,
});

const mapDispatchToProps = {
  applyFilter,
};

const style = {
  list: {
    display: 'flex',
    padding: 0,
    margin: 0,
    listStyle: 'none',
  },
  item: {
    padding: '3px 7px',
    margin: '3px',
    cursor: 'pointer',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderRadius: '3px',
    borderColor: 'transparent',
    ':hover': {
      borderColor: 'rgba(175, 47, 47, 0.1)',
    },
  },
  selected: {
    borderColor: 'rgba(175, 47, 47, 0.2)',
  },
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  felaConnect(style),
)(Filter);
