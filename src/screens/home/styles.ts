import { StyleSheet, Dimensions } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const { width } = Dimensions.get('window');

import { theme } from '../../components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    alignItems: 'center',
  },
  header: {
    width: theme.constants.screenWidth,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    height: wp('11%'),
    marginTop: hp('4%'),
  },
  profileImage: {
    width: wp('10%'),
    height: wp('10%'),
    borderRadius: wp('5%'),
    backgroundColor: theme.colors.red,
  },
  logo: {
    width: wp('22%'),
    height: hp('3.5%'),
  },
  notificationDot: {
    width: wp('2.5%'),
    height: wp('2.5%'),
    borderRadius: wp('1.25%'),
    backgroundColor: theme.colors.red,
    position: 'absolute',
    left: wp('4%'),
  },
  walletContainer: {
    width: theme.constants.screenWidth,
    justifyContent: 'flex-start',
    marginTop: hp('4%'),
  },
  walletText1: {
    fontFamily: 'ProductSans-Regular',
    fontSize: wp('3.7%'),
    color: theme.colors.primary,
  },
  walletText2: {
    fontFamily: 'ProductSans-Regular',
    fontSize: wp('6.5%'),
    color: theme.colors.primary,
    marginTop: hp('1%'),
  },
  homCardContainer: {
    marginTop: hp('4%'),
    width,
    paddingLeft: theme.constants.screenPadding / 2,
  },
});

export default styles;
