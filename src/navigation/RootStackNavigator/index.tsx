import {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// SHARED IMPORTS
import AuthStackNavigator from '../AuthStackNavigator';
import MainTabsNavigator from '../MainTabsNavigator';
import {sleep} from '@/utils/sleep';
// LOCAL IMPORTS
import {RootStackParamList} from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootStackNavigator() {
  // LOCAL STATES
  const [session, setSession] = useState(false);
  // SIDE EFFECT
  useEffect(() => {
    (async () => {
      await sleep();
      setSession(true);
    })();
  }, []);
  // RENDER
  return (
    <Stack.Navigator>
      {!session ? (
        <Stack.Screen name="AuthStack" component={AuthStackNavigator} />
      ) : (
        <Stack.Screen name="MainTabs" component={MainTabsNavigator} />
      )}
    </Stack.Navigator>
  );
}

export default RootStackNavigator;
