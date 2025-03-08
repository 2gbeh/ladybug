import React, {PropsWithChildren} from 'react';
import {Text, useColorScheme, View} from 'react-native';
//
import {sectionStyles as s} from './styles';

type PropsType = PropsWithChildren<{
  title: string;
}>;

const Section: React.FC<PropsType> = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={s.static.container}>
      <Text style={s.title(isDarkMode).transform}>{title}</Text>
      <Text style={s.description(isDarkMode).transform}>{children}</Text>
    </View>
  );
};

export default React.memo(Section);
