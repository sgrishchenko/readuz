// @flow

import { combineReaders } from 'readuz';
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Provider as FelaProvider } from 'react-fela';
import { renderer } from './felaConfig';
import AppReader from './components/App';
import rootReducerReader from './reducers/rootReducer';
import rootEnv, { simplifiedRootEnv } from './rootEnv';

renderer.renderStatic({
  backgroundColor: '#f5f5f5',
  font: '14px "Helvetica Neue", Helvetica, Arial, sans-serif',
}, 'body');

const store = createStore(() => ({}: any));
const root = document.getElementById('root');

class Container extends Component<{}, { simplified: boolean }> {
  state = {
    simplified: false,
  };

  onSwitchEnv = (event: SyntheticInputEvent<HTMLInputElement>) => {
    this.setState({ simplified: event.target.checked });
  };

  render() {
    const env = this.state.simplified
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
            value={this.state.simplified}
            onChange={this.onSwitchEnv}
          />
          Simplified
        </label>
        <div>
          <App />
        </div>
      </div>
    );
  }
}

if (root) {
  render(
    <Provider store={store}>
      <FelaProvider renderer={renderer}>
        <Container />
      </FelaProvider>
    </Provider>,
    root,
  );
}
