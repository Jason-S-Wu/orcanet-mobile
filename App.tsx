import React from 'react';
import { createTheme, ThemeProvider } from '@rneui/themed';
import Component from './components/MyComponent';
import NavBar from 'components/NavBar';

const theme = createTheme({
  lightColors: {},
  darkColors: {},
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Component />
    </ThemeProvider>
  );
}
