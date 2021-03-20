import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    width: wp('70%'),
    height: hp('26%'),
    borderRadius: 30,
    padding: 30,
  },
  heading: {
    fontFamily: 'ProductSans-Regular',
    fontSize: wp('7%'),
  },
  lowerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lowerText1: {
    fontFamily: 'ProductSans-Regular',
    fontSize: wp('4%'),
  },
  lowerText2: {
    fontFamily: 'ProductSans-Regular',
    fontSize: wp('3.5%'),
    marginTop: hp('0.3%'),
  },
  iconContainer: {
    width: wp('7%'),
    height: wp('7%'),
    borderRadius: wp('3.5%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
