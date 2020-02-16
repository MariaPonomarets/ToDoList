import React, {ReactElement} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Text, Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import titles from '../../services/titles';

import {
  primaryPink,
  primaryDarkGrey,
  secondaryButtonText,
} from '../../components/typography';
import AppRoutes from '../../navigations/app-routes';

import styles from './styles';

interface Props {
  id: number;
  title: string;
  priority: string;
  dueBy: number;
}

export default ({id, title, priority, dueBy}: Props): ReactElement => {
  const navigation = useNavigation();
  const onPress = () =>
    navigation.navigate(AppRoutes.TASK, {id, title, priority, dueBy});
  const isArrowUp = priority === 'High';
  const date = new Date(dueBy * 1000).toLocaleDateString();

  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
            {title}
          </Text>
          <Text style={styles.time}>{`${titles.shortTask.dateTitle}: ${date}`}</Text>
          <View style={styles.priorityContainer}>
            <Icon
              name={isArrowUp ? 'ios-arrow-round-up' : 'ios-arrow-round-down'}
              color={isArrowUp ? primaryPink : secondaryButtonText}
              type="ionicon"
            />
            <Text
              style={[
                styles.priority,
                isArrowUp && {color: primaryPink, fontWeight: 'bold'},
              ]}>
              {priority}
            </Text>
          </View>
        </View>
        <Icon name="ios-arrow-forward" type="ionicon" color={primaryDarkGrey} />
      </View>
    </TouchableOpacity>
  );
};
