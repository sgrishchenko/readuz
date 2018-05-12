// @flow

import { combineReaders } from 'readuz';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Provider as FelaProvider } from 'react-fela';
import { renderer } from './felaConfig';
import AppReader from './components/App';
import rootReducerReader from './reducers/rootReducer';
import /* rootEnv, */{ simplifiedRootEnv } from './rootEnv';

renderer.renderStatic({
  backgroundColor: '#f5f5f5',
  font: '14px "Helvetica Neue", Helvetica, Arial, sans-serif',
}, 'body');

const {
  components: App,
  reducers: rootReducer,
} = combineReaders({
  components: AppReader,
  reducers: rootReducerReader,
})(/* rootEnv */simplifiedRootEnv);

const store = createStore(rootReducer);
const root = document.getElementById('root');

if (root) {
  render(
    <Provider store={store}>
      <FelaProvider renderer={renderer}>
        <App />
      </FelaProvider>
    </Provider>,
    root,
  );
}
