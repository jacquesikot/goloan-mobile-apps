/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useFonts } from 'expo-font';

const [fontsLoaded] = useFonts({
  'ProductSans-Black': require('../../assets/fonts/ProductSans-Black.ttf'),
  'ProductSans-BlackItalic': require('../../assets/fonts/ProductSans-BlackItalic.ttf'),
  'ProductSans-Bold': require('../../assets/fonts/ProductSans-Bold.ttf'),
  'ProductSans-BoldItalic': require('../../assets/fonts/ProductSans-BoldItalic.ttf'),
  'ProductSans-Italic': require('../../assets/fonts/ProductSans-Italic.ttf'),
  'ProductSans-Light': require('../../assets/fonts/ProductSans-Light.ttf'),
  'ProductSans-LightItalic': require('../../assets/fonts/ProductSans-LightItalic.ttf'),
  'ProductSans-Medium': require('../../assets/fonts/ProductSans-Medium.ttf'),
  'ProductSans-MediumItalic': require('../../assets/fonts/ProductSans-MediumItalic.ttf'),
  'ProductSans-Regular': require('../../assets/fonts/ProductSans-Regular.ttf'),
  'ProductSans-Thin': require('../../assets/fonts/ProductSans-Thin.ttf'),
  'ProductSans-ThinItalic': require('../../assets/fonts/ProductSans-ThinItalic.ttf'),
});

export default fontsLoaded;
