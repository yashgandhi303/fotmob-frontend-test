import React from 'react';
import styled, { keyframes } from 'styled-components';
import LazyImage from '../LazyImage';
import { PlayerCardType } from '../../lib/collection';
import {
  generateImageUrl,
  generatePlayerName,
  humanReadableDate,
} from '../../utils/helpers';

interface PlayerCardProps extends PlayerCardType {}

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const CardContainer = styled.div`
  background-color: ${({ theme }) => theme.cardBackground};
  color: ${({ theme }) => theme.color};
  border-radius: 10px;
  padding: 20px;
  width: 300px;
  height: 230px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  animation: ${fadeIn} 0.5s ease-in-out;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  border: 1px solid ${({ theme }) => theme.borderColor};

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.4);
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 300px;
  }
`;

const PlayerImage = styled(LazyImage)`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-bottom: 10px;
`;

const PlayerName = styled.h3`
  margin: 0 0 10px 0;
`;

const PlayerInfo = styled.div`
  opacity: 0;
  height: 0;
  overflow: hidden;
  transition:
    opacity 0.3s ease,
    height 0.3s ease;

  p {
    margin: 5px 0;
  }

  ${CardContainer}:hover & {
    opacity: 1;
    height: auto;
  }
`;

const PlayerCard: React.FC<PlayerCardProps> = ({ id, player }) => {
  return (
    <CardContainer>
      <PlayerImage
        src={generateImageUrl(id as number)}
        alt={generatePlayerName(player.firstname, player.lastname)}
      />
      <PlayerInfo>
        <p>{humanReadableDate(player.birthday)}</p>
        <p>{player.team}</p>
      </PlayerInfo>
      <PlayerName>
        {generatePlayerName(player.firstname, player.lastname)}
      </PlayerName>
    </CardContainer>
  );
};

export default PlayerCard;
