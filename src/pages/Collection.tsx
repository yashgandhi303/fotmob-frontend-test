import React from 'react';

import { fetchCollection } from '../lib/collection';
import styled from 'styled-components';
import PlayerCard from '../components/Cards/PlayerCard';

const CollectionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Collection = () => {
  const collection = fetchCollection();
  const card = collection[0];

  /**
   * Step 1: Render the card
   */
  return (
    <CollectionContainer>
      <PlayerCard id={card?.id} player={card.player} />
    </CollectionContainer>
  );
};
