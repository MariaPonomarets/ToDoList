import React, {ReactElement} from 'react';
import {View, TouchableOpacity, SafeAreaView} from 'react-native';
import {Text, Icon, Header, Input, Button} from 'react-native-elements';

import titles from '../../services/titles';
import {primaryInput, primaryWhite} from '../../components/typography';
import {flexOne, headerTitle} from '../../components/globalStyles';

import styles from './styles';
import useTask from './hooks';

interface Props {
  navigation: any;
  route: any;
}

export default ({route}: Props): ReactElement => {
  const task = route.params || {};
  const {
    goBack,
    saveTask,
    handleTitle,
    isAddTask,
    onPriorityPress,
    activePriority,
    title,
  } = useTask(task);

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
          text: isAddTask
            ? titles.editTask.addTaskTitle
            : titles.editTask.editTaskTitle,
          style: headerTitle,
        }}
      />
      <SafeAreaView style={flexOne}>
        <View style={styles.container}>
          <View>
            <View style={styles.section}>
              <Text style={styles.label}>{titles.editTask.titleLabel}</Text>
              <Input
                placeholder={'Write title'}
                value={title}
                multiline
                onChangeText={handleTitle}
                inputContainerStyle={styles.multilineInputContainer}
                inputStyle={styles.inputStyle}
              />
            </View>
            <View style={styles.section}>
              <Text style={styles.label}>{titles.editTask.titlePriority}</Text>
              <View style={styles.priorityButtonContainer}>
                <Button
                  title={titles.editTask.buttonHigh}
                  containerStyle={flexOne}
                  type={
                    titles.editTask.buttonHigh !== activePriority
                      ? 'outline'
                      : 'solid'
                  }
                  onPress={onPriorityPress(titles.editTask.buttonHigh)}
                />
                <View style={styles.separator} />
                <Button
                  title={titles.editTask.buttonMedium}
                  containerStyle={flexOne}
                  type={
                    titles.editTask.buttonMedium !== activePriority
                      ? 'outline'
                      : 'solid'
                  }
                  onPress={onPriorityPress(titles.editTask.buttonMedium)}
                />
                <View style={styles.separator} />
                <Button
                  title={titles.editTask.buttonLow}
                  containerStyle={flexOne}
                  type={
                    titles.editTask.buttonLow !== activePriority
                      ? 'outline'
                      : 'solid'
                  }
                  onPress={onPriorityPress(titles.editTask.buttonLow)}
                />
              </View>
            </View>
          </View>
          <Button
            disabled={!title}
            title={
              isAddTask ? titles.editTask.saveTask : titles.editTask.updateTask
            }
            onPress={saveTask}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};
