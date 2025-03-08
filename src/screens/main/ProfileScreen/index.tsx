import React from 'react';
// SHARED IMPORTS
import Temp from '@/components/Temp';
import {useAppContext} from '@/context/AppContext';

function ProfileScreen(): React.JSX.Element {
  const {setIsAuthenticated} = useAppContext();
  // RENDER
  return <Temp next={() => setIsAuthenticated(false)}>ProfileScreen</Temp>;
}

export default ProfileScreen;
