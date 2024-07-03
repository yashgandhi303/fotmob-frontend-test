import styled from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const PageButton = styled.button<{ disabled: boolean }>`
  padding: 10px 20px;
  margin: 0 5px;
  border: none;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.buttonBackground};
  color: ${({ theme }) => theme.buttonColor};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  &:hover {
    background-color: ${({ theme, disabled }) => (disabled ? theme.buttonBackground : theme.color)};
  }
`;
