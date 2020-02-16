import React, {ReactElement} from 'react';
import {View, TouchableOpacity, SafeAreaView, Text} from 'react-native';
import {Header, Icon, Button} from 'react-native-elements';
import {useDispatch} from 'react-redux';

import {primaryInput, primaryWhite} from '../../components/typography';
import titles from '../../services/titles';
import {flexOne, headerTitle} from '../../components/globalStyles';

import styles from './styles';

interface Props {
  navigation: any;
  route: any;
}

export default ({navigation}: Props): ReactElement => {
  const dispatch = useDispatch();

  const goBack = () => navigation.goBack();
  const logout = () => dispatch({type: 'WIPE_SESSION'});

  return (
    <View style={flexOne}>
      <Header
        backgroundColor={primaryInput}
        leftComponent={
          <TouchableOpacity onPress={goBack}>
            <Icon name="ios-arrow-back" type="ionicon" color={primaryWhite} />
          </TouchableOpacity>
        }
        centerComponent={{
          text: titles.home.title,
          style: headerTitle,
        }}
      />
      <SafeAreaView style={flexOne}>
        <Text style={styles.title}>
          Sorry :(((((( I didn't have enough time for this task
        </Text>
        <Button style={styles.button} title={'Logout?'} onPress={logout} />
      </SafeAreaView>
    </View>
  );
};
