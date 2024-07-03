import React, { useEffect, useState } from 'react';
import PlayerCard from '../components/Cards/PlayerCard';
import { useQuery } from 'react-query';
import { FetchError, PlayerCardType } from '../types';
import { fetchAllPlayers } from '../lib/endpoints';
import { LinkSpan, CollectionContainer as MainContainer, Message, Sorting } from '../styles/pages/Collection.styles';
import { Loader } from '../styles/GlobalStyles';
import { NavLink } from 'react-router-dom';
import { useToast } from '../context';
import { Select } from '../components/Select';
import { generateSortingOptions } from '../utils/helpers';
import { Pagination } from '../components/Pagination';

export const CollectionContainer = () => {
  const { addToast } = useToast();
  const [page, setPage] = useState(1);
  const [perPage] = useState(10);
  const [sortField, setSortField] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [sortingOptions, setSortingOptions] = useState<string[]>([]);
  const {
    error,
    isLoading,
    data: playerData,
  } = useQuery<PlayerCardType[], FetchError>(
    ['allPlayers', page, perPage, sortField, sortOrder],
    () => fetchAllPlayers(page, perPage, sortField, sortOrder),
    {
      onError: (error: FetchError) => {
        addToast(error.message, 'error');
      },
    }
  );

  useEffect(() => {
    if (playerData && playerData.length > 0) {
      const samplePlayer = playerData[0].player;
      const fields = Object.keys(samplePlayer);
      const options = generateSortingOptions(fields, ['image'], ['birthday']);
      setSortingOptions(options);
    }
  }, [playerData]);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handleSortChange = (sortOption: string) => {
    const [field, order] = sortOption.split(' ');

    const orderMapping: Record<string, 'asc' | 'desc'> = {
      'A-Z': 'asc',
      'Z-A': 'desc',
      'oldest-newest': 'asc',
      'newest-oldest': 'desc',
    };

    setSortField(field);
    setSortOrder(orderMapping[order]);
  };

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

  if (Array.isArray(playerData) && playerData?.length === 0) {
    return (
      <MainContainer>
        <Message>
          We cannot serve you right now, please click on <NavLink to="/create-card">Create Card</NavLink> to feed Me or{' '}
          <LinkSpan onClick={() => handlePageChange(page - 1)}>Go To Previous Page</LinkSpan>
        </Message>
      </MainContainer>
    );
  }

  return (
    <>
      <Sorting>
        <Select options={sortingOptions} onSelect={handleSortChange} selectedOption={sortField} />
      </Sorting>
      <Pagination currentPage={page} onPageChange={handlePageChange} />
      <MainContainer>
        {playerData?.map((card: PlayerCardType) => <PlayerCard key={card?.id} id={card?.id} player={card.player} />)}
      </MainContainer>
      <Pagination currentPage={page} onPageChange={handlePageChange} />
    </>
  );
};
