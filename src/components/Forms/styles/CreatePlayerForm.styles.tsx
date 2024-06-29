import { styled } from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 0 auto;
`;

export const Button = styled.button<{ disabled: boolean }>`
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: ${({ disabled }) => (disabled ? '#cccccc' : '#007bff')};
  color: white;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  margin-top: 10px;

  &:hover {
    background-color: ${({ disabled }) => (disabled ? '#cccccc' : '#0056b3')};
  }
`;

export const Error = styled.p`
  color: red;
`;
