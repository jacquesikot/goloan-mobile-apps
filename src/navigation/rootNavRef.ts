/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NavigationContainerRef } from '@react-navigation/core';
import { createRef } from 'react';

export const navigationRef = createRef<NavigationContainerRef>();

const navigate = (name: any, params: any) => navigationRef.current?.navigate(name, params);

export default {
  navigate,
};
