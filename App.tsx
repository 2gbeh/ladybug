/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import SplashScreen from '@/screens/SplashScreen';
import LoginScreen from '@/screens/LoginScreen';
import HomeScreen from '@/screens/HomeScreen';

function App(): React.JSX.Element {
  const [isLoading, setIsLoading] = useState(false);
  // RENDER
  return isLoading ? (
    <SplashScreen />
  ) : (
    <NavigationContainer>
      <Stack.Navigator>
        {userToken == null ? (
          // No token found, user isn't signed in
          <Stack.Screen
            name="SignIn"
            component={SimpleSignInScreen}
            options={{
              title: 'Sign in',
            }}
            initialParams={{setUserToken}}
          />
        ) : (
          // User is signed in
          <Stack.Screen name="Home" component={HomeScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
