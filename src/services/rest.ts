import qs from 'query-string';
import {store} from '../state/store';
import {getExpire, getToken} from '../state/reducers/authReducer';
import {UserParams, Task, TasksParams} from '../services/types';
import {
  loginUrl,
  signUpUrl,
  addTaskUrl,
  deleteTask,
  updateTaskUrl,
} from './urls';

export function isTokenExpired(): boolean {
  const expire = getExpire(store.getState());
  if (expire && expire < new Date().getTime() - 1000) {
    return false;
  }
  return true;
}

export const getHeaders = () => ({
  accept: 'application/json',
  'Content-Type': 'application/json',
});

export function getAuthHeader() {
  const headers = getHeaders();
  const token = getToken(store.getState());
  if (token) {
    return {...headers, Authorization: `Bearer ${token}`};
  }
  return headers;
}

export const query = async (url: string, parameters: any) => {
  try {
    const response = await fetch(url, parameters);
    if (response.ok) {
      return response;
    } else {
      const result = await response.json();
      return Promise.reject(result);
    }
  } catch (e) {
    return Promise.reject(e);
  }
};

export async function requestLogin(params: UserParams) {
  return query(loginUrl, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify(params),
  });
}

export function requestSignUp(params: UserParams) {
  return query(signUpUrl, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify(params),
  });
}

export function requestCreateTask(params: Task) {
  return query(addTaskUrl, {
    method: 'POST',
    headers: getAuthHeader(),
    body: JSON.stringify(params),
  });
}

export function requestTasks(params: TasksParams) {
  return query(addTaskUrl + '?' + qs.stringify(params), {
    method: 'GET',
    headers: getAuthHeader(),
  });
}

export function updateTasks({id, ...rest}: Task) {
  return query(updateTaskUrl(id), {
    method: 'PUT',
    headers: getAuthHeader(),
    body: JSON.stringify(rest),
  });
}

export function requestDeleteTask({id}: any) {
  return query(deleteTask(id), {
    method: 'DELETE',
    headers: getAuthHeader(),
  });
}
