import React, {ReactElement} from 'react';
import {View, TouchableOpacity, FlatList, SafeAreaView} from 'react-native';
import {Button, Header, Icon} from 'react-native-elements';

import {primaryInput, primaryWhite, sizeXL} from '../../components/typography';
import titles from '../../services/titles';
import {flexOne} from '../../components/globalStyles';
import Task from '../../components/Task';
import ActionSheet from '../../components/ActionSheet';

import styles from './styles';
import useTasks from './hooks';

export default (): ReactElement => {
  const {
    tasks,
    loading,
    onEndReached,
    onMomentumScrollBegin,
    onRefresh,
    goToAddTask,
    keyExtractor,
    goToNotificationScreen,
    actionSheetRef,
    showActionSheet,
  } = useTasks();

  const renderItem = ({item}: any) => <Task {...item} />;

  return (
    <View style={flexOne}>
      <Header
        backgroundColor={primaryInput}
        leftComponent={
          <TouchableOpacity onPress={goToNotificationScreen}>
            <Icon
              name="ios-notifications-outline"
              type="ionicon"
              color={primaryWhite}
            />
          </TouchableOpacity>
        }
        centerComponent={{
          text: titles.home.title,
          style: styles.headerTitle,
        }}
        rightComponent={
          <TouchableOpacity onPress={showActionSheet}>
            <Icon name="md-options" type="ionicon" color={primaryWhite} />
          </TouchableOpacity>
        }
      />
      <SafeAreaView style={flexOne}>
        <FlatList
          data={tasks}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          onEndReached={onEndReached}
          onMomentumScrollBegin={onMomentumScrollBegin}
          onRefresh={onRefresh}
          refreshing={loading}
          onEndReachedThreshold={0.5}
          showsVerticalScrollIndicator={false}
        />
        <Button
          onPress={goToAddTask}
          activeOpacity={0.8}
          containerStyle={styles.addButtonContainer}
          buttonStyle={styles.addButton}
          icon={{
            type: 'ionicon',
            color: primaryWhite,
            name: 'md-add',
            size: sizeXL,
          }}
        />
        <ActionSheet innerRef={actionSheetRef} />
      </SafeAreaView>
    </View>
  );
};
