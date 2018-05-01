// @flow

import { createRenderer } from 'fela';
// $FlowFixMe
import createIdentifier from 'fela-identifier';
// $FlowFixMe
import prefixer from 'fela-plugin-prefixer';
// $FlowFixMe
import placeholderPrefixer from 'fela-plugin-placeholder-prefixer';
// $FlowFixMe
import fallbackValue from 'fela-plugin-fallback-value';

export const identifier = createIdentifier();

export const renderer = createRenderer({
  plugins: [
    prefixer(),
    placeholderPrefixer(),
    fallbackValue(),
  ],
  enhancers: [
    identifier,
  ],
});
