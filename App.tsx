/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import Toast from 'react-native-toast-message';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';

// import { cacheResourceAsync } from './src/utils';
import { AuthNav } from './src/navigation';
import { navigationRef } from './src/navigation';

const customFonts = {
  'ProductSans-Black': require('./assets/fonts/ProductSans-Black.ttf'),
  'ProductSans-BlackItalic': require('./assets/fonts/ProductSans-BlackItalic.ttf'),
  'ProductSans-Bold': require('./assets/fonts/ProductSans-Bold.ttf'),
  'ProductSans-BoldItalic': require('./assets/fonts/ProductSans-BoldItalic.ttf'),
  'ProductSans-Italic': require('./assets/fonts/ProductSans-Italic.ttf'),
  'ProductSans-Light': require('./assets/fonts/ProductSans-Light.ttf'),
  'ProductSans-LightItalic': require('./assets/fonts/ProductSans-LightItalic.ttf'),
  'ProductSans-Medium': require('./assets/fonts/ProductSans-Medium.ttf'),
  'ProductSans-MediumItalic': require('./assets/fonts/ProductSans-MediumItalic.ttf'),
  'ProductSans-Regular': require('./assets/fonts/ProductSans-Regular.ttf'),
  'ProductSans-Thin': require('./assets/fonts/ProductSans-Thin.ttf'),
  'ProductSans-ThinItalic': require('./assets/fonts/ProductSans-ThinItalic.ttf'),
};

export default function App() {
  const [isReady, setIsReady] = useState<boolean>(false);

  const _loadFontASync = async () => {
    try {
      await Font.loadAsync(customFonts);
      setIsReady(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    _loadFontASync();
  });

  return !isReady ? (
    <AppLoading />
  ) : (
    <NavigationContainer ref={navigationRef}>
      <AuthNav />
      <StatusBar style="auto" backgroundColor="#fffff" />
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </NavigationContainer>
  );
}
