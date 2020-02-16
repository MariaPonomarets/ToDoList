import {ReduxState} from './index';

// selectors
export const getTasks = (state: ReduxState) =>
    state.tasksReducer.tasks?.list || [];
export const getTasksMeta = (state: ReduxState) =>
    state.tasksReducer.tasks?.meta;

// actions
export const FETCH_TASKS = 'FETCH_TASKS';
export const SET_TASKS_LIST = 'SET_TASKS_LIST';

const initialState = {
  tasks: null,
};

const tasksReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_TASKS_LIST: {
      return {
        ...state,
        tasks: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default tasksReducer;
