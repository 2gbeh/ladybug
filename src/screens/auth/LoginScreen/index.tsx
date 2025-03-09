import React, {useState} from 'react';
import {Avatar, Text, TextInput, useTheme} from 'react-native-paper';
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
          <ListItem
            avatar={require('@/assets/images/my-avatar.png')}
            headline="PlateauMed"
            // supportingText="February salary"
            trailingText="Feb 28"
          />
        </View>
        <TextInput label="Username" right={<TextInput.Icon icon="email" />} />
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
