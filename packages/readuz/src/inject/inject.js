// @flow
import type { Reader } from '../types';

type Inject = {
    <E, D1, T>(
        dep1: (env: E) => Reader<E, D1>,
        target: (dep1: D1) => T
    ): Reader<E, T>,

    <E, D1, D2, T>(
        dep1: (env: E) => Reader<E, D1>,
        dep2: (env: E) => Reader<E, D2>,
        target: (dep1: D1, dep2: D2) => T
    ): Reader<E, T>,

    <E, D1, D2, D3, T>(
        dep1: (env: E) => Reader<E, D1>,
        dep2: (env: E) => Reader<E, D2>,
        dep3: (env: E) => Reader<E, D3>,
        target: (dep1: D1, dep2: D2, dep3: D3) => T
    ): Reader<E, T>,

    <E, D1, D2, D3, D4, T>(
        dep1: (env: E) => Reader<E, D1>,
        dep2: (env: E) => Reader<E, D2>,
        dep3: (env: E) => Reader<E, D3>,
        dep4: (env: E) => Reader<E, D4>,
        target: (dep1: D1, dep2: D2, dep3: D3, dep4: D4) => T
    ): Reader<E, T>,

    <E, D1, D2, D3, D4, D5, T>(
        dep1: (env: E) => Reader<E, D1>,
        dep2: (env: E) => Reader<E, D2>,
        dep3: (env: E) => Reader<E, D3>,
        dep4: (env: E) => Reader<E, D4>,
        dep5: (env: E) => Reader<E, D5>,
        target: (dep1: D1, dep2: D2, dep3: D3, dep4: D4, dep5: D5) => T
    ): Reader<E, T>,

    <E, D1, D2, D3, D4, D5, D6, T>(
        dep1: (env: E) => Reader<E, D1>,
        dep2: (env: E) => Reader<E, D2>,
        dep3: (env: E) => Reader<E, D3>,
        dep4: (env: E) => Reader<E, D4>,
        dep5: (env: E) => Reader<E, D5>,
        dep6: (env: E) => Reader<E, D6>,
        target: (dep1: D1, dep2: D2, dep3: D3, dep4: D4, dep5: D5, dep6: D6) => T
    ): Reader<E, T>,

    <E, D1, D2, D3, D4, D5, D6, D7, T>(
        dep1: (env: E) => Reader<E, D1>,
        dep2: (env: E) => Reader<E, D2>,
        dep3: (env: E) => Reader<E, D3>,
        dep4: (env: E) => Reader<E, D4>,
        dep5: (env: E) => Reader<E, D5>,
        dep6: (env: E) => Reader<E, D6>,
        dep7: (env: E) => Reader<E, D7>,
        target: (dep1: D1, dep2: D2, dep3: D3, dep4: D4, dep5: D5, dep6: D6, dep7: D7) => T
    ): Reader<E, T>,
}

export default ((...args: Function[]) => {
  const dependencies = args.slice(0, -1);
  const [target] = args.slice(-1);

  return env => target(...dependencies.map(dep => dep(env)(env)));
}: Inject);
