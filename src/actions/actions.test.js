import * as actions from './actions';

describe('actions', () => {
  it('should create an action to request cards', () => {
    const action = actions.requestCards();

    expect(action).toEqual({
      type: actions.REQUEST_CARDS,
    });
  });

  it('should create an action to receive cards', () => {
    const action = actions.receiveCards([1, 2]);

    expect(action).toEqual({
      type: actions.RECEIVE_CARDS,
      payload: {
        cards: [1, 2],
      },
    });
  });
});

