import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RootStack } from './_lib/components/routes';
import { Providers } from './_lib/components/providers';

function App(): React.JSX.Element {
  return (
    <Providers>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </Providers>
  );
}

export default App;
