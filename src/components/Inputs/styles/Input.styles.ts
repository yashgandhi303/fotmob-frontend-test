import { styled } from 'styled-components';

export const StyledInput = styled.input`
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.color};
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
`;
