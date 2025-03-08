import React, {PropsWithChildren} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

type PropsType = PropsWithChildren<{
  next?: () => void;
}>;

const Temp: React.FC<PropsType> = ({children, next}) => (
  <View style={s.static.container}>
    <Text>{children}</Text>
    {next ? <Button title="Next" onPress={next} /> : null}
  </View>
);

export default React.memo(Temp);

const s = {
  static: StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 16,
      flex: 1,
    },
  }),
};
