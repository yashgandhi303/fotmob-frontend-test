import React from 'react';
import PlayerCard from '../components/Cards/PlayerCard';
import { useQuery } from 'react-query';
import { FetchError, PlayerCardType } from '../types';
import { fetchAllPlayers } from '../lib/endpoints';
import { CollectionContainer as MainContainer, Message } from '../styles/pages/Collection.styles';
import { Loader } from '../styles/GlobalStyles';
import { NavLink } from 'react-router-dom';
import { useToast } from '../context';

export const CollectionContainer = () => {
  const { addToast } = useToast();
  const {
    error,
    isLoading,
    data: playerData,
  } = useQuery<PlayerCardType[], FetchError>(['allPlayers'], fetchAllPlayers, {
    onError: (error: FetchError) => {
      addToast(error.message, 'error');
    },
  });

  if (isLoading) {
    return (
      <MainContainer>
        <Message>
          <Loader />
        </Message>
      </MainContainer>
    );
  }

  if (error) {
    return (
      <MainContainer>
        <Message>Error loading collection...</Message>
      </MainContainer>
    );
  }

  if (playerData?.length === 0) {
    return (
      <MainContainer>
        <Message>
          We cannot serve you right now, please click on <NavLink to="/create-card">Create Card</NavLink> to feed Me :D
        </Message>
      </MainContainer>
    );
  }

  return (
    <MainContainer>
      {playerData?.map((card: PlayerCardType) => <PlayerCard key={card?.id} id={card?.id} player={card.player} />)}
    </MainContainer>
  );
};
