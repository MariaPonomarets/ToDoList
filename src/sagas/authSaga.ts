import {Alert} from 'react-native';
import {takeEvery, call, put} from 'redux-saga/effects';

import {requestSignUp, requestLogin} from '../services/rest';
import {FETCH_LOGIN, FETCH_SIGN_UP} from '../state/reducers/authReducer';
import {AuthErrors, AuthParams} from '../services/types';
const calculateExpireTime = () => new Date().getTime() + 86400000;

const showError = (error: AuthErrors) => {
  const title = error.message;
  const messages = Object.values(error.fields || {});
  Alert.alert(title, messages.join(', '));
};

export function* authWorker(result: any) {
  const data = yield result.text();
  const token = JSON.parse(data).token;

  yield put({
    type: 'SET_TOKEN',
    payload: {
      token,
      expire: calculateExpireTime(),
    },
  });
}

export function* login({payload}: AuthParams) {
  try {
    const result = yield call(requestLogin, payload);
    yield call(authWorker, result);
  } catch (error) {
    showError(error);
  }
}

export function* signUp({payload}: AuthParams) {
  try {
    const result = yield call(requestSignUp, payload);
    yield call(authWorker, result);
  } catch (error) {
    showError(error);
  }
}

export default function* authWatcher() {
  yield takeEvery(FETCH_LOGIN, login);
  yield takeEvery(FETCH_SIGN_UP, signUp);
}
