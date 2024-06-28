import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import { Collection } from './pages/Collection';
import { CreateCard } from './pages/CreateCard';
import { HomePage } from './pages/HomePage';
import Header from './containers/Header';
import Footer from './containers/Footer';
import { useTheme } from './lib/context/ThemeContext';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
`;

const Main = styled.main`
  flex: 1;
  margin-top: 80px;
  padding: 20px 0 40px 0;
`;

const ToggleButton = styled.button`
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
  z-index: 1001; /* Ensure the button is above other content */
`;

export const App = () => {
  const { toggleTheme } = useTheme();
  return (
    <AppContainer>
      <Header />
      <Main>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/collection" component={Collection} />
            <Route exact path="/create-card" component={CreateCard} />
          </Switch>
        </Router>
      </Main>
      <Footer />
      <ToggleButton onClick={toggleTheme}>Toggle Theme</ToggleButton>
    </AppContainer>
  );
};
