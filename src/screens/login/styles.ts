import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { theme } from '../../components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: theme.colors.light,
  },
  welcomeContainer: {
    width: theme.constants.screenWidth,
    height: hp('10%'),
    marginTop: hp('10%'),
    justifyContent: 'space-between',
  },
  heading: {
    fontFamily: 'ProductSans-Black',
    fontSize: wp('10%'),
    color: theme.colors.primary,
  },
  subText: {
    fontFamily: 'ProductSans-Medium',
    fontSize: wp('6%'),
    color: theme.colors.subText,
  },
  formContainer: {
    marginTop: hp('5%'),
    height: hp('22%'),
    justifyContent: 'space-around',
  },
  forgotPasswordContainer: {
    width: theme.constants.screenWidth,
    flexDirection: 'row-reverse',
  },
  forgotPassword: {
    fontFamily: 'ProductSans-Medium',
    fontSize: wp('4%'),
    color: theme.colors.subText,
    marginTop: hp('3%'),
  },
  registerContainer: {
    flexDirection: 'row',
    paddingBottom: hp('8%'),
    paddingTop: hp('5%'),
  },
  registerTest1: {
    fontFamily: 'ProductSans-Medium',
    fontSize: wp('4%'),
    color: theme.colors.subText,
  },
  registerTest2: {
    fontFamily: 'ProductSans-Medium',
    fontSize: wp('4%'),
    color: theme.colors.primary,
  },
});

export default styles;
