import React from 'react';
// SHARED IMPORTS
import type {BottomTabsScreenProps} from '@/navigators/BottomTabsNavigator/types';
import Temp from '@/components/Temp';

function HomeScreen({
  navigation,
}: BottomTabsScreenProps<'Home'>): React.JSX.Element {
  // RENDER
  return (
    <Temp next={() => navigation.navigate('Details', {id: Date.now()})}>
      HomeScreen
    </Temp>
  );
}

export default HomeScreen;
