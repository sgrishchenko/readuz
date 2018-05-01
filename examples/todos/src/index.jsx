// @flow

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Provider as FelaProvider } from 'react-fela';
import { store } from './configs/reduxConfig';
import { renderer } from './configs/felaConfig';
import App from './components/App';

renderer.renderStatic({
  backgroundColor: '#f5f5f5',
  font: '14px "Helvetica Neue", Helvetica, Arial, sans-serif',
}, 'body');

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
