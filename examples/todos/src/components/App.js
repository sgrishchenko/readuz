import React from 'react';
import { connect } from 'react-redux';
import { connect as felaConnect } from 'react-fela';
import { compose } from 'redux';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import Filter from './Filter';
import Counter from './Counter';
import Toggle from './Toggle';
import Cleaner from './Cleaner';
import { addTodo } from '../actions/itemActions';

const App = ({ todosExists, styles, ...props }) => (
  <div className={styles.root}>
    <h1 className={styles.title}>todos</h1>
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.toggle}>
          {todosExists && <Toggle/>}
        </div>
        <TodoInput
          placeholder="What needs to be done?"
          onSave={props.addTodo}
        />
      </div>
      <TodoList/>
      {todosExists && <div className={styles.footer}>
        <div className={styles.footerEdging}>
          <Counter/>
        </div>
        <Filter/>
        <div className={styles.footerEdging}>
          <Cleaner/>
        </div>
      </div>}
    </div>
  </div>
);

const mapStateToProps = state => ({
  todosExists: Object.keys(state.items).length > 0,
});

const mapDispatchToProps = {
  addTodo,
};

const style = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    margin: 0,
    fontSize: '100px',
    fontWeight: 100,
    color: 'rgba(175, 47, 47, 0.15)',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    width: '550px',
    boxShadow: [
      '0 2px 4px 0 rgba(0, 0, 0, 0.2)',
      '0 25px 50px 0 rgba(0, 0, 0, 0.1)',
    ].join(),
  },
  header: {
    display: 'flex',
  },
  toggle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '55px',
    backgroundColor: 'rgba(0, 0, 0, 0.003)',
    boxShadow: 'inset 0 -2px 1px rgba(0,0,0,0.03)',
  },
  footer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: '#777777',
    padding: '10px 15px',
    boxShadow: [
      '0 1px 1px rgba(0, 0, 0, 0.2)',
      '0 8px 0 -3px #f6f6f6',
      '0 9px 1px -3px rgba(0, 0, 0, 0.2)',
      '0 16px 0 -6px #f6f6f6',
      '0 17px 2px -6px rgba(0, 0, 0, 0.2)',
    ].join(),
  },
  footerEdging: {
    flexBasis: '115px',
    flexShrink: 0,
    flexGrow: 0,
  },
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  felaConnect(style),
)(App);
