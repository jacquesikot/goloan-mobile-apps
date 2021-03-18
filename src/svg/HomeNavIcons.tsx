import * as React from 'react';
import Svg, { SvgProps, Path, Defs } from 'react-native-svg';

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

function ProfileIcon(props: SvgProps) {
  return (
    <Svg
      width={props.width ? props.width : 24}
      height={props.height ? props.height : 26}
      viewBox="0 0 24 26"
      {...props}>
      <Path d="M0 0h24v24H0z" fill="none" />
      <Path
        d="M12.485 26h-1a3 3 0 01-2.88-2.19 1.002 1.002 0 111.93-.54 1 1 0 001 .73h1a1 1 0 001-.73l.46-1.67a2 2 0 011.11-1.29c.16-.07.32-.16.48-.25s.31-.19.46-.29a2 2 0 011.66-.32l1.69.43a1 1 0 001.11-.47l.48-.83a1 1 0 00-.15-1.2l-1.22-1.23a2 2 0 01-.56-1.58 7.164 7.164 0 000-1.13 2 2 0 01.56-1.57l1.22-1.24a1 1 0 00.15-1.2l-.48-.83a1 1 0 00-1.12-.47l-1.69.43a2 2 0 01-1.64-.31 7.009 7.009 0 00-1-.56 2 2 0 01-1.08-1.27l-.47-1.69a1 1 0 00-1-.73h-1a1 1 0 00-1 .73l-.46 1.66a2 2 0 01-1.11 1.29c-.16.08-.33.16-.48.25s-.31.19-.46.29a2 2 0 01-1.66.32l-1.69-.43a1 1 0 00-1.11.47l-.48.83a1 1 0 00.15 1.2l1.22 1.23a2 2 0 01.56 1.58 6.944 6.944 0 000 1.13 2 2 0 01-.56 1.57l-1.22 1.24a1 1 0 00-.15 1.2l.48.83a1 1 0 001.12.47 1.002 1.002 0 11.5 1.94 3 3 0 01-3.34-1.41l-.48-.83a3 3 0 01.46-3.6l1.22-1.24a8.152 8.152 0 010-1.46L1.835 12a3 3 0 01-.46-3.61l.48-.83a3 3 0 013.34-1.4l1.69.43a7.305 7.305 0 01.63-.41q.31-.18.64-.33l.48-1.67a3 3 0 012.89-2.2h1a3 3 0 012.88 2.19l.47 1.69a8.276 8.276 0 011.28.72l1.69-.42a3 3 0 013.34 1.41l.48.83a3 3 0 01-.46 3.6l-1.24 1.27a8.314 8.314 0 010 1.46l1.21 1.25a3 3 0 01.46 3.61l-.48.83a3 3 0 01-3.34 1.4l-1.69-.43a7.305 7.305 0 01-.63.41c-.21.12-.42.23-.64.33l-.48 1.67a3 3 0 01-2.89 2.2zm4.48-12a5 5 0 10-5 5 5 5 0 005-5zm-2 0a3 3 0 11-3-3 3 3 0 013 3z"
        fill={props.color ? props.color : 'rgba(16,10,57,.7)'}
      />
    </Svg>
  );
}

const ServicesIcon = (props: SvgProps) => {
  return (
    <Svg
      width={props.width ? props.width : 14.287}
      height={props.height ? props.height : 24.103}
      viewBox="0 0 14.287 24.103"
      {...props}>
      <Defs></Defs>
      <Path d="M.007 8.11v-.16-.583-.16a6.729 6.729 0 015.421-6.189 6.518 6.518 0 014.686.824.147.147 0 00.223-.029c.571-.583 1.148-1.16 1.719-1.742.081-.082.126-.1.22-.008q.967.991 1.948 1.966c.1.1.073.141-.008.222-.574.573-1.14 1.153-1.716 1.723a.171.171 0 00-.031.253 6.786 6.786 0 01-.862 8.032 6.519 6.519 0 01-4.739 2.156A6.7 6.7 0 01.156 9.142 7.252 7.252 0 01.007 8.11zM3.192 24.077c-.052 0-.1.014-.157.014H.163c-.12 0-.176-.025-.161-.157a3.019 3.019 0 00.005-.3 6.717 6.717 0 015.492-6.19 6.447 6.447 0 015.7 1.653 6.62 6.62 0 012.2 4.8c.007.16-.031.205-.2.2-.9-.009-1.8-.007-2.706 0-.123 0-.16-.031-.161-.16a3.571 3.571 0 00-7.077-.758 4.354 4.354 0 00-.063.898z" />
    </Svg>
  );
};

export { HomeIcon, TransactionsIcon, SupportIcon, ProfileIcon, ServicesIcon };
