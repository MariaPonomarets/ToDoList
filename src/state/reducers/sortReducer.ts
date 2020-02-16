import {ReduxState} from './index';
import {SortReducer} from '../../services/types';

// selectors
export const getSort = (state: ReduxState) => state.sortReducer.sort;

// actions
export const SET_ACTIVE_SORT = 'SET_ACTIVE_SORT';

export const setSort = (sort: SortReducer) => ({
  type: SET_ACTIVE_SORT,
  payload: sort,
});

const initialState = {
  sort: 'priority asc',
};

const sortReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_ACTIVE_SORT: {
      return {
        ...state,
        sort: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default sortReducer;
