import React from 'react';
import { PlayerCardType } from '../../types';
import { generatePlayerImageUrl, generatePlayerName, humanReadableDate } from '../../utils/helpers';
import { CardContainer, PlayerImage, PlayerInfo, PlayerName } from './styles/PlayerCard.styles';

interface PlayerCardProps extends PlayerCardType {}

const PlayerCard: React.FC<PlayerCardProps> = ({ id, player }) => (
  <CardContainer>
    <PlayerImage src={generatePlayerImageUrl(id as number)} alt={generatePlayerName(player)} />
    <PlayerInfo>
      <p>{humanReadableDate(player.birthday)}</p>
      <p>{player.team}</p>
    </PlayerInfo>
    <PlayerName>{generatePlayerName(player)}</PlayerName>
  </CardContainer>
);

export default PlayerCard;
