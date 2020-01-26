// @flow

import { type ComponentEnv, componentEnv, simplifiedComponentEnv } from './components/componentEnv';
import { type ReducerEnv, reducerEnv, simplifiedReducerEnv } from './reducers/reducerEnv';

export type RootEnv = {
  components: ComponentEnv,
  reducers: ReducerEnv,
}

export const rootEnv: RootEnv = {
  components: componentEnv,
  reducers: reducerEnv,
};

export const simplifiedRootEnv: RootEnv = {
  components: simplifiedComponentEnv,
  reducers: simplifiedReducerEnv,
};
