import {ReduxState} from './index';

// selectors
export const getExpire = (state: ReduxState) =>
  state.authReducer.tokenData?.expire;
export const getToken = (state: ReduxState) => state.authReducer.tokenData?.token;

// actions
export const SET_TOKEN = 'SET_TOKEN';
export const FETCH_LOGIN = 'FETCH_LOGIN';
export const FETCH_SIGN_UP = 'FETCH_SIGN_UP';
export const WIPE_TOKEN = 'WIPE_TOKEN';

const initialState = {
  tokenData: null,
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_TOKEN: {
      return {
        ...state,
        tokenData: action.payload,
      };
    }
    case WIPE_TOKEN: {
      return {
        ...state,
        tokenData: null,
      };
    }
    default: {
      return state;
    }
  }
};

export default authReducer;
