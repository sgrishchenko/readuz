// @flow
import type { Reader } from '../types';

export default <T>(value: T): Reader<mixed, T> => () => value;
