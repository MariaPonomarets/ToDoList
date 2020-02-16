export const URL = 'https://testapi.doitserver.in.ua/api';

export const loginUrl = `${URL}/auth`;
export const signUpUrl = `${URL}/users`;
export const tasksUrl = `${URL}/tasks`;
export const addTaskUrl = tasksUrl;
export const getTaskByIDUrl = (id?: number) => `${tasksUrl}/${id}`;
export const updateTaskUrl = getTaskByIDUrl;
export const deleteTask = getTaskByIDUrl;
