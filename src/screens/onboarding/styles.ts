import { StyleSheet, Dimensions } from 'react-native';
import {
  // widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { theme } from '../../components';

const { width } = Dimensions.get('window');
export const SCREEN_WIDTH = width - 40;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.white,
  },
  sliderContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH,
    height: hp('55%'),
  },
  dotContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    width: SCREEN_WIDTH,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  prevText: {
    fontFamily: 'ProductSans-Regular',
    fontSize: 20,
    color: theme.colors.subText,
  },
});

export default styles;
