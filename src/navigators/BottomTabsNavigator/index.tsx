import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// SHARED IMPORTS
import HomeScreen from '@/screens/main/HomeScreen';
import ProfileScreen from '@/screens/main/ProfileScreen';
// LOCAL IMPORTS
import {BottomTabsParamList} from './types';

const Tab = createBottomTabNavigator<BottomTabsParamList>();

function BottomTabNavigator() {
  // RENDER
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
