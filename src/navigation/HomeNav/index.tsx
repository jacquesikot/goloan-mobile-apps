import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeNavParamList } from '../../types';
import { home, notifications, borrow, lend } from '../../screens';

const HomeStack = createStackNavigator<HomeNavParamList>();

const HomeNav = () => {
  return (
    <HomeStack.Navigator headerMode="none">
      <HomeStack.Screen name="Home" component={home} />
      <HomeStack.Screen name="Notifications" component={notifications} />
      <HomeStack.Screen name="Borrow" component={borrow} />
      <HomeStack.Screen name="Lend" component={lend} />
    </HomeStack.Navigator>
  );
};

export default HomeNav;
