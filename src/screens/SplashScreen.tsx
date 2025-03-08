import React, {useEffect} from 'react';
// SHARED IMPORTS
import {useAppContext} from '@/context/AppContext';
import type {RootStackScreenProps} from '@/navigators/RootStackNavigator/types';
import Temp from '@/components/Temp';

function SplashScreen({
  navigation,
}: RootStackScreenProps<'Splash'>): React.JSX.Element {
  const {isAuthenticated} = useAppContext();
  // SIDE EFFECTS
  useEffect(() => {
    isAuthenticated
      ? navigation.replace('Tabs', {screen: 'Home'})
      : navigation.replace('Login');
  }, [navigation]);
  // RENDER
  return <Temp>SplashScreen</Temp>;
}

export default SplashScreen;
