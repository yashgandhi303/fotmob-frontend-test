import { styled } from 'styled-components';

export const FooterContainer = styled.footer`
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

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 100px;
`;

export const Logo = styled.div`
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

export const LinksContainer = styled.div`
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

export const LinksColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LinksTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.footerTitleColor}; /* Added for title color */
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.footerColor};
  margin-bottom: 5px;

  &:hover {
    color: gray;
  }
`;

export const FollowUsContainer = styled.div`
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

export const FollowUsButton = styled.a`
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

export const Copyright = styled.div`
  font-size: 12px;
  margin-top: 20px;

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const SocialIconLink = styled.a`
  color: ${({ theme }) => theme.color};
  font-size: 24px;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.buttonBackground};
  }
`;
