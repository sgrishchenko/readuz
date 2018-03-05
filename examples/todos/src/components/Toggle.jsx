import React from 'react';
import { connect } from 'react-redux';
import { connect as felaConnect } from 'react-fela';
import { compose } from 'redux';
import { toggleAllTodos } from '../actions/itemActions';

const Toggle = ({ allCompleted, styles, ...props }) => (
  <input
    type="checkbox"
    className={styles.toggle}
    checked={allCompleted}
    onChange={() => props.toggleAllTodos(!allCompleted)}
  />
);

const mapStateToProps = state => ({
  allCompleted: Object.values(state.items)
    .every(item => item.completed),
});

const mapDispatchToProps = {
  toggleAllTodos,
};

const style = ({ allCompleted }) => ({
  toggle: {
    appearance: 'none',
    transform: 'rotate(90deg)',
    outline: 'none',
    ':before': {
      content: '"❯"',
      fontSize: '22px',
      color: allCompleted ? '#737373' : '#e6e6e6',
    },
  },
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  felaConnect(style),
)(Toggle);
