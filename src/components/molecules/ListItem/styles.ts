import {StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';

type PropsType = {muted?: boolean};

export function listItemStyles(props?: PropsType) {
  const theme = useTheme();
  return StyleSheet.create({
    _: {},
    container: {
      // backgroundColor: theme.colors.surface,
      paddingVertical: 8,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    figure: {
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: 16,
    },
    figcaption: {},
    text: {
      color: props?.muted
        ? theme.colors.onSurfaceVariant
        : theme.colors.onSurface,
    },
  });
}
