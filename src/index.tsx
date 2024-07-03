import React from 'react';
import { render } from 'react-dom';
import { ThemeContextProvider } from './context';
import { App } from './app';

const WrappedApp: React.FC = () => (
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>
);

render(<WrappedApp />, document.getElementById('root'));
