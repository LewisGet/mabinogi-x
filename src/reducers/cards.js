import { RECEIVE_CARDS } from '../actions';

function cardsReducer(state = [], action) {
  switch (action.type) {
    case RECEIVE_CARDS:
      return action.payload.cards.slice();
    default:
      return state;
  }
}

export default cardsReducer;

