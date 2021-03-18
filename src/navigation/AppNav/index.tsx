/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import styles from './styles';
import CenterTab from './centerTab';
import { theme } from '../../components';
import { AppNavParamList } from '../../types';
import { home, transactions, services, support, profile } from '../../screens';
import { HomeIcon, TransactionsIcon, SupportIcon, ProfileIcon } from '../../svg';

const AppStack = createBottomTabNavigator<AppNavParamList>();

const AppNav = () => {
  return (
    <AppStack.Navigator
      tabBarOptions={{
        keyboardHidesTabBar: true,
        activeTintColor: theme.colors.primary,
        inactiveTintColor: theme.colors.grey,
        showLabel: false,
        tabStyle: styles.tabBarItem,
        style: styles.tabBar,
      }}>
      <AppStack.Screen
        name="Home"
        component={home}
        options={{
          tabBarIcon: ({ color }) => {
            return <HomeIcon color={color} />;
          },
        }}
      />
      <AppStack.Screen
        name="Transactions"
        component={transactions}
        options={{
          tabBarIcon: ({ color }) => {
            return <TransactionsIcon color={color} />;
          },
        }}
      />
      <AppStack.Screen
        name="Services"
        component={services}
        options={({ navigation }) => ({
          tabBarButton: () => <CenterTab onPress={() => navigation.navigate('Services')} />,
        })}
      />
      <AppStack.Screen
        name="Support"
        component={support}
        options={{
          tabBarIcon: ({ color }) => {
            return <SupportIcon color={color} />;
          },
        }}
      />
      <AppStack.Screen
        name="Profile"
        component={profile}
        options={{
          tabBarIcon: ({ color }) => {
            return <ProfileIcon color={color} />;
          },
        }}
      />
    </AppStack.Navigator>
  );
};

export default AppNav;
