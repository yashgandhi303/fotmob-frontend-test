import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.footerBackground};
  color: ${({ theme }) => theme.footerColor};
  padding: 40px 60px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 100px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.logoColor};

  img {
    height: 30px;
    margin-right: 10px;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%;
  max-width: 400px;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
    flex-direction: column;
  }
`;

const LinksColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const LinksTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.footerTitleColor}; /* Added for title color */
`;

const Link = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.footerColor};
  margin-bottom: 5px;

  &:hover {
    color: gray;
  }
`;

const FollowUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  height: 100px;

  @media (max-width: 768px) {
    align-items: flex-start;
    margin-top: 20px;
  }
`;

const FollowUsButton = styled.a`
  display: inline-block;
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

const Copyright = styled.div`
  font-size: 12px;
  margin-top: 20px;

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

const Footer: React.FC = () => (
  <FooterContainer>
    <LogoContainer>
      <Logo>
        <img
          src="https://www.unagi.games/images/logotype-short.svg"
          alt="UNAGI Logo"
        />
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
