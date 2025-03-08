import type {CompositeScreenProps} from '@react-navigation/native';
import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
//
import type {
  RootStackParamList,
  RootStackScreenProps,
} from '../RootStackNavigator/types';

export type BottomTabsParamList = {
  Home: undefined;
  Profile: undefined;
};

export type BottomTabsScreenProps<T extends keyof BottomTabsParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<BottomTabsParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;
