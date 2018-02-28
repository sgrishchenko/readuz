// @flow
import type { Reader } from '../types';

type CombineReaders<S: {}, R: $ObjMap<S, <E, T>(E) => Reader<E, T>>> =
    (readers: R) => (structure: S) => $ObjMap<R, <E, T>(Reader<E, T>) => T>

export default (readers => structure =>
  Object.entries(readers)
    .reduce(
      (result, [key, reader]: *) => ({
        ...result,
        [key]: reader(structure[key]),
      }),
      {},
    ): CombineReaders<*, *>);
