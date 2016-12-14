/**
 * Service to interface with (future) Mabber API.
 */
import cards from './cards.json';

function getCards() {
  return new Promise((resolve) => {
    resolve(cards);
  });
}

export default {
  getCards,
};

