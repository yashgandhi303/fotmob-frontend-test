import React from 'react';
import {
  Copyright,
  FollowUsButton,
  FollowUsContainer,
  FooterContainer,
  Link,
  LinksColumn,
  LinksContainer,
  LinksTitle,
  Logo,
  LogoContainer,
} from './styles/Footer.styles';

const Footer: React.FC = () => (
  <FooterContainer>
    <LogoContainer>
      <Logo>
        <img src="https://www.unagi.games/images/logotype-short.svg" alt="UNAGI Logo" />
      </Logo>
      <Copyright>© 2023 - Unagi</Copyright>
    </LogoContainer>
    <LinksContainer>
      <LinksColumn>
        <LinksTitle>PRODUCTS</LinksTitle>
        <Link href="#">Ultimate Champions</Link>
        <Link href="#">Persona</Link>
        <Link href="#">Una Token</Link>
      </LinksColumn>
      <LinksColumn>
        <LinksTitle>UNAGI</LinksTitle>
        <Link href="#">Careers</Link>
        <Link href="#">Contact</Link>
      </LinksColumn>
    </LinksContainer>
    <FollowUsContainer>
      <FollowUsButton href="#">FOLLOW US</FollowUsButton>
    </FollowUsContainer>
  </FooterContainer>
);

export default Footer;
