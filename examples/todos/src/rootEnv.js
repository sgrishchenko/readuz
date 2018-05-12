// @flow

import components, { simplifiedComponentEnv } from './components/componentEnv';
import reducers, { simplifiedReducerEnv } from './reducers/reducerEnv';

export default {
  components,
  reducers,
};

export const simplifiedRootEnv = {
  components: simplifiedComponentEnv,
  reducers: simplifiedReducerEnv,
};
