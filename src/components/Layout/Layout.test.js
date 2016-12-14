import React from 'react';
import { shallow } from 'enzyme';
import AppBar from 'material-ui/AppBar';
import Layout from './Layout';

describe('<Layout/>', () => {
  describe('.propTypes', () => {
    it('should accept title as string', () => {
      const { title } = Layout.propTypes;

      expect(title).toEqual(React.PropTypes.string);
    });
  });

  describe('should contain an AppBar...', () => {
    it('with the title passed in', () => {
      const layout = shallow(<Layout title="Test title" />);

      expect(layout.find('AppBar').prop('title')).toEqual('Test title');
    });

    it('without MenuIconButton', () => {
      const layout = shallow(<Layout title="Test title" />);

      expect(layout.find('AppBar').prop('showMenuIconButton')).toEqual(false);
    });
  });

  it('should render children', () => {
    const layout = shallow(
      <Layout>
        <div>Test children</div>
      </Layout>
    );

    expect(layout.contains(<div>Test children</div>));
  });
});

