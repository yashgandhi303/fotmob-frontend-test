import { styled } from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
`;

export const Grid = styled.div`
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

export const CenterLogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 20px 0;
`;

export const CenterLogo = styled.div`
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
  background: radial-gradient(circle, rgba(0, 0, 0, 0.9) 60%, rgba(255, 255, 255, 0.1) 90%);
`;

export const LogoImage = styled.img`
  width: 80%;
  height: auto;
`;
