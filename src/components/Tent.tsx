import React, {PropsWithChildren} from 'react';
import {Button, Text, View} from 'react-native';

type VoidFunction = () => void;

type PropsType = PropsWithChildren<{
  next?: VoidFunction;
}>;

const Tent: React.FC<PropsType> = ({children, next}) => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 16,
        flex: 1,
      }}>
      <Text style={{fontWeight: '700'}}>{children}</Text>
      {!!next && <Button title="Next" onPress={next} />}
    </View>
  );
};

export default React.memo(Tent);
