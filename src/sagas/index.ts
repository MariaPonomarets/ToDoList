import {all} from 'redux-saga/effects';

// Imports: Redux Sagas
import auth from './authSaga';
import task from './taskSaga';
import tasks from './tasksSaga';

// Redux Saga: Root Saga
export function* rootSaga() {
  yield all([auth(), task(), tasks()]);
}
