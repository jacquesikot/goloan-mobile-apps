import { StyleSheet, Dimensions } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { theme } from '../../components';

const { width } = Dimensions.get('window');
export const SCREEN_HORIZONTAL_PADDING = 40;
export const SCREEN_WIDTH = width - SCREEN_HORIZONTAL_PADDING;
export const IMAGE_FORM_FACTOR = 1.84;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: SCREEN_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  imageContainer: {
    width: SCREEN_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp('7%'),
    height: SCREEN_WIDTH / IMAGE_FORM_FACTOR,
  },
  textContainer: {
    width: SCREEN_WIDTH,
  },
  topText: {
    fontFamily: 'ProductSans-Regular',
    fontSize: wp('7%'),
    color: theme.colors.primary,
    textAlign: 'center',
    marginBottom: hp('1%'),
  },
  bottomText: {
    fontFamily: 'ProductSans-Regular',
    fontSize: wp('5%'),
    color: theme.colors.subText,
    textAlign: 'center',
    marginBottom: hp('1%'),
  },
});

export default styles;
