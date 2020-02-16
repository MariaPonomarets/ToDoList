import React, {ReactElement} from 'react';
import {
  SafeAreaView,
  Platform,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {Input, Button} from 'react-native-elements';

import {primaryError, primaryInput} from '../../components/typography';
import {flexOne, rowCenter} from '../../components/globalStyles';
import {logo} from '../../../assets';
import titles from '../../services/titles';

import useForm from './hooks';
import styles from './styles';

export default (): ReactElement => {
  const {
    emailRef,
    passwordRef,
    email,
    loading,
    handleSetEmail,
    password,
    handleSetPassword,
    isSignUp,
    handleSetSignUp,
    onBlurEmail,
    submitForm,
    errors,
    securityEntry,
    constHandleSetSecurityTextEntry,
    onBlurPassword,
    enableSubmit,
  } = useForm();

  return (
    <SafeAreaView style={flexOne}>
      <KeyboardAvoidingView
        style={flexOne}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <Image source={logo} style={styles.logo} />
            <Text style={styles.title}>
              {isSignUp ? titles.auth.titleRegister : titles.auth.titleLogin}
            </Text>
            <Input
              ref={emailRef}
              inputContainerStyle={
                errors.emailError
                  ? styles.inputStyleError
                  : styles.inputContainer
              }
              onSubmitEditing={onBlurEmail}
              value={email}
              errorStyle={styles.errorInput}
              onChangeText={handleSetEmail}
              keyboardType={'email-address'}
              errorMessage={errors.emailError}
              autoCapitalize={'none'}
              returnKeyType={'next'}
              placeholder={titles.auth.email}
              inputStyle={
                errors.emailError ? styles.errorInput : styles.inputStyle
              }
              leftIcon={{
                type: 'ionicon',
                name: 'md-mail',
                color: errors.emailError ? primaryError : primaryInput,
                size: 22,
              }}
            />
            <Input
              ref={passwordRef}
              value={password}
              placeholder={titles.auth.password}
              inputContainerStyle={
                errors.passwordError
                  ? styles.inputStyleError
                  : styles.inputContainer
              }
              onSubmitEditing={onBlurPassword}
              errorStyle={styles.errorInput}
              onChangeText={handleSetPassword}
              errorMessage={errors.passwordError}
              inputStyle={
                errors.passwordError ? styles.errorInput : styles.inputStyle
              }
              leftIcon={{
                type: 'ionicon',
                name: 'ios-lock',
                color: errors.passwordError ? primaryError : primaryInput,
                size: 22,
              }}
              rightIcon={{
                type: 'ionicon',
                name: securityEntry ? 'ios-eye' : 'ios-eye-off',
                color: errors.passwordError ? primaryError : primaryInput,
                size: 22,
                onPress: constHandleSetSecurityTextEntry,
              }}
              rightIconContainerStyle={styles.passwordIcon}
              secureTextEntry={!!securityEntry}
              autoCapitalize={'none'}
              returnKeyType={'go'}
            />
            <View style={rowCenter}>
              <Text style={styles.subtitle}>
                {isSignUp
                  ? titles.auth.subtitleRegister
                  : titles.auth.subtitleLogin}
              </Text>
              <Button
                type="clear"
                title={
                  !isSignUp
                    ? titles.auth.toggleButtonRegister
                    : titles.auth.toggleButtonLogin
                }
                onPress={handleSetSignUp}
                titleStyle={styles.subtitleButton}
              />
            </View>
            <Button
              title={
                isSignUp
                  ? titles.auth.toggleButtonRegister
                  : titles.auth.toggleButtonLogin
              }
              raised
              buttonStyle={styles.submitButton}
              containerStyle={styles.buttonContainer}
              onPress={submitForm}
              loading={loading}
              disabled={!enableSubmit}
            />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
