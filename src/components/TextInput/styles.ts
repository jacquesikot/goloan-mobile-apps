import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import { theme } from '../../components';

export const TEXT_INPUT_WIDTH = theme.constants.screenWidth;
export const TEXT_INPUT_HEIGHT = 56;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: theme.colors.white,
    paddingLeft: wp('5%'),
  },
  input: {
    width: TEXT_INPUT_WIDTH,
    height: TEXT_INPUT_HEIGHT,
    color: theme.colors.subText,
  },
});

export default styles;
