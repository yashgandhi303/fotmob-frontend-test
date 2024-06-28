import React from 'react';
import styled from 'styled-components';
import Tilt from 'react-parallax-tilt';
import InfoCard from './Cards/Info-card';
// import InfoCard from './InfoCard';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  align-items: center;
  justify-items: center;
  max-width: 1200px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CenterLogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 20px 0;
`;

const CenterLogo = styled.div`
  width: 200px;
  height: 200px;
  background-color: ${({ theme }) => theme.background};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  border: 5px solid rgba(255, 255, 255, 0.2);
  background: radial-gradient(
    circle,
    rgba(0, 0, 0, 0.9) 60%,
    rgba(255, 255, 255, 0.1) 90%
  );
`;

const LogoImage = styled.img`
  width: 80%;
  height: auto;
`;

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
          <LogoImage
            src="https://www.unagi.games/images/logotype-short.svg"
            alt="UNA Logo"
          />
        </CenterLogo>
      </Tilt>
    </CenterLogoWrapper>
  </Section>
);

export default InfoSection;
