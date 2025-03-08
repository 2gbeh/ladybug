import {createNativeStackNavigator} from '@react-navigation/native-stack';
// SHARED IMPORTS
import HomeScreen from '@/screens/main/HomeScreen';
import DetailsScreen from '@/screens/main/DetailsScreen';
// LOCAL IMPORTS
import {HomeStackParamList} from './types';

const Stack = createNativeStackNavigator<HomeStackParamList>();

function HomeStackNavigator() {
  // RENDER
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

export default HomeStackNavigator;
