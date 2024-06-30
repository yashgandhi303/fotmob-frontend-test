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
  SocialIcons,
  SocialIconLink,
} from './styles/Footer.styles';

const productLinks = [
  { name: 'Ultimate Champions', url: '#' },
  { name: 'Persona', url: '#' },
  { name: 'Una Token', url: '#' },
];

const unagiLinks = [
  { name: 'Careers', url: '#' },
  { name: 'Contact', url: '#' },
];

const socialMedia = [
  { name: 'Facebook', url: 'https://www.facebook.com', icon: '📘' },
  { name: 'Twitter', url: 'https://www.twitter.com', icon: '🐦' },
  { name: 'Instagram', url: 'https://www.instagram.com', icon: '📸' },
];

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
        {productLinks.map((link, index) => (
          <Link key={index} href={link.url}>
            {link.name}
          </Link>
        ))}
      </LinksColumn>
      <LinksColumn>
        <LinksTitle>UNAGI</LinksTitle>
        {unagiLinks.map((link, index) => (
          <Link key={index} href={link.url}>
            {link.name}
          </Link>
        ))}
      </LinksColumn>
    </LinksContainer>
    <FollowUsContainer>
      <FollowUsButton href="#">FOLLOW US</FollowUsButton>
      <SocialIcons>
        {socialMedia.map((media, index) => (
          <SocialIconLink key={index} href={media.url} aria-label={media.name}>
            {media.icon}
          </SocialIconLink>
        ))}
      </SocialIcons>
    </FollowUsContainer>
  </FooterContainer>
);

export default Footer;
