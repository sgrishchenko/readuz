// @flow
import inject from './inject';

describe('inject', () => {
  test('should create new reader from dependencies', () => {
    const environment = {
      first: 'First',
      second: 'Second',
    };

    const dev1 = env => env.first;
    const dev2 = env => env.second;
    const target = jest.fn();

    const reader = inject(
      () => dev1,
      () => dev2,
      target,
    );

    reader(environment);

    expect(target).toHaveBeenCalledWith('First', 'Second');
    expect(target).toHaveBeenCalledTimes(1);
  });

  test('should allow to build the chain of injections', () => {
    const target = jest.fn();

    const first = () => 'Result';
    const second = inject(
      env => env.first,
      injected => injected,
    );
    const third = inject(
      env => env.second,
      target,
    );

    const env = {
      first,
      second,
      third,
    };

    third(env);

    expect(target).toHaveBeenCalledWith('Result');
    expect(target).toHaveBeenCalledTimes(1);
  });
});
