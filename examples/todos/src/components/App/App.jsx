// @flow

import { inject, type Reader } from 'readuz';
import React, { memo, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useFela } from 'react-fela';
import * as itemActions from '../../actions/itemActions';

import type { State } from '../../types';
import type { ComponentEnv } from '../componentEnv';

export const App: Reader<ComponentEnv, React$ComponentType<{}>> = inject(
  (env: ComponentEnv) => env.TodoInput.component,
  (env: ComponentEnv) => env.TodoList.component,
  (env: ComponentEnv) => env.Filter.component,
  (env: ComponentEnv) => env.Counter.component,
  (env: ComponentEnv) => env.Toggle.component,
  (env: ComponentEnv) => env.Cleaner.component,
  (env: ComponentEnv) => env.App.style,
  (TodoInput, TodoList, Filter, Counter, Toggle, Cleaner, style) => {
    const AppComponent = () => {
      const todosExists = useSelector((state: State) => Object.keys(state.items).length > 0);

      const dispatch = useDispatch();

      const onSave = useCallback((text: string) => {
        dispatch(itemActions.addTodo(text));
      }, [dispatch]);

      const { css } = useFela();

      return (
        <div className={css(style.root)}>
          <h1 className={css(style.title)}>todos</h1>
          <div className={css(style.container)}>
            <div className={css(style.header)}>
              <div className={css(style.toggle)}>
                {todosExists && <Toggle />}
              </div>
              <TodoInput
                placeholder="What needs to be done?"
                onSave={onSave}
              />
            </div>
            <TodoList />
            {todosExists && (
              <div className={css(style.footer)}>
                <div className={css(style.footerEdging)}>
                  <Counter />
                </div>
                <Filter />
                <div className={css(style.footerEdging)}>
                  <Cleaner />
                </div>
              </div>
            )}
          </div>
        </div>
      );
    };

    return memo(AppComponent);
  },
);
