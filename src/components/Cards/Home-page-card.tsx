import React from 'react';
import styled from 'styled-components';

interface CardProps {
  title: string;
  description: string;
  images: string[];
  buttonText: string;
  buttonLink: string;
}

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Card = styled.div`
  background-color: ${({ theme }) => theme.background};
  border-radius: 20px;
  overflow: hidden;
  width: 350px;
  margin: 20px;
  text-align: center;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  border: 1px solid ${({ theme }) => theme.buttonBackground}; /* Added border */
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    border-color 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.4);
    border-color: lime; /* Change border color on hover */
  }
`;

const CardImages = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 20px;
`;

const CardImage = styled.img`
  width: 100px;
  height: auto;
  margin: 0 5px;
  transition: transform 0.3s ease;

  &:nth-child(1) {
    transform: translateX(-40px);
  }

  &:nth-child(2) {
    transform: translateX(0);
    z-index: 1;
  }

  &:nth-child(3) {
    transform: translateX(40px);
  }

  ${Card}:hover & {
    transform: scale(1.05);
  }
`;

const CardContent = styled.div`
  padding: 15px;
`;

const CardTitle = styled.h3`
  font-size: 22px;
  margin: 10px 0;
  color: ${({ theme }) => theme.color};
`;

const CardDescription = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.color};
  margin: 10px 0;
`;

const Button = styled.a`
  display: inline-block;
  margin: 20px 0;
  padding: 10px 20px;
  font-size: 16px;
  color: ${({ theme }) => theme.buttonColor};
  background-color: ${({ theme }) => theme.buttonBackground};
  border-radius: 30px;
  text-decoration: none;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;

  &:hover {
    background-color: gray;
    color: white;
  }
`;

const CardComponent: React.FC<CardProps> = ({
  title,
  description,
  images,
  buttonText,
  buttonLink,
}) => (
  <Card>
    <CardImages>
      {images.map((image, index) => (
        <CardImage key={index} src={image} alt={`${title} ${index + 1}`} />
      ))}
    </CardImages>
    <CardContent>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      <Button href={buttonLink}>{buttonText}</Button>
    </CardContent>
  </Card>
);

const CardSection: React.FC = () => (
  <CardContainer>
    <CardComponent
      title="Ultimate Champions (Football)"
      description="Live since 2022, 400,000 total users, 100 official club partners, Top 5 game on BNB Chain."
      images={[
        'https://images.fotmob.com/image_resources/playerimages/26166.png',
        'https://images.fotmob.com/image_resources/playerimages/26166.png',
        'https://images.fotmob.com/image_resources/playerimages/26166.png',
      ]}
      buttonText="VISIT WEBSITE"
      buttonLink="#"
    />
    <CardComponent
      title="Ultimate Champions (Basketball)"
      description="Live since March 2023, 38 clubs of the EuroLeague and EuroCup."
      images={[
        'https://images.fotmob.com/image_resources/playerimages/26166.png',
        'https://images.fotmob.com/image_resources/playerimages/26166.png',
        'https://images.fotmob.com/image_resources/playerimages/26166.png',
      ]}
      buttonText="VISIT WEBSITE"
      buttonLink="#"
    />
  </CardContainer>
);

export default CardSection;
