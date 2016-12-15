import React, { PropTypes } from 'react';
import { shallow } from 'enzyme';
import { GridList, GridTile } from 'material-ui/GridList';
import MabinogiCardList from './MabinogiCardList';

/**
 * Setup test data
 */
const cards = Array(100).fill(0).map((_, i) => ({
  id: i.toString(),
}));

describe('<MabinogiCardList/>', () => {
  describe('.propTypes', () => {
    it('should accept cards', () => {
      const { cards } = MabinogiCardList.propTypes;

      expect(cards).not.toBeUndefined();
    });
  });

  it('should contain a GridList', () => {
    const cardList = shallow(<MabinogiCardList cards={cards} />);

    expect(cardList.find(GridList).length).toEqual(1);
  });

  it('should contain GridTile(s) as much as cards', () => {
    const cardList = shallow(<MabinogiCardList cards={cards} />);

    expect(cardList.find(GridTile).length).toEqual(cards.length);
  });

  describe('with 0 number of cards', () => {
    it('should contain <p> element', () => {
      const cardList = shallow(<MabinogiCardList cards={[]} />);

      expect(cardList.find('p').length).toEqual(1);
    });
  });
});

