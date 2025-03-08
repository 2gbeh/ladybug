import React from 'react';
// SHARED IMPORTS
import type {RootStackScreenProps} from '@/navigators/RootStackNavigator/types';
import Temp from '@/components/Temp';

function LoginScreen({
  navigation,
}: RootStackScreenProps<'Login'>): React.JSX.Element {
  // RENDER
  return <Temp next={() => navigation.navigate('Register')}>LoginScreen</Temp>;
}

export default LoginScreen;
