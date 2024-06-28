import React from 'react';
import styled from 'styled-components';

interface InfoCardProps {
  icon: string;
  title: string;
  description: string;
}

const Card = styled.div`
  background-color: ${({ theme }) => theme.cardBackground};
  border-radius: 20px;
  padding: 30px;
  width: 300px;
  text-align: center;
  color: ${({ theme }) => theme.color};
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  margin: 20px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    border-color 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.4);
  }
`;

const IconContainer = styled.div`
  background-color: ${({ theme }) => theme.iconBackground};
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

const Icon = styled.div`
  font-size: 30px;
  color: ${({ theme }) => theme.iconColor};
`;

const Title = styled.h3`
  font-size: 20px;
  margin: 0 0 10px;
`;

const Description = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.descriptionColor};
`;

const InfoCard: React.FC<InfoCardProps> = ({ icon, title, description }) => (
  <Card>
    <IconContainer>
      <Icon>{icon}</Icon>
    </IconContainer>
    <Title>{title}</Title>
    <Description>{description}</Description>
  </Card>
);

export default InfoCard;
