// @flow
import type { Reader } from '../types';

type Readers<S: {}> = $ObjMap<S, <E, T>(E) => Reader<E, T>>;
type CombinedReader<S: {}, R: Readers<S>> = Reader<S, $ObjMap<R, <E, T>(Reader<E, T>) => T>>

export default <S: {}, R: Readers<S>>(
  readers: R,
): CombinedReader<S, R> => (structure) => Object.entries(readers)
  .reduce(
    (result, [key, reader]: [string, any]) => ({
      ...result,
      [key]: reader(structure[key]),
    }),
    {},
  );
