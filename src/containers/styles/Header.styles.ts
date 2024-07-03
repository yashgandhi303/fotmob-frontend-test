import { styled } from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.background};
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Logo = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  font-size: 24px;
  font-weight: bold;

  img {
    height: 30px;
    margin-right: 10px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color: ${({ theme }) => theme.logoColor};
  border-radius: 30px;
  padding: 10px 20px;

  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => (theme.color === '#000000' ? '#fff' : '#000')};
  font-size: 16px;

  &:hover {
    color: gray;
  }

  &.cta {
    font-weight: bold;
    color: ${({ theme }) => (theme.buttonColor === '#000000' ? '#fff' : '#000')};
  }
`;
