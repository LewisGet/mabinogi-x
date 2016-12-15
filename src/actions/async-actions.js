import { requestCards, receiveCards } from './actions';
import { getCards } from '../services/mabber';

export function fetchCards() {
  return (dispatch) => {
    dispatch(requestCards());
    return getCards().then((cards) => {
      dispatch(receiveCards(cards));
    });
  };
}

