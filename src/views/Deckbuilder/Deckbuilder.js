import React, { Component } from 'react';
import config from '../../config';
import Layout from '../../components/Layout';
import { Grid } from 'unsemantic';

class Deckbuilder extends Component {
  render() {
    const { title } = config;
    return (
      <Layout title={title}>
        <Grid desktop="20">
          Card Filter
        </Grid>
        <Grid desktop="80">
          Card List
        </Grid>
      </Layout>
    );
  }
}

export default Deckbuilder;
