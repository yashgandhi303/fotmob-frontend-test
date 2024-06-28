import React from 'react';
import { GeneralCardProps } from '../../types';
import { Card, Description, Icon, IconContainer, Title } from './styles/InfoCard.styles';

const InfoCard: React.FC<GeneralCardProps> = ({ icon, title, description }) => (
  <Card>
    <IconContainer>
      <Icon>{icon}</Icon>
    </IconContainer>
    <Title>{title}</Title>
    <Description>{description}</Description>
  </Card>
);

export default InfoCard;
