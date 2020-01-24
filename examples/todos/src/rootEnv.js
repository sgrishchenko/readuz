// @flow

import { componentEnv, simplifiedComponentEnv } from './components/componentEnv';
import { reducerEnv, simplifiedReducerEnv } from './reducers/reducerEnv';

export const rootEnv = {
  components: componentEnv,
  reducers: reducerEnv,
};

export const simplifiedRootEnv = {
  components: simplifiedComponentEnv,
  reducers: simplifiedReducerEnv,
};
