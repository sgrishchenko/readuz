// @flow
import type { Reader } from '../types';

export default <T>(value: T): Reader<any, T> => () => value;
