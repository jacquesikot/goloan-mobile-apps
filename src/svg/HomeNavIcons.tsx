import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

import { theme } from '../components';

const HomeIcon = (props: SvgProps) => {
  return (
    <Svg
      width={props.width ? props.width : 22.145}
      height={props.height ? props.height : 20.563}
      viewBox="0 0 22.145 20.563">
      <Path
        d="M1.876 9.795h-.8a1.077 1.077 0 01-.689-1.906L9.002.749a3.231 3.231 0 014.135 0l8.615 7.14a1.077 1.077 0 01-.689 1.906h-.8a.538.538 0 00-.538.538v7a3.231 3.231 0 01-3.231 3.231h-1.077a2.154 2.154 0 01-2.154-2.154v-3.231a2.154 2.154 0 00-2.154-2.154 2.154 2.154 0 00-2.154 2.154v3.231a2.154 2.154 0 01-2.154 2.154H5.724a3.231 3.231 0 01-3.231-3.231v-7a.538.538 0 00-.625-.538z"
        fill={props.color ? props.color : theme.colors.primary}
      />
    </Svg>
  );
};

const TransactionsIcon = (props: SvgProps) => {
  return (
    <Svg
      width={props.width ? props.width : 23.011}
      height={props.height ? props.height : 23}
      viewBox="0 0 23.011 23">
      <Path
        d="M11.011 23a11 11 0 01-2.2-21.78 1.02 1.02 0 01.4 2 9 9 0 1010.62 10.62 1.02 1.02 0 112 .4A11 11 0 0111.011 23zm12-13a10 10 0 00-10-10 1 1 0 00-1 1v9a1 1 0 002 0V2.06A8 8 0 0120.951 9h-3.94a1 1 0 000 2h5a1 1 0 001-1z"
        fill={props.color ? props.color : 'rgba(16,10,57,.7)'}
      />
    </Svg>
  );
};

const SupportIcon = (props: SvgProps) => {
  return (
    <Svg
      width={props.width ? props.width : 24.004}
      height={props.height ? props.height : 24}
      viewBox="0 0 24.004 24"
      {...props}>
      <Path d="M.002 0h24v24h-24z" fill="none" />
      <Path
        d="M2.002 20.34a3 3 0 01-2-2.94v-3.14a2.92 2.92 0 011.53-2.54v-.27a10.5 10.5 0 0120.47-3.35 1.001 1.001 0 01-1.88.69 8.43 8.43 0 00-4-4.81 8.57 8.57 0 00-12.59 7.53v1a1 1 0 01-1 1c-.17 0-.5.39-.5.76v3.24a1 1 0 002 0v-2.24a1 1 0 012 0v2.24a3 3 0 01-4.03 2.83zm19.88.22a3 3 0 002.12-2.86v-2.9a3 3 0 10-6-.09v2a1 1 0 002 0v-2a1 1 0 112 0v3a1 1 0 01-1 1 1 1 0 00-1 1.06 2 2 0 01-2 1.94h-4V21a1 1 0 00-2 0v1.7a1 1 0 001 1h5a4 4 0 003.91-3.14z"
        fill={props.color ? props.color : 'rgba(16,10,57,.7)'}
      />
    </Svg>
  );
};

const ProfileIcon = (props: SvgProps) => {
  return (
    <Svg
      width={props.width ? props.width : 24.004}
      height={props.height ? props.height : 24}
      viewBox="0 0 24.004 24"
      {...props}>
      <Path d="M.002 0h24v24h-24z" fill="none" />
      <Path
        d="M2.002 20.34a3 3 0 01-2-2.94v-3.14a2.92 2.92 0 011.53-2.54v-.27a10.5 10.5 0 0120.47-3.35 1.001 1.001 0 01-1.88.69 8.43 8.43 0 00-4-4.81 8.57 8.57 0 00-12.59 7.53v1a1 1 0 01-1 1c-.17 0-.5.39-.5.76v3.24a1 1 0 002 0v-2.24a1 1 0 012 0v2.24a3 3 0 01-4.03 2.83zm19.88.22a3 3 0 002.12-2.86v-2.9a3 3 0 10-6-.09v2a1 1 0 002 0v-2a1 1 0 112 0v3a1 1 0 01-1 1 1 1 0 00-1 1.06 2 2 0 01-2 1.94h-4V21a1 1 0 00-2 0v1.7a1 1 0 001 1h5a4 4 0 003.91-3.14z"
        fill={props.color ? props.color : 'rgba(16,10,57,.7)'}
      />
    </Svg>
  );
};

export { HomeIcon, TransactionsIcon, SupportIcon, ProfileIcon };
