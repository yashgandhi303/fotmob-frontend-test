import { axiosInstance, fotmobApiInstance } from '../api';
import { FotMobPlayerSearchData, PlayerCardType } from '../types';

export const fetchAllPlayers = async (): Promise<PlayerCardType[]> => {
  const { data } = await axiosInstance.get('/cards');
  return data || [];
};

export const fetchPlayerById = async (id: number): Promise<PlayerCardType> => {
  const { data } = await axiosInstance.get(`/cards/${id}`);
  return data;
};

export const searchFotMobPlayers = async (term: string): Promise<FotMobPlayerSearchData[]> => {
  const response = await fotmobApiInstance.get(`/fotmob-api/search`, {
    params: { term },
  });
  return response.data;
};

export const getFotMobPlayerDetails = async (id: number): Promise<PlayerCardType> => {
  const response = await fotmobApiInstance.get(`/fotmob-api/player`, {
    params: { id },
  });
  return response.data;
};
