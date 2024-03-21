import React from 'react';
import Index from 'components/Index';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  return(
    <SafeAreaProvider>
      <Index />
    </SafeAreaProvider>
  );
};

export default App;
