import {combineReducers} from 'redux';

// Imports: Reducers
import {AuthReducer, TasksReducer, SortReducer} from '../../services/types';

import authReducer from './authReducer';
import tasksReducer from './tasksReducer';
import sortReducer from './sortReducer';

export interface ReduxState {
  authReducer: AuthReducer;
  tasksReducer: TasksReducer;
  sortReducer: SortReducer;
}

const appReducer = combineReducers({
  authReducer,
  tasksReducer,
  sortReducer,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === 'WIPE_SESSION') {
    state = undefined;
  }
  return appReducer(state, action);
};

// Exports
export default rootReducer;
