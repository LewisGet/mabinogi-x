import cards from './cards';

describe('cards reducer', () => {
  it('should return the initial state', () => {
    const state = cards(undefined, {});

    expect(state).toEqual([]);
  });
});

