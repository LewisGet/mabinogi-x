/**
 * Service to interface with (future) Mabinogi-N API.
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

