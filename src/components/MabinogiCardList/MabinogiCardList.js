import React, { PropTypes } from 'react';
import { GridList, GridTile } from 'material-ui/GridList';

const MabinogiCardList = (props) => {
  const { cards } = props;

  return (
    <GridList
      cellHeight={210}
      cols={6}
    >
      {cards.length > 0 ? cards.map((card) => (
        <GridTile
          key={card.id}
        >
          <p>{card.id}</p>
        </GridTile>
      )) : (
        <p>No cards found.</p>
      )}
    </GridList>
  );
};

MabinogiCardList.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
  })).isRequired,
};

export default MabinogiCardList;

