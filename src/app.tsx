import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import { Collection } from './pages/Collection';
import { CreateCard } from './pages/CreateCard';
import { HomePage } from './pages/HomePage';
import HeaderContainer from './containers/HeaderContainer';
import FooterContainer from './containers/FooterContainer';
import ErrorBoundary from './components/ErrorBoundary';
import { AppContainer, Main } from './styles/GlobalStyles';
import { ScrollToTop } from './hooks';
import { ToastProvider } from './context';
import { Toast } from './components/Toast';

const queryClient = new QueryClient();

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <ToastProvider>
      <AppContainer>
        <HeaderContainer />
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
        <FooterContainer />
        <Toast />
      </AppContainer>
    </ToastProvider>
  </QueryClientProvider>
);
