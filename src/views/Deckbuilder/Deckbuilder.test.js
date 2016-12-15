import React from 'react';
import { shallow } from 'enzyme';
import Deckbuilder from './Deckbuilder';

describe('<Deckbuilder />', () => {
  it('should contain a Layout', () => {
    const deckbuilder = shallow(<Deckbuilder />);

    expect(deckbuilder.find('Layout').length).toEqual(1);
  });
});
