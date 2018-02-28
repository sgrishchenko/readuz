// @flow
import just from './just';

describe('just', () => {
  test('should convert any value into a reader', () => {
    const value = 'Some Value';
    const reader = just(value);

    expect(typeof reader).toBe('function');
    expect(reader()).toBe(value);
  });
});
