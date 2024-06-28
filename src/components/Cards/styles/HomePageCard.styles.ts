import { styled } from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Card = styled.div`
  background-color: ${({ theme }) => theme.background};
  border-radius: 20px;
  overflow: hidden;
  width: 350px;
  margin: 20px;
  text-align: center;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  border: 1px solid ${({ theme }) => theme.buttonBackground}; /* Added border */
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    border-color 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.4);
    border-color: lime; /* Change border color on hover */
  }
`;

export const CardImages = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 20px;
`;

export const CardImage = styled.img`
  width: 100px;
  height: auto;
  margin: 0 5px;
  transition: transform 0.3s ease;

  &:nth-child(1) {
    transform: translateX(-40px);
  }

  &:nth-child(2) {
    transform: translateX(0);
    z-index: 1;
  }

  &:nth-child(3) {
    transform: translateX(40px);
  }

  ${Card}:hover & {
    transform: scale(1.05);
  }
`;

export const CardContent = styled.div`
  padding: 15px;
`;

export const CardTitle = styled.h3`
  font-size: 22px;
  margin: 10px 0;
  color: ${({ theme }) => theme.color};
`;

export const CardDescription = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.color};
  margin: 10px 0;
`;

export const Button = styled.a`
  display: inline-block;
  margin: 20px 0;
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
