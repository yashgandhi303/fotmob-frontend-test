import { useQuery } from 'react-query';
import { searchFotMobPlayers } from '../lib/endpoints';
import { FetchError, FotMobPlayerSearchData } from '../types';

export const useFotmobSearch = (term: string) => {
  return useQuery<FotMobPlayerSearchData[], FetchError>(['fotmobSearch', term], () => searchFotMobPlayers(term), {
    enabled: !!term,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};
