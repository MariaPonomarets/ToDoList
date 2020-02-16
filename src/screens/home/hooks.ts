import {useEffect, useState, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/core';

import {ReduxState} from '../../state/reducers';
import {FETCH_TASKS, getTasks} from '../../state/reducers/tasksReducer';
import AppRoutes from '../../navigations/app-routes';

let onEndReachedCalledDuringMomentum = false;

const useTasks = () => {
  const [loading, setLoading] = useState(false);
  const tasks = useSelector((state: ReduxState) => getTasks(state)) || [];
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const actionSheetRef=useRef(null)

  useEffect(() => {
    fetchList(true);
  }, []);

  const showActionSheet = () => actionSheetRef?.current.show()

  const fetchList = async (reset?: boolean) => {
    setLoading(true);
    try {
      await dispatch({
        type: FETCH_TASKS,
        reset,
      });
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
    onEndReachedCalledDuringMomentum=true
  };

  const onEndReached = () => {
    if (!onEndReachedCalledDuringMomentum) {
      fetchList();
    }
  };

  const onMomentumScrollBegin = () => {
    onEndReachedCalledDuringMomentum = false;
  };

  const onRefresh = () => {
    fetchList(true);
  };

  const goToAddTask = () => navigation.navigate(AppRoutes.EDIT_TASK);

  const keyExtractor = item => `${item.id}`;

  const goToNotificationScreen = () => {
    navigation.navigate(AppRoutes.NOTIFICATIONS)
  };

  return {
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
    fetchList,
  };
};

export default useTasks;
