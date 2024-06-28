import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import { Collection } from './pages/Collection';
import { CreateCard } from './pages/CreateCard';
import { HomePage } from './pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import { ThemeContextProvider, useTheme } from './lib/context/ThemeContext';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
`;

const Main = styled.main`
  flex: 1;
`;

const ToggleButton = styled.button`
  position: fixed;
  top: 10px;
  right: 10px;
  background-color: ${({ theme }) => theme.buttonBackground};
  color: ${({ theme }) => theme.buttonColor};
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 20px;
  transition:
    background-color 0.3s,
    color 0.3s;
`;

const App = () => {
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

const WrappedApp: React.FC = () => (
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>
);

render(<WrappedApp />, document.getElementById('root'));
