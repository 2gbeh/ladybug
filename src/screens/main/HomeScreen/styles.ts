import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

/*
 * To keep the template simple and small we're adding padding to prevent view
 * from rendering under the System UI.
 * For bigger apps the reccomendation is to use `react-native-safe-area-context`:
 * https://github.com/AppAndFlow/react-native-safe-area-context
 *
 * You can read more about it here:
 * https://github.com/react-native-community/discussions-and-proposals/discussions/827
 */
const SAFE_PADDING = '5%';

type ParamsType = {
  isDarkMode?: boolean;
};

export const homeStyles = {
  static: StyleSheet.create({
    header: {
      paddingRight: SAFE_PADDING,
    },
  }),
  dynamic: ({isDarkMode}: ParamsType) =>
    StyleSheet.create({
      container: {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
      },
      content: {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
      },
      main: {
        backgroundColor: isDarkMode ? Colors.black : Colors.white,
        paddingHorizontal: SAFE_PADDING,
        paddingBottom: SAFE_PADDING,
      },
    }),
};
