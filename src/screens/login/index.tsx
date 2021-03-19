import React from 'react';
import { View, SafeAreaView, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StackScreenProps } from '@react-navigation/stack';

import styles from './styles';
import { theme } from '../../components';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import { AuthParamList } from '../../types';

const Login = ({ navigation }: StackScreenProps<AuthParamList, 'Login'>) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.welcomeContainer}>
        <Text style={styles.heading}>Welcome,</Text>
        <Text style={styles.subText}>sign in to continue</Text>
      </View>
      <View style={styles.formContainer}>
        <TextInput placeholder="Email" />
        <TextInput placeholder="Password" />
      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('ForgotPassword')}
        style={styles.forgotPasswordContainer}>
        <Text style={styles.forgotPassword}>Forgot password?</Text>
      </TouchableOpacity>
      <View style={{ flex: 1 }} />
      <Button
        label="Login"
        onPress={() => true}
        type="primary"
        width={theme.constants.screenWidth}
      />
      <View style={styles.registerContainer}>
        <Text style={styles.registerTest1}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.registerTest2}> Register Now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
