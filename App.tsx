import './gesture-handler';

import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
// SHARED IMPORTS
import RootStackNavigator from '@/navigation/RootStackNavigator';
import SplashScreen from '@/screens/SplashScreen';
import {sleep} from '@/utils/sleep';

function App(): React.JSX.Element {
  // LOCAL STATES
  const [isLoading, setIsLoading] = useState(true);
  // SIDE EFFECT
  useEffect(() => {
    (async () => {
      await sleep();
      setIsLoading(false);
    })();
  }, []);
  // RENDER
  return isLoading ? (
    <SplashScreen />
  ) : (
    <NavigationContainer>
      <RootStackNavigator />
    </NavigationContainer>
  );
}
export default App;
