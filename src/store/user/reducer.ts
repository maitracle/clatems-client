import { createReducer } from 'typesafe-actions';
import { UserActions, UserStateType } from './types';
import {
  CONNECT_CONTRACT_SUBJECT_SUCCESS,
  FETCH_MY_USER_FAILURE,
  FETCH_MY_USER_SUCCESS,
  UPDATE_MARKETING_CONSENT_SUCCESS,
} from './actions';


const initialState: UserStateType = {
  myUser: {
    id: 0,
    email: '',
    contractSubject: null,
    createdAt: '',
    updatedAt: '',
    agreedWithTermsOfServiceAt: null,
    agreedWithPrivacyPolicyAt: null,
    agreedWithMarketingConsentAt: null,
  },
  authentication: {
    isLoggedIn: null,
  },
};

const userReducer = createReducer<UserStateType, UserActions>(initialState, {
  [FETCH_MY_USER_SUCCESS]: (state, action) => {
    return ({
      ...state,
      myUser: action.payload,
      authentication: {
        ...state.authentication,
        isLoggedIn: true,
      },
    });
  },
  [FETCH_MY_USER_FAILURE]: (state) => {
    return {
      ...state,
      myUser: initialState.myUser,
      authentication: {
        ...state.authentication,
        isLoggedIn: false,
      },
    };
  },
  [UPDATE_MARKETING_CONSENT_SUCCESS]: (state, action) => {
    return {
      ...state,
      myUser: action.payload,
    };
  },
  [CONNECT_CONTRACT_SUBJECT_SUCCESS]: (state, action) => {
    return {
      ...state,
      myUser: {
        ...state.myUser,
        contractSubject: action.payload,
      },
    };
  },
});

export default userReducer;
