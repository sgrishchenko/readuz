// @flow

import { combineReaders, type Reader } from 'readuz';
import React, { useState } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import type { ActionType } from 'redux-actions';
import { createStore, type Reducer } from 'redux';
import { RendererProvider } from 'react-fela';
import { renderer } from './felaConfig';
import { App as AppReader } from './components/App';
import { rootReducer as rootReducerReader } from './reducers/rootReducer';
import { rootEnv, simplifiedRootEnv } from './rootEnv';
import type { ComponentEnv } from './components/componentEnv';
import type { ReducerEnv } from './reducers/reducerEnv';
import type { State } from './types';

renderer.renderStatic({
  backgroundColor: '#f5f5f5',
  font: '14px "Helvetica Neue", Helvetica, Arial, sans-serif',
}, 'body');

const store = createStore(() => ({}: any));
const root = document.getElementById('root');

const Container = () => {
  const [simplified, setSimplified] = useState(false);

  const onSwitchEnv = (event: SyntheticInputEvent<HTMLInputElement>) => {
    setSimplified(event.target.checked);
  };

  const env = simplified
    ? simplifiedRootEnv
    : rootEnv;

  const {
    components: App,
    reducers: rootReducer,
  } = combineReaders({
    components: (AppReader: Reader<ComponentEnv, React$ComponentType<{}>>),
    reducers: (rootReducerReader: Reader<ReducerEnv, Reducer<State, ActionType<any>>>),
  })(env);

  store.replaceReducer(rootReducer);

  return (
    <div>
      <label htmlFor="switchEnv" style={{ position: 'absolute' }}>
        <input
          id="switchEnv"
          type="checkbox"
          value={simplified}
          onChange={onSwitchEnv}
        />
        Simplified
      </label>
      <div>
        <App />
      </div>
    </div>
  );
};

if (root) {
  render(
    <Provider store={store}>
      <RendererProvider renderer={renderer}>
        <Container />
      </RendererProvider>
    </Provider>,
    root,
  );
}
