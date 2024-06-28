import React from 'react';
import { render } from 'react-dom';
import { ThemeContextProvider } from './lib/context/ThemeContext';
import { App } from './App';

const WrappedApp: React.FC = () => (
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>
);

render(<WrappedApp />, document.getElementById('root'));
