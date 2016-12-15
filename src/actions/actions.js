export const REQUEST_CARDS = 'REQUEST_CARDS';
export function requestCards() {
  return {
    type: REQUEST_CARDS,
  };
};

export const RECEIVE_CARDS = 'RECEIVE_CARDS';
export function receiveCards(cards) {
  return {
    type: RECEIVE_CARDS,
    payload: {
      cards,
    },
  };
};

