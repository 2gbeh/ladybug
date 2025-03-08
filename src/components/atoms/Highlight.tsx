import React, {PropsWithChildren} from 'react';
import {Text} from 'react-native';

const Highlight: React.FC<PropsWithChildren> = ({children}) => {
  return <Text style={{fontWeight: '700'}}>{children}</Text>;
};

export default React.memo(Highlight);
