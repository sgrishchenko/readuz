// @flow
import combineReaders from './combineReaders';

describe('combineReaders', () => {
  test('should create new reader witch return structure with results for environment', () => {
    const reader1 = (env) => env.first;
    const reader2 = (env) => env.second;

    const env = {
      reader1: {
        first: 'First',
      },
      reader2: {
        second: 'Second',
      },
    };

    const resultReader = combineReaders({
      reader1,
      reader2,
    });

    expect(resultReader(env)).toEqual({
      reader1: 'First',
      reader2: 'Second',
    });
  });
});
