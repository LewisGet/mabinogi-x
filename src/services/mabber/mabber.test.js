import mabber from './mabber';
import cardsJson from './cards.json';

describe('mabber service', () => {
  describe('#getCards', () => {
    it('should resolve cards.json', () => {
      return mabber.getCards().then(cards => {
        expect(cards).toEqual(cardsJson);
      });
    });
  });
});

