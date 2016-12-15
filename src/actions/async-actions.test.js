import * as asyncActions from './async-actions';

describe('async actions', () => {
  it('should create an async action to fetch cards', () => {
    const asyncAction = asyncActions.fetchCards();

    expect(asyncAction).toBeInstanceOf(Function);
  });
});

