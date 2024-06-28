import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../lib/context/ThemeContext';

const HeaderContainer = styled.header`
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

const Logo = styled.div`
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

const Nav = styled.nav`
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

const NavLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => (theme.color === '#000000' ? '#fff' : '#000')};
  font-size: 16px;

  &:hover {
    color: gray;
  }

  &.cta {
    font-weight: bold;
    color: ${({ theme }) =>
      theme.buttonColor === '#000000' ? '#fff' : '#000'};
  }
`;

const Header: React.FC = () => {
  const { theme } = useTheme();

  return (
    <HeaderContainer>
      <Logo>
        <NavLink href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="108"
            height="34"
            viewBox="0 0 108 34"
            fill="none"
          >
            <g>
              <path
                d="M20.1955 2.32162L20.982 0L13.3654 0.25247L4.60331 4.40063L4.57081 4.40379L1.26608 4.71928L0 6.08472L9.3152 8.86659L9.12579 7.42396L19.7533 10.5978L10.9812 9.36414L11.0974 10.6346L0.547012 8.25371L2.17176 11.0419L8.8288 13.03L16.0553 14.5541L25.7118 19.183L12.7137 15.6588L3.52482 18.9281V27.2737L25.2864 34V30.0921L17.7129 25.4532L7.45611 26.2745L32 20.6483V10.2846L20.1955 2.32162Z"
                fill={theme === 'light' ? 'black' : 'white'}
              />
              <path
                d="M90.662 18.2731H93.72V21.4888C93.72 21.6568 93.5823 21.793 93.4125 21.793H88.5648C87.9144 21.793 87.387 21.2713 87.387 20.6276V13.3723C87.387 12.7287 87.9143 12.2069 88.5648 12.2069H93.4114C93.5812 12.2069 93.7189 12.3431 93.7189 12.5111V14.4067H96.0677V12.2999C96.0677 11.0297 95.0271 10 93.7434 10H88.2422C86.4623 10 85.0194 11.4277 85.0194 13.189V20.811C85.0194 22.5722 86.4623 24 88.2422 24H93.7632C95.0469 24 96.0875 22.9703 96.0875 21.7001V16.0662H90.662V18.2731Z"
                fill={theme === 'light' ? 'black' : 'white'}
              />
              <path
                d="M66.5348 20.0304L60.9895 10.1671H57.8373V23.8328H60.2048V13.3058L66.1233 23.8328H68.9022V10.1671H66.5348V20.0304Z"
                fill={theme === 'light' ? 'black' : 'white'}
              />
              <path
                d="M71.3275 23.8328L73.9121 10.1671H80.4227L83.0073 23.8328H80.6397L79.6336 18.6009L73.4978 23.8328H71.3275ZM75.8653 12.3732L74.3658 20.2992H74.3659L79.1798 16.1996L78.4696 12.3732H75.8653Z"
                fill={theme === 'light' ? 'black' : 'white'}
              />
              <path
                d="M52.4473 20.6276C52.4473 21.2713 51.92 21.793 51.2695 21.793H47.5454C46.8949 21.793 46.3676 21.2713 46.3676 20.6276V10.1671H44V20.811C44 22.5721 45.4429 23.9999 47.2228 23.9999H51.5921C53.372 23.9999 54.8148 22.5722 54.8148 20.811V10.1671H52.4473V20.6276Z"
                fill={theme === 'light' ? 'black' : 'white'}
              />
              <path
                d="M108 10.1671V12.3741H104.483V21.6259H108V23.8328H98.6168V21.6259H102.134V12.3741H98.6168V10.1671H108Z"
                fill={theme === 'light' ? 'black' : 'white'}
              />
            </g>
          </svg>{' '}
        </NavLink>
      </Logo>
      <Nav>
        <NavLink href="/collection">Collection</NavLink>
        <NavLink href="#">Games</NavLink>
        <NavLink href="#">About</NavLink>
      </Nav>
      <NavLink href="#" className="cta">
        GET IN TOUCH
      </NavLink>
    </HeaderContainer>
  );
};

export default Header;
