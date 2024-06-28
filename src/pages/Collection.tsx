import React from 'react';
import PlayerCard from '../components/Cards/PlayerCard';
import { useQuery } from 'react-query';
import { FetchError, PlayerCardType } from '../types';
import { fetchAllPlayers } from '../lib/endpoints';
import { CollectionContainer, Message } from '../styles/pages/Collection.styles';

export const Collection = () => {
  const {
    error,
    isLoading,
    data: playerData,
  } = useQuery<PlayerCardType[], FetchError>(['allPlayers'], fetchAllPlayers);

  if (isLoading) {
    return (
      <CollectionContainer>
        <Message>Loading...</Message>
      </CollectionContainer>
    );
  }

  if (error) {
    return (
      <CollectionContainer>
        <Message>Error loading collection...</Message>
      </CollectionContainer>
    );
  }

  return (
    <CollectionContainer>
      {playerData?.map((card: PlayerCardType) => <PlayerCard key={card?.id} id={card?.id} player={card.player} />)}
    </CollectionContainer>
  );
};
