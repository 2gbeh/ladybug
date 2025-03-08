import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export const sectionStyles = {
  static: StyleSheet.create({
    container: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
  }),
  title: (isDarkMode?: boolean) =>
    StyleSheet.create({
      transform: {
        color: isDarkMode ? Colors.white : Colors.black,
        fontSize: 24,
        fontWeight: '600',
      },
    }),
  description: (isDarkMode?: boolean) =>
    StyleSheet.create({
      transform: {
        color: isDarkMode ? Colors.light : Colors.dark,
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
      },
    }),
};
