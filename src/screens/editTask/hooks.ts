import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import titles from '../../services/titles';
import {Task} from '../../services/types';
import {
  FETCH_CREATE_TASK,
  FETCH_UPDATE_TASK,
} from '../../state/reducers/taskReducer';
import AppRoutes from '../../navigations/app-routes';

const useTask = (task: Task) => {
  const [activePriority, setActivePriority] = useState(
    task.priority || titles.editTask.buttonHigh,
  );
  const [title, setTitle] = useState(task.title || '');
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const goBack = () => navigation.goBack();
  const isAddTask = !task.id;

  const onPriorityPress = (priority: string) => {
    return () => setActivePriority(priority);
  };

  const handleTitle = (text: string) => setTitle(text);

  const saveTask = async () => {
    if (!title) {
      return;
    }
    const newTask = {
      title,
      priority: activePriority,
      dueBy: Math.round(new Date().getTime() / 1000),
    };
    if (!task.id) {
      await dispatch({
        type: FETCH_CREATE_TASK,
        payload: newTask,
      });
    } else {
      await dispatch({
        type: FETCH_UPDATE_TASK,
        payload: {id: task.id, ...newTask},
      });
    }
    navigation.navigate(AppRoutes.HOME);
  };

  return {
    goBack,
    saveTask,
    handleTitle,
    isAddTask,
    onPriorityPress,
    activePriority,
    title,
  };
};

export default useTask;
