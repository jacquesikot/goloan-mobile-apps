import { StyleSheet } from 'react-native';

import { theme } from '../../components';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 64,
  },
  dot: {
    height: 4,
    borderRadius: 2,
    backgroundColor: theme.colors.primary,
    marginHorizontal: 4,
  },
});

export default styles;
