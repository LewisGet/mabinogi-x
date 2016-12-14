import mabinogiN from './mabinogi-n';
import cardsJson from './cards.json';

describe('Mabinogi-N service', () => {
  describe('#getCards', () => {
    it('should resolve cards.json', () => {
      return mabinogiN.getCards().then(cards => {
        expect(cards).toEqual(cardsJson);
      });
    });
  });
});

