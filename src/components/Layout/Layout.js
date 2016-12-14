import React, { PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';

const Layout = (props) => {
  const { children, title } = props;

  return (
    <div>
      <AppBar
        title={title}
        showMenuIconButton={false}
      />
      { children }
    </div>
  );
};

Layout.propTypes = {
  title: PropTypes.string,
};

export default Layout;

