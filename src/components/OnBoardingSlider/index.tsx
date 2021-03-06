import React from 'react';
import { View, Image } from 'react-native';

import styles, { SCREEN_WIDTH, IMAGE_FORM_FACTOR, SCREEN_HORIZONTAL_PADDING } from './styles';
import { Text } from '../../components';

const IMAGE_WIDTH = SCREEN_WIDTH - SCREEN_HORIZONTAL_PADDING;

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
            height: IMAGE_WIDTH / IMAGE_FORM_FACTOR,
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
