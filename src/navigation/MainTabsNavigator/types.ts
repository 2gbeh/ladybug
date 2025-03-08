import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
//
import {
  RootStackParamList,
  RootStackScreenProps,
} from '../RootStackNavigator/types';
import {HomeStackParamList} from '../HomeStackNavigator/types';

export type MainTabsParamList = {
  HomeStack: NavigatorScreenParams<HomeStackParamList>;
  Profile: undefined;
};

export type MainTabsScreenProps<T extends keyof MainTabsParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<MainTabsParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;
