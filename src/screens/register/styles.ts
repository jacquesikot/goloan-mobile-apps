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
  backContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: theme.constants.screenWidth,
    marginTop: hp('2.5%'),
  },
  backText: {
    fontFamily: 'ProductSans-Bold',
    fontSize: wp('5%'),
    marginLeft: wp('2%'),
  },
  headingContainer: {
    flexDirection: 'row',
    width: theme.constants.screenWidth,
    marginVertical: hp('4%'),
  },
  heading: {
    fontFamily: 'ProductSans-Black',
    fontSize: wp('10%'),
    color: theme.colors.primary,
  },
  formContainer: {
    height: hp('55%'),
    justifyContent: 'space-between',
  },
  buttonContainer: {
    marginTop: hp('5.4%'),
  },
  termsOfUseContainer: {
    paddingBottom: hp('3%'),
    alignItems: 'center',
  },
  termsOfUseText1: {
    fontFamily: 'ProductSans-Medium',
    fontSize: wp('4%'),
    color: theme.colors.subText,
  },
  termsOfUseText2: {
    fontFamily: 'ProductSans-Bold',
    fontSize: wp('4%'),
    color: theme.colors.primary,
    textDecorationLine: 'underline',
  },
});

export default styles;
