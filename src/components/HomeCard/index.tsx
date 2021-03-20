import React from 'react';
import { View, Text } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './styles';
import { theme } from '../../components';

interface Props {
  color: 'peach' | 'blue';
  heading: string;
  text1: string;
  text2: string;
  iconName: 'plus' | 'minus';
  onPress: () => void;
}

const HomeCard = ({ color, heading, iconName, text1, text2, onPress }: Props) => {
  const bgColor = color === 'peach' ? theme.colors.peach : theme.colors.primary;
  const colorValue = color === 'peach' ? theme.colors.primary : theme.colors.white;
  const iconBgColor = color === 'peach' ? theme.colors.primary : theme.colors.white;
  const iconColor = color === 'peach' ? theme.colors.white : theme.colors.primary;
  const text2Color = color === 'peach' ? theme.colors.subText : theme.colors.white;

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <Text style={[styles.heading, { color: colorValue }]}>{heading}</Text>
      <View style={{ flex: 1 }} />
      <View style={styles.lowerContainer}>
        <View>
          <Text style={[styles.lowerText1, { color: iconBgColor }]}>{text1}</Text>
          <Text style={[styles.lowerText2, { color: text2Color }]}>{text2}</Text>
        </View>
        <View style={{ flex: 1 }} />
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={onPress}
          style={[styles.iconContainer, { backgroundColor: iconBgColor }]}>
          <Icon name={iconName} size={22} color={iconColor} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeCard;
