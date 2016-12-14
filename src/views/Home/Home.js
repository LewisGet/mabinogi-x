import React, { Component } from 'react';
import config from '../../config';
import Layout from '../../components/Layout';

class Home extends Component {
  render() {
    const { title } = config;
    return (
      <Layout title={title} />
    );
  }
}

export default Home;
