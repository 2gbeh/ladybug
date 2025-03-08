import {createNativeStackNavigator} from '@react-navigation/native-stack';
// SHARED IMPORTS
import LoginScreen from '@/screens/auth/LoginScreen';
import RegisterScreen from '@/screens/auth/RegisterScreen';
// LOCAL IMPORTS
import {AuthStackParamList} from './types';

const Stack = createNativeStackNavigator<AuthStackParamList>();

function AuthStackNavigator() {
  // RENDER
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}

export default AuthStackNavigator;
