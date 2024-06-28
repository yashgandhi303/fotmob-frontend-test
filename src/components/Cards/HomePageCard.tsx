import React from 'react';
import { GeneralCardProps } from '../../types';
import {
  Card,
  Button,
  CardImage,
  CardTitle,
  CardImages,
  CardContent,
  CardContainer,
  CardDescription,
} from './styles/HomePageCard.styles';

const CardComponent: React.FC<GeneralCardProps> = ({ title, description, images, buttonText, buttonLink }) => (
  <Card>
    <CardImages>
      {images?.map((image, index) => <CardImage key={index} src={image} alt={`${title} ${index + 1}`} />)}
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
        'https://images.fotmob.com/image_resources/playerimages/194165.png',
        'https://images.fotmob.com/image_resources/playerimages/30981.png',
        'https://images.fotmob.com/image_resources/playerimages/701154.png',
      ]}
      buttonText="VISIT WEBSITE"
      buttonLink="#"
    />
    <CardComponent
      title="Ultimate Champions (Basketball)"
      description="Live since March 2023, 38 clubs of the EuroLeague and EuroCup."
      images={[
        'https://images.fotmob.com/image_resources/playerimages/26166.png',
        'https://images.fotmob.com/image_resources/playerimages/30893.png',
        'https://images.fotmob.com/image_resources/playerimages/19533.png',
      ]}
      buttonText="VISIT WEBSITE"
      buttonLink="#"
    />
  </CardContainer>
);

export default CardSection;
