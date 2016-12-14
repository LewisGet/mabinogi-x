import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';
import Layout from '../../components/Layout';

describe('<Home />', () => {
  it('should contain a Layout', () => {
    const home = shallow(<Home />);

    expect(home.containsMatchingElement(<Layout />)).toEqual(true);
  });
});
