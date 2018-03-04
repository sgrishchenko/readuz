import React from 'react';
import { connect } from 'react-redux';
import { connect as felaConnect } from 'react-fela';
import { compose } from 'redux';
import { deleteCompletedTodos } from '../actions/itemActions';

const Toggle = ({ completedAny, styles, ...props }) => completedAny && (
  <button
    onClick={props.deleteCompletedTodos}
    className={styles.button}
  >
    Clear completed
  </button>
);

const mapStateToProps = state => ({
  completedAny: Object.values(state.items)
    .some(item => item.completed),
});

const mapDispatchToProps = {
  deleteCompletedTodos,
};

const style = {
  button: {
    color: 'inherit',
    outline: 'none',
    background: 'none',
    border: 'none',
    fontSize: '14px',
    ':hover': {
      textDecoration: 'underline',
    },
  },
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  felaConnect(style),
)(Toggle);
