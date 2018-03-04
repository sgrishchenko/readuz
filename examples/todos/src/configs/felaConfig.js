import { createRenderer } from 'fela';
import createIdentifier from 'fela-identifier';
import prefixer from 'fela-plugin-prefixer';
import placeholderPrefixer from 'fela-plugin-placeholder-prefixer';
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
