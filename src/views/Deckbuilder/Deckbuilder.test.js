import React from 'react';
import Layout from '../../components/Layout';
import MabinogiCardList from '../../components/MabinogiCardList';
import { shallow } from 'enzyme';
import { Deckbuilder } from './Deckbuilder';

/**
 * Setup test data
 */
const cards = Array(100).fill(0).map((_, i) => ({
  id: i.toString(),
}));

function setup() {
  const props = {
    fetchCards: jest.fn(),
    cards,
  };

  return shallow(<Deckbuilder {...props} />);
}

describe('<Deckbuilder />', () => {
  it('should contain a Layout', () => {
    const deckbuilder = setup();

    expect(deckbuilder.find(Layout).length).toEqual(1);
  });

  it('should contain <MabinogiCardList /> with  cards passed in', () => {
    const deckbuilder = setup();

    expect(deckbuilder.find(MabinogiCardList).prop('cards')).toEqual(cards);
  });
});
