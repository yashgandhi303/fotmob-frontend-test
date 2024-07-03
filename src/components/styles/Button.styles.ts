import styled, { css } from 'styled-components';

const baseButtonStyles = css`
  display: inline-block;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  transition:
    background-color 0.3s,
    color 0.3s,
    border 0.3s;
  font-family: ${({ theme }) => theme.fontFamily};
`;

const secondaryStyles = css`
  background-color: ${({ theme }) => theme.buttonBackground};
  color: ${({ theme }) => theme.buttonColor};
  border: 1px solid ${({ theme }) => theme.buttonBackground};

  &:hover {
    background-color: ${({ theme }) => theme.buttonColor};
    color: ${({ theme }) => theme.buttonBackground};
    border-color: ${({ theme }) => theme.buttonColor};
  }
`;

const primaryStyles = css`
  background-color: ${({ theme }) => theme.footerBackground};
  color: ${({ theme }) => theme.footerColor};
  border: 1px solid ${({ theme }) => theme.footerBackground};

  &:hover {
    background-color: ${({ theme }) => theme.footerColor};
    color: ${({ theme }) => theme.footerBackground};
    border-color: ${({ theme }) => theme.footerColor};
  }
`;

const outlineStyles = css`
  background-color: transparent;
  color: ${({ theme }) => theme.buttonBackground};
  border: 1px solid ${({ theme }) => theme.buttonBackground};

  &:hover {
    background-color: ${({ theme }) => theme.buttonBackground};
    color: ${({ theme }) => theme.buttonColor};
  }
`;

const disabledStyles = css`
  background-color: ${({ theme }) => theme.borderColor};
  color: ${({ theme }) => theme.buttonColor};
  border: 1px solid ${({ theme }) => theme.borderColor};
  cursor: not-allowed;

  &:hover {
    background-color: ${({ theme }) => theme.borderColor};
    color: ${({ theme }) => theme.buttonColor};
  }
`;

export const Button = styled.button<{ variant: 'primary' | 'secondary' | 'outline'; disabled?: boolean }>`
  ${baseButtonStyles}

  ${({ variant }) => variant === 'primary' && primaryStyles}
  ${({ variant }) => variant === 'secondary' && secondaryStyles}
  ${({ variant }) => variant === 'outline' && outlineStyles}
  ${({ disabled }) => disabled && disabledStyles}
`;
