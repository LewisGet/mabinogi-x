import React, { Component } from 'react';
import { fetchCards } from '../../actions';
import config from '../../config';
import Layout from '../../components/Layout';
import MabinogiCardList from '../../components/MabinogiCardList';
import { connect } from 'react-redux';
import { Grid } from 'unsemantic';

export class Deckbuilder extends Component {
  constructor(props) {
    super(props);

    this.props.fetchCards();
  }

  render() {
    const { title } = config;
    const { cards } = this.props;

    return (
      <Layout title={title}>
        <Grid desktop="20">
          Card Filter
        </Grid>
        <Grid desktop="80">
          <MabinogiCardList
            cards={cards}
          />
        </Grid>
      </Layout>
    );
  }
}

const mapStateToProps = ({ cards }) => {
  return {
    cards, 
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCards() {
      dispatch(fetchCards());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Deckbuilder);

