import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import { Collection } from './pages/Collection';
import { CreateCard } from './pages/CreateCard';
import { HomePage } from './pages/HomePage';
import Header from './containers/Header';
import Footer from './containers/Footer';
import { useTheme } from './context/ThemeContext';
import ErrorBoundary from './components/ErrorBoundary';
import { AppContainer, Main, ToggleButton } from './styles/GlobalStyles';
import ScrollToTop from './hooks/useScrollToTop';

const queryClient = new QueryClient();

export const App = () => {
  const { toggleTheme } = useTheme();

  return (
    <QueryClientProvider client={queryClient}>
      <AppContainer>
        <Header />
        <ErrorBoundary>
          <Main>
            <Router>
              <ScrollToTop />
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/collection" component={Collection} />
                <Route exact path="/create-card" component={CreateCard} />
              </Switch>
            </Router>
          </Main>
        </ErrorBoundary>
        <Footer />
        <ToggleButton onClick={toggleTheme}>Toggle Theme</ToggleButton>
      </AppContainer>
    </QueryClientProvider>
  );
};
