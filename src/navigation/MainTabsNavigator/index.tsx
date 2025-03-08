import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// SHARED IMPORTS
import HomeStackNavigator from '../HomeStackNavigator';
import ProfileScreen from '@/screens/main/ProfileScreen';
// LOCAL IMPORTS
import {MainTabsParamList} from './types';

const Tab = createBottomTabNavigator<MainTabsParamList>();

function MainTabsNavigator() {
  // RENDER
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeStack" component={HomeStackNavigator} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default MainTabsNavigator;
