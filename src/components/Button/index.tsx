import React from 'react';
import { TouchableOpacity } from 'react-native';

import styles from './styles';
import { Text, theme } from '../../components';

interface Props {
  width?: number;
  height?: number;
  label: string;
  onPress: () => void;
  type: 'primary' | 'secondary';
}

const Button = ({ width, height, label, onPress, type }: Props) => {
  const backgroundColorValue = type === 'primary' ? theme.colors.primary : theme.colors.secondary;
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      style={[
        styles.container,
        {
          width: width ? width : 125,
          height: height ? height : 56,
          backgroundColor: backgroundColorValue,
        },
      ]}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
