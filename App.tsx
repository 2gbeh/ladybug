import './gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// SHARED IMPORTS
import {AppContextProvider} from './src/context/AppContext';
import RootStackNavigator from './src/navigators/RootStackNavigator';

function App(): React.JSX.Element {
  // RENDER
  return (
    <AppContextProvider>
      <NavigationContainer>
        <RootStackNavigator />
      </NavigationContainer>
    </AppContextProvider>
  );
}

export default App;
