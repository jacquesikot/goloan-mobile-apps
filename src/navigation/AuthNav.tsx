import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { AuthParamList } from '../types';
import { login, register, forgotPassword, onBoarding } from '../screens';

const AuthStack = createStackNavigator<AuthParamList>();

const AuthNav = () => {
  return (
    <AuthStack.Navigator headerMode="none">
      <AuthStack.Screen name="OnBoarding" component={onBoarding} />
      <AuthStack.Screen name="Login" component={login} />
      <AuthStack.Screen name="Register" component={register} />
      <AuthStack.Screen name="ForgotPassword" component={forgotPassword} />
    </AuthStack.Navigator>
  );
};

export default AuthNav;
