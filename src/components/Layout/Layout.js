import React, { PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import { Grid, GridContainer } from 'unsemantic';

const Layout = (props) => {
  const { children, title } = props;

  return (
    <div>
      <AppBar
        title={title}
        showMenuIconButton={false}
      />
      <GridContainer>
        <Grid desktop="100">
          { children }
        </Grid>
      </GridContainer>
    </div>
  );
};

Layout.propTypes = {
  title: PropTypes.string,
};

export default Layout;

