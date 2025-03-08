import React from 'react';
// SHARED IMPORTS
import type {RootStackScreenProps} from '@/navigators/RootStackNavigator/types';
import Temp from '@/components/Temp';
import Highlight from '@/components/atoms/Highlight';

function DetailsScreen({
  route,
  navigation,
}: RootStackScreenProps<'Details'>): React.JSX.Element {
  // RENDER
  return (
    <Temp next={() => navigation.goBack()}>
      DetailsScreen <Highlight>{route.params.id}</Highlight>
    </Temp>
  );
}

export default DetailsScreen;
