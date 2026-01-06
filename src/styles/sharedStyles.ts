import { StyleSheet, Platform } from 'react-native';
import { s } from 'react-native-size-matters';

export const sharedPaddingHorizontal = s(12);

export const commonStyles = StyleSheet.create({
  shadow: {
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
});
