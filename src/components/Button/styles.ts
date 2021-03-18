import { StyleSheet } from 'react-native';

import { theme } from '../../components';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontFamily: 'ProductSans-Regular',
    color: theme.colors.white,
    fontSize: 18,
    letterSpacing: 0.6,
  },
});

export default styles;
