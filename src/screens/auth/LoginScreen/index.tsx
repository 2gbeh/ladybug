import React, {useState} from 'react';
import {Avatar, Button, Text, TextInput, useTheme} from 'react-native-paper';
// SHARED IMPORTS
import type {RootStackScreenProps} from '@/navigators/RootStackNavigator/types';
import Temp from '@/components/Temp';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {containerStyles} from '@/styles/containerStyles';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import {ThemeProp} from 'react-native-paper/lib/typescript/types';
import {Typography} from '@/components/atoms/Typography';
import ListItem from '@/components/molecules/ListItem';
import TextField from '@/components/atoms/form-controls/ui/TextField';

function LoginScreen({
  navigation,
}: RootStackScreenProps<'Login'>): React.JSX.Element {
  const theme = useTheme();
  const sx = themedStyles(theme);
  const [showPassword, setShowPassword] = useState(false);
  // RENDER
  return (
    <ScrollView contentContainerStyle={sx().container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={sx().content}>
        <View>
          <Typography.Headline>Log in</Typography.Headline>
          <Typography.Body>Welcome back</Typography.Body>
        </View>
        <TextField label='Email or username' rightIcon='email' flat/>
        <TextField label='Password' rightIcon='eye' flat/>
        
        <TextInput
          label="Password"
          secureTextEntry={!showPassword}
          right={
            <TextInput.Icon
              icon={showPassword ? 'eye-off' : 'eye'}
              onPress={() => setShowPassword(prev => !prev)}
            />
          }
        />
        <TextInput
          mode="outlined"
          label="Confirm password"
          secureTextEntry={!showPassword}
          right={
            <TextInput.Icon
              icon={showPassword ? 'eye-off' : 'eye'}
              onPress={() => setShowPassword(prev => !prev)}
            />
          }
        />
        <Button
        compact
          icon="camera"
          mode="contained"
          // loading={true}
          onPress={() => console.log('Pressed')}>
          Log in
        </Button>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

export default LoginScreen;

export function themedStyles(theme: ThemeProp) {
  type PropsType = {supportingText?: boolean};
  return (props?: PropsType) =>
    StyleSheet.create({
      _: {},
      container: {
        backgroundColor: theme.colors?.background,
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 16,
      },
      content: {
        rowGap: 16,
      },
    });
}
