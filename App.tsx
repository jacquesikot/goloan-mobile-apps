/* eslint-disable @typescript-eslint/no-unsafe-return */
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import Toast from 'react-native-toast-message';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';

import { cacheResourceAsync, fontsLoaded } from './src/utils';
import { AuthNav } from './src/navigation';

export default function App() {
  const [isReady, setIsReady] = useState<boolean>(false);

  return !isReady || !fontsLoaded ? (
    <AppLoading
      startAsync={cacheResourceAsync}
      onFinish={() => setIsReady(true)}
      onError={console.warn}
    />
  ) : (
    <NavigationContainer>
      <AuthNav />
      <StatusBar style="auto" />
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </NavigationContainer>
  );
}
