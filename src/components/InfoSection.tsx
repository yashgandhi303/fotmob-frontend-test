import React from 'react';
import Tilt from 'react-parallax-tilt';
import InfoCard from './Cards/InfoCard';
import { Section, Grid, CenterLogoWrapper, CenterLogo, LogoImage } from './styles/InfoSection.styles';

const hardCodedData = [
  {
    icon: '🎮',
    title: 'Powering live games',
    description:
      "UNA token fuels Ultimate Champions' football and basketball games. With over 400,000 users and a strong community, it ranks top 5 on BNB Chain.",
  },
  {
    icon: '🔐',
    title: 'Powering Persona',
    description: 'Persona holders will get direct benefits through the UNA token.',
  },
  {
    icon: '🚀',
    title: 'Powering future games',
    description: 'All our future games will feature a value accrual mechanism directed towards the UNA token.',
  },
  {
    icon: '💼',
    title: 'Backed by Binance Labs',
    description:
      "Binance labs invested $4M in the Unagi's token, marking a pivotal point in our mission to pioneer the future of web3 gaming.",
  },
];

const InfoSection: React.FC = () => (
  <Section>
    <Grid>
      {hardCodedData.map((item, index) => (
        <InfoCard key={index} icon={item.icon} title={item.title} description={item.description} />
      ))}
    </Grid>
    <CenterLogoWrapper>
      <Tilt tiltMaxAngleX={25} tiltMaxAngleY={25} scale={1.05}>
        <CenterLogo>
          <LogoImage src="https://www.unagi.games/images/logotype-short.svg" alt="UNA Logo" />
        </CenterLogo>
      </Tilt>
    </CenterLogoWrapper>
  </Section>
);

export default InfoSection;
