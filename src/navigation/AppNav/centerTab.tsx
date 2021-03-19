import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';

import { theme } from '../../components';
import { ServicesIcon } from '../../svg';

const styles = StyleSheet.create({
  container: {
    width: 56,
    height: 56,
    borderRadius: 28,
    bottom: 30,
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const CenterTab = ({ onPress }: any) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <ServicesIcon color={theme.colors.white} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CenterTab;
