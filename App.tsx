import React from 'react';
import { createTheme, ThemeProvider } from '@rneui/themed';
import Main from 'components/Main';

const theme = createTheme({
  lightColors: {},
  darkColors: {},
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  );
}
