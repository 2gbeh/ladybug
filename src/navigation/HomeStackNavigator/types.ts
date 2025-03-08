import type {StackScreenProps} from '@react-navigation/stack';

export type HomeStackParamList = {
  Home: undefined;
  Details: undefined;
};

export type HomeStackScreenProps<T extends keyof HomeStackParamList> =
  StackScreenProps<HomeStackParamList, T>;