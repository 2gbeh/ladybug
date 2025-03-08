import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

type ParamsType = {
  isDarkMode?: boolean;
};

export const sectionStyles = {
  static: StyleSheet.create({
    container: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
  }),
  dynamic: ({isDarkMode}: ParamsType) =>
    StyleSheet.create({
      title: {
        color: isDarkMode ? Colors.white : Colors.black,
        fontSize: 24,
        fontWeight: '600',
      },
      description: {
        color: isDarkMode ? Colors.light : Colors.dark,
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
      },
    }),
};
