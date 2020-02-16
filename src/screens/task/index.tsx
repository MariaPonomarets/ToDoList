import React, {ReactElement} from 'react';
import {View, TouchableOpacity, Text, SafeAreaView} from 'react-native';
import {Icon, Header, Button} from 'react-native-elements';

import titles from '../../services/titles';
import {
  primaryInput,
  primaryPink,
  primaryWhite,
  secondaryButtonText,
} from '../../components/typography';
import AppRoutes from '../../navigations/app-routes';
import {flexOne, headerTitle} from '../../components/globalStyles';
import {useDispatch} from 'react-redux';
import {FETCH_DELETE_TASK} from '../../state/reducers/taskReducer';

import styles from './styles';

interface Props {
  id: number;
  title: string;
  priority: string;
  dueBy: number;
  navigation: any;
  route: any;
}

export default ({navigation, route}: Props): ReactElement => {
  const task = route.params;
  const dispatch = useDispatch();

  const goBack = () => navigation.goBack();
  const editTask = () => navigation.navigate(AppRoutes.EDIT_TASK, task);
  const isArrowUp = task.priority === 'High';
  const date = new Date(task.dueBy * 1000).toLocaleDateString();

  const deleteTask = async () => {
    await dispatch({
      type: FETCH_DELETE_TASK,
      payload: {
        id: task.id,
      },
    });
    navigation.navigate(AppRoutes.HOME);
  };

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
          text: titles.task.title,
          style: headerTitle,
        }}
        rightComponent={
          <TouchableOpacity onPress={editTask}>
            <Icon name="md-create" type="ionicon" color={primaryWhite} />
          </TouchableOpacity>
        }
      />
      <SafeAreaView style={flexOne}>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{task.title}</Text>
            <Text style={styles.dueBy}>Due to: {date}</Text>
          </View>
          <View style={styles.priorityContainer}>
            <Text style={styles.priorityTitle}>Priority</Text>
            <View style={styles.priorityRow}>
              <Icon
                name={isArrowUp ? 'ios-arrow-round-up' : 'ios-arrow-round-down'}
                color={isArrowUp ? primaryPink : secondaryButtonText}
                type="ionicon"
              />
              <Text
                style={[
                  styles.priorityValue,
                  {color: isArrowUp ? primaryPink : secondaryButtonText},
                ]}>
                {task.priority}
              </Text>
            </View>
          </View>
        </View>
        <Button
          containerStyle={styles.button}
          title={titles.editTask.deleteTask}
          onPress={deleteTask}
        />
      </SafeAreaView>
    </View>
  );
};
