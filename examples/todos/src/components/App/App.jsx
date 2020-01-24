// @flow

import { inject, type Reader } from 'readuz';
import React from 'react';
import { connect } from 'react-redux';
import { connect as felaConnect } from 'react-fela';
import { compose } from 'redux';
import * as itemActions from '../../actions/itemActions';

import type { State } from '../../types';
import type { ComponentEnv } from '../componentEnv';
import type { AppProps } from './index';

export const App: Reader<ComponentEnv, React$ComponentType<{}>> = inject(
  (env: ComponentEnv) => env.TodoInput.component,
  (env: ComponentEnv) => env.TodoList.component,
  (env: ComponentEnv) => env.Filter.component,
  (env: ComponentEnv) => env.Counter.component,
  (env: ComponentEnv) => env.Toggle.component,
  (env: ComponentEnv) => env.Cleaner.component,
  (env: ComponentEnv) => env.App.style,
  (TodoInput, TodoList, Filter, Counter, Toggle, Cleaner, style) => {
    const AppComponent = ({ todosExists, addTodo, styles = {} }: AppProps) => (
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

    return compose(
      connect(mapStateToProps, mapDispatchToProps),
      felaConnect(style),
    )(AppComponent);
  },
);
