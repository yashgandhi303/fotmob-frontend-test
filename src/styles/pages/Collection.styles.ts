import { css, keyframes, styled } from 'styled-components';

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
export const Sorting = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 20px;
`;

export const Message = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.color};
`;

export const Pagination = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 10px;

  button {
    padding: 5px 10px;
    border: none;
    background-color: #007bff;
    color: white;
    cursor: pointer;
    border-radius: 5px;

    &:disabled {
      background-color: #d3d3d3;
      cursor: not-allowed;
    }

    &:hover:not(:disabled) {
      background-color: #0056b3;
    }
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const sortingAnimation = css`
  animation:
    ${fadeOut} 0.5s forwards,
    ${fadeIn} 0.5s forwards;
`;

export const PlayerCardsContainer = styled.div<{ isSorting: boolean }>`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  ${({ isSorting }) => isSorting && sortingAnimation};
`;

export const LinkSpan = styled.span`
  color: ${({ theme }) => theme.buttonBackground};
  cursor: pointer;
  text-decoration: underline;
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.color};
  }
`;
