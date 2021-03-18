import React from 'react';
import { View, Image } from 'react-native';

import styles, { SCREEN_WIDTH } from './styles';
import { Text } from '../../components';

const IMAGE_WIDTH = SCREEN_WIDTH - 40;

interface Props {
  image: number;
  topText: string;
  bottomText: string;
}

const Onboarding = ({ image, topText, bottomText }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={image}
          style={{
            width: IMAGE_WIDTH,
            height: IMAGE_WIDTH / 1.84,
          }}
        />
      </View>
      <View style={styles.textContainer}>
        <Text variant="button" style={styles.topText}>
          {topText}
        </Text>
        <Text style={styles.bottomText}>{bottomText}</Text>
      </View>
    </View>
  );
};

export default Onboarding;
