import React from 'react';
import { View, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Feather as Icon } from '@expo/vector-icons';

import styles from './styles';
import { theme } from '../../components';
import { Text } from '../../components';
import { AuthParamList } from '../../types';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';

const Register = ({ navigation }: StackScreenProps<AuthParamList, 'Register'>) => {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'position' : 'height'}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.goBack()}
          style={styles.backContainer}>
          <Icon name="chevron-left" size={20} color={theme.colors.primary} />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>Create Account</Text>
        </View>
        <View style={styles.formContainer}>
          <TextInput placeholder="First Name" />
          <TextInput placeholder="Last Name" />
          <TextInput placeholder="Email" />
          <TextInput placeholder="Phone Number" />
          <TextInput placeholder="Password" />
          <TextInput placeholder="Confirm Password" />
        </View>
      </KeyboardAvoidingView>
      <View style={styles.buttonContainer}>
        <Button
          label="Complete Registeration"
          onPress={() => true}
          type="primary"
          width={theme.constants.screenWidth}
        />
      </View>
      <View style={{ flex: 1 }} />
      <View style={styles.termsOfUseContainer}>
        <Text style={styles.termsOfUseText1}>By creating an account you agree with our</Text>
        <TouchableOpacity onPress={() => true}>
          <Text style={styles.termsOfUseText2}>Terms of Use and Privacy Policy</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Register;
