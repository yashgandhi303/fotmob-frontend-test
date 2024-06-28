import axiosInstance from '../api/axiosInstance';
import { PlayerCardType } from '../types';

export const fetchAllPlayers = async (): Promise<PlayerCardType[]> => {
  const { data } = await axiosInstance.get('/cards');
  return data || [];
};
