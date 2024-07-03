import { useQuery } from 'react-query';
import { getFotMobPlayerDetails } from '../lib/endpoints';
import { FetchError, PlayerCardType } from '../types';

export const usePlayerDetails = (id: number) => {
  return useQuery<PlayerCardType, FetchError>(['playerDetails', id], () => getFotMobPlayerDetails(id), {
    enabled: !!id,
  });
};
