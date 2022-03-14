import { createAsyncAction } from 'typesafe-actions';
import {
  ConnectContractSubjectRequestPayload, ContractSubjectType,
  MarketingConsentRequestPayload,
  SignRequestPayload,
  SignWithKakaoPayload,
  UserType,
} from './types';


export const SIGN_UP_REQUEST = 'user/SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'user/SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'user/SIGN_UP_FAILURE';

export const SIGN_IN_REQUEST = 'user/SIGN_IN_REQUEST';
export const SIGN_IN_SUCCESS = 'user/SIGN_IN_SUCCESS';
export const SIGN_IN_FAILURE = 'user/SIGN_IN_FAILURE';

export const SIGN_WITH_KAKAO_REQUEST = 'user/SIGN_WITH_KAKAO_REQUEST';
export const SIGN_WITH_KAKAO_SUCCESS = 'user/SIGN_WITH_KAKAO_SUCCESS';
export const SIGN_WITH_KAKAO_FAILURE = 'user/SIGN_WITH_KAKAO_FAILURE';

export const FETCH_MY_USER_REQUEST = 'user/FETCH_MY_USER_REQUEST';
export const FETCH_MY_USER_SUCCESS = 'user/FETCH_MY_USER_SUCCESS';
export const FETCH_MY_USER_FAILURE = 'user/FETCH_MY_USER_FAILURE';

export const UPDATE_MARKETING_CONSENT_REQUEST = 'user/UPDATE_MARKETING_CONSENT_REQUEST';
export const UPDATE_MARKETING_CONSENT_SUCCESS = 'user/UPDATE_MARKETING_CONSENT_SUCCESS';
export const UPDATE_MARKETING_CONSENT_FAILURE = 'user/UPDATE_MARKETING_CONSENT_FAILURE';

export const CONNECT_CONTRACT_SUBJECT_REQUEST = 'user/CONNECT_CONTRACT_SUBJECT_REQUEST';
export const CONNECT_CONTRACT_SUBJECT_SUCCESS = 'user/CONNECT_CONTRACT_SUBJECT_SUCCESS';
export const CONNECT_CONTRACT_SUBJECT_FAILURE = 'user/CONNECT_CONTRACT_SUBJECT_FAILURE';

export const signUp = createAsyncAction(
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
)<SignRequestPayload, UserType, void>();

export const signIn = createAsyncAction(
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
)<SignRequestPayload, UserType, void>();

export const signWithKakao = createAsyncAction(
  SIGN_WITH_KAKAO_REQUEST,
  SIGN_WITH_KAKAO_SUCCESS,
  SIGN_WITH_KAKAO_FAILURE,
)<SignWithKakaoPayload, UserType, void>();

export const fetchMyUser = createAsyncAction(
  FETCH_MY_USER_REQUEST,
  FETCH_MY_USER_SUCCESS,
  FETCH_MY_USER_FAILURE,
)<void, UserType, void>();

export const updateMarketingConsentRequest = createAsyncAction(
  UPDATE_MARKETING_CONSENT_REQUEST,
  UPDATE_MARKETING_CONSENT_SUCCESS,
  UPDATE_MARKETING_CONSENT_FAILURE
)<MarketingConsentRequestPayload, UserType, void>();


export const connectContractSubject = createAsyncAction(
  CONNECT_CONTRACT_SUBJECT_REQUEST,
  CONNECT_CONTRACT_SUBJECT_SUCCESS,
  CONNECT_CONTRACT_SUBJECT_FAILURE
)<ConnectContractSubjectRequestPayload, ContractSubjectType, void>();
