import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

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
    fontSize: wp('4%'),
    letterSpacing: 0.6,
  },
});

export default styles;
