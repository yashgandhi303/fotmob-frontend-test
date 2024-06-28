import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Source Sans Pro', sans-serif;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }
`;

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
`;

export const Main = styled.main`
  flex: 1;
  margin-top: 80px;
  padding: 20px 0 40px 0;
`;

export const ToggleButton = styled.button`
  position: fixed;
  top: 12px;
  right: 130px;
  background-color: ${({ theme }) => theme.buttonBackground};
  color: ${({ theme }) => theme.buttonColor};
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 20px;
  transition:
    background-color 0.3s,
    color 0.3s;
  z-index: 1001;
`;
