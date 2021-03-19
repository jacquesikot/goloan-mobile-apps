/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useState } from 'react';
import { View, Animated, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StackScreenProps } from '@react-navigation/stack';

import styles from './styles';
import Button from '../../components/Button';
import OnBoardingSlider from '../../components/OnBoardingSlider';
import Paginator from '../../components/Paginator';
import data from './data';
import { AuthParamList } from '../../types';

const Onboarding = ({ navigation }: StackScreenProps<AuthParamList, 'OnBoarding'>) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const viewableItemsChanged = useRef(({ viewableItems }: any) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const slidesRef = useRef(null);

  return (
    <View style={styles.page}>
      <View style={styles.sliderContainer}>
        <Animated.FlatList
          data={data}
          renderItem={({ item }: any) => {
            return (
              <OnBoardingSlider
                image={item.image}
                topText={item.topText}
                bottomText={item.bottomText}
              />
            );
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={(item: any) => item.id.toString()}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
            useNativeDriver: false,
          })}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
      </View>
      <View style={styles.dotContainer}>
        <Paginator data={data} scrollX={scrollX} />
      </View>
      <View style={styles.buttonContainer}>
        {currentIndex > 0 ? (
          <TouchableOpacity
            onPress={() => {
              if (slidesRef.current && currentIndex > 0) {
                slidesRef.current.scrollToIndex({ index: currentIndex - 1 });
              }
            }}>
            <Text style={styles.prevText}>Prev</Text>
          </TouchableOpacity>
        ) : (
          <Text />
        )}
        <Button
          type="primary"
          label={currentIndex === 2 ? 'Get Started' : 'Next'}
          onPress={() => {
            if (slidesRef.current && currentIndex < 2) {
              slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
            } else {
              navigation.navigate('Login');
            }
          }}
        />
      </View>
    </View>
  );
};

export default Onboarding;
