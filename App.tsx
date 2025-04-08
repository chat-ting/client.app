import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RootStack } from './_lib/components/routes';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}

export default App;
