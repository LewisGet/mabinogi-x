import React from 'react';
import { shallow } from 'enzyme';
import AppBar from 'material-ui/AppBar';
import { GridContainer, Grid } from 'unsemantic';
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

      expect(layout.find(AppBar).prop('title')).toEqual('Test title');
    });

    it('without MenuIconButton', () => {
      const layout = shallow(<Layout title="Test title" />);

      expect(layout.find(AppBar).prop('showMenuIconButton')).toEqual(false);
    });
  });

  it('should contain a GridContainer', () => {
    const layout = shallow(<Layout title="Test title" />);

    expect(layout.find(GridContainer).length).toEqual(1);
  });

  it('should contain a full-width Grid', () => {
    const layout = shallow(<Layout title="Test title" />);

    expect(layout.find(Grid).length).toEqual(1);
    expect(layout.find(Grid).prop('desktop')).toEqual('100');
  });

  it('should render children inside the Grid', () => {
    const layout = shallow(
      <Layout>
        <div>Test children</div>
      </Layout>
    );

    expect(layout.find(Grid).contains(<div>Test children</div>)).toEqual(true);
  });
});

