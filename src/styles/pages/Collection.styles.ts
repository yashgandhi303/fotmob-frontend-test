import { styled } from 'styled-components';

export const CollectionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Message = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.color};
`;
