import {takeEvery, call, put, select} from 'redux-saga/effects';

import {requestTasks} from '../services/rest';
import {
  FETCH_TASKS,
  getTasks,
  getTasksMeta,
  SET_TASKS_LIST,
} from '../state/reducers/tasksReducer';
import {getSort} from '../state/reducers/sortReducer';

interface Params {
  reset: boolean;
}
export function* fetchTasks({reset}: Params) {
  try {
    const sort = yield select(getSort);
    const meta = yield select(getTasksMeta);
    const tasks = yield select(getTasks);

    if (!reset && meta && meta.current + 1 <= meta.count % meta.limit) {
      return;
    }
    const page = reset ? 1 : meta.current + 1;
    const result = yield call(requestTasks, {
      page,
      sort,
    });
    const data = yield result.json();
    yield put({
      type: SET_TASKS_LIST,
      payload: {
        list: reset ? data.tasks : [...tasks, ...data.tasks],
        meta: data.meta,
      },
    });
  } catch (error) {
    console.log('error', error);
  }
}

export default function* tasksWatcher() {
  yield takeEvery(FETCH_TASKS, fetchTasks);
}
