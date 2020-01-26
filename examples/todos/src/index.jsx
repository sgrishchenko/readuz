// @flow

import { combineReaders } from 'readuz';
import React, { useState } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { RendererProvider } from 'react-fela';
import { renderer } from './felaConfig';
import { App as AppReader } from './components/App';
import { rootReducer as rootReducerReader } from './reducers/rootReducer';
import { type RootEnv, rootEnv, simplifiedRootEnv } from './rootEnv';

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

  const env: RootEnv = simplified
    ? simplifiedRootEnv
    : rootEnv;

  const {
    components: App,
    reducers: rootReducer,
  } = combineReaders({
    components: AppReader,
    reducers: rootReducerReader,
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
