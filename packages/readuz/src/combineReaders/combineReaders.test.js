// @flow
import combineReaders from './combineReaders';

describe('combineReaders', () => {
  test('should create new reader witch return structure with results for environment', () => {
    const reader1 = (env: { first: string }) => env.first;
    const reader2 = (env: { second: string }) => env.second;

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
