// @flow

import React from 'react';
import { connect } from 'react-redux';
import { connect as felaConnect } from 'react-fela';
import { compose } from 'redux';
import TodoInput from '../TodoInput';
import TodoList from '../TodoList';
import Filter from '../Filter';
import Counter from '../Counter';
import Toggle from '../Toogle';
import Cleaner from '../Cleaner';
import * as itemActions from '../../actions/itemActions';
import style from './App.style';

import type { State } from '../../types';

export type AppProps = {
  todosExists: boolean,
  addTodo: typeof itemActions.addTodo,
  styles: Object,
}

const App = ({ todosExists, addTodo, styles }: AppProps) => (
  <div className={styles.root}>
    <h1 className={styles.title}>todos</h1>
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.toggle}>
          {todosExists && <Toggle />}
        </div>
        <TodoInput
          placeholder="What needs to be done?"
          onSave={addTodo}
        />
      </div>
      <TodoList />
      {todosExists && (
        <div className={styles.footer}>
          <div className={styles.footerEdging}>
            <Counter />
          </div>
          <Filter />
          <div className={styles.footerEdging}>
            <Cleaner />
          </div>
        </div>
        )}
    </div>
  </div>
);

const mapStateToProps = (state: State) => ({
  todosExists: Object.keys(state.items).length > 0,
});

const mapDispatchToProps = {
  addTodo: itemActions.addTodo,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  felaConnect(style),
)(App);
