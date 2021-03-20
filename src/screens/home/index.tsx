import React from 'react';
import { View, SafeAreaView, Image, Text } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './styles';
import { theme } from '../../components';
import HomeCard from '../../components/HomeCard';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileImage} />
        <Image source={require('../../../assets/images/logoDark.png')} style={styles.logo} />
        <TouchableOpacity activeOpacity={0.7} onPress={() => true}>
          <Icon name="bell" size={30} color={theme.colors.primary} />
          <View style={styles.notificationDot} />
        </TouchableOpacity>
      </View>
      <View style={styles.walletContainer}>
        <Text style={styles.walletText1}>Wallet Balance</Text>
        <Text style={styles.walletText2}>N 9,545.00</Text>
      </View>
      <View style={styles.homCardContainer}>
        <HomeCard
          color="peach"
          heading="Borrow"
          iconName="plus"
          text1="Get a quick Loan"
          text2="20% interest"
          onPress={() => true}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
