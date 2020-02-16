import {Alert} from 'react-native';
import {takeEvery, call, put} from 'redux-saga/effects';

import {
  requestCreateTask,
  updateTasks,
  requestDeleteTask,
} from '../services/rest';
import {
  FETCH_CREATE_TASK,
  FETCH_UPDATE_TASK,
  FETCH_DELETE_TASK,
} from '../state/reducers/taskReducer';
import {FETCH_TASKS} from '../state/reducers/tasksReducer';
import {Task, AuthErrors} from '../services/types';

const showError = (error: AuthErrors) => {
  const title = error.message;
  const messages = Object.values(error.fields || {});
  Alert.alert(title, messages.join(', '));
};

interface Payload {
  type: string;
  payload: Task;
}

export function* createTask({payload}: Payload) {
  try {
    yield call(requestCreateTask, payload);
    yield put({type: FETCH_TASKS, reset: true});
  } catch (error) {
    showError(error);
  }
}

export function* updateTask({payload}: Payload) {
  try {
    yield call(updateTasks, payload);
    yield put({type: FETCH_TASKS, reset: true});
  } catch (error) {
    showError(error);
  }
}

export function* deleteTask({payload}: Payload) {
  try {
    yield call(requestDeleteTask, {id: payload.id});
    yield put({type: FETCH_TASKS, reset: true});
  } catch (error) {
    showError(error);
  }
}

export default function* taskWatcher() {
  yield takeEvery(FETCH_CREATE_TASK, createTask);
  yield takeEvery(FETCH_UPDATE_TASK, updateTask);
  yield takeEvery(FETCH_DELETE_TASK, deleteTask);
}
