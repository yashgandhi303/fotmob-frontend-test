import React from 'react';
import Tilt from 'react-parallax-tilt';
import InfoCard from '../components/Cards/InfoCard';
import { CenterLogo, CenterLogoWrapper, Grid, LogoImage, Section } from './styles/InfoSection.styles';

const InfoSection: React.FC = () => (
  <Section>
    <Grid>
      <InfoCard
        icon="🎮"
        title="Powering live games"
        description="UNA token fuels Ultimate Champions' football and basketball games. With over 400,000 users and a strong community, it ranks top 5 on BNB Chain."
      />
      <InfoCard
        icon="🔐"
        title="Powering Persona"
        description="Persona holders will get direct benefits through the UNA token."
      />
      <InfoCard
        icon="🚀"
        title="Powering future games"
        description="All our future games will feature a value accrual mechanism directed towards the UNA token."
      />
      <InfoCard
        icon="💼"
        title="Backed by Binance Labs"
        description="Binance labs invested $4M in the Unagi's token, marking a pivotal point in our mission to pioneer the future of web3 gaming."
      />
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
