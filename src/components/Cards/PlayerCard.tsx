import React from 'react';
import { PlayerCardType } from '../../types';
import { generateImageUrl, generatePlayerName, humanReadableDate } from '../../utils/helpers';
import { CardContainer, PlayerImage, PlayerInfo, PlayerName } from './styles/PlayerCard.styles';

interface PlayerCardProps extends PlayerCardType {}

const PlayerCard: React.FC<PlayerCardProps> = ({ id, player }) => (
  <CardContainer>
    <PlayerImage src={generateImageUrl(id as number)} alt={generatePlayerName(player.firstname, player.lastname)} />
    <PlayerInfo>
      <p>{humanReadableDate(player.birthday)}</p>
      <p>{player.team}</p>
    </PlayerInfo>
    <PlayerName>{generatePlayerName(player.firstname, player.lastname)}</PlayerName>
  </CardContainer>
);

export default PlayerCard;
