import { call, put, takeEvery } from 'redux-saga/effects';
import { request } from 'utils/request';
import {
  FETCH_MY_USER_REQUEST,
  fetchMyUser,
  SIGN_IN_REQUEST,
  SIGN_UP_REQUEST,
  SIGN_WITH_KAKAO_REQUEST,
  signIn,
  signUp,
  signWithKakao,
  UPDATE_MARKETING_CONSENT_REQUEST,
  updateMarketingConsentRequest,
  CONNECT_CONTRACT_SUBJECT_REQUEST, connectContractSubject,
} from './actions';
import {
  ConnectContractSubjectRequestPayload,
  MarketingConsentRequestPayload,
  SignRequestPayload,
  SignWithKakaoPayload,
} from 'store/user/types';
import { setAuthToken } from 'utils/tokenHandler';
import { setHttpHeader } from 'hooks/useAuthToken';


const signUpApi = (payload: SignRequestPayload) => request({
  url: '/users',
  method: 'POST',
  data: payload,
});

function* signUpAsync(action: ReturnType<typeof signUp.request>) {
  try {
    const response = yield call(signUpApi, action.payload);

    setHttpHeader('Authorization', `Token ${response.data.token}`);
    setAuthToken(response.data.token);

    yield put(fetchMyUser.success(response.data.user));
  } catch (e) {
    setHttpHeader('Authorization', null);
    setAuthToken('');

    yield put(fetchMyUser.failure());
  }
}


const signInApi = (payload: SignRequestPayload) => request({
  url: '/users/tokens',
  method: 'POST',
  data: payload,
});

function* signInAsync(action: ReturnType<typeof signIn.request>) {
  try {
    const response = yield call(signInApi, action.payload);

    setHttpHeader('Authorization', `Token ${response.data.token}`);
    setAuthToken(response.data.token);

    yield put(fetchMyUser.success(response.data.user));
  } catch (e) {
    setHttpHeader('Authorization', null);
    setAuthToken('');

    yield put(fetchMyUser.failure());
  }
}

const signWithKakaoApi = (payload: SignWithKakaoPayload) => request({
  url: '/users/kakao',
  method: 'POST',
  data: payload,
});


function* signWithKakaoAsync(action: ReturnType<typeof signWithKakao.request>) {
  try {
    const response = yield call(signWithKakaoApi, action.payload);

    setHttpHeader('Authorization', `Token ${response.data.token}`);
    setAuthToken(response.data.token);

    yield put(fetchMyUser.success(response.data.user));
  } catch (e) {
    setHttpHeader('Authorization', null);
    setAuthToken('');

    yield put(fetchMyUser.failure());
  }
}


const fetchMyUserApi = () => request({
  url: '/users/my-profile',
  method: 'GET',
});

function* fetchMyUserAsync() {
  try {
    const response = yield call(fetchMyUserApi);

    yield put(fetchMyUser.success(response.data));
  } catch (e) {
    yield put(fetchMyUser.failure());
  }
}

const updateMarketingConsentApi = (payload: MarketingConsentRequestPayload) => request({
  url: '/users/marketing-consent',
  method: 'PATCH',
  data: {
    marketingConsentAgreement: payload.marketingConsentAgreement,
  },
});

function* updateMarketingConsentAsync(action: ReturnType<typeof updateMarketingConsentRequest.request>) {
  try {
    const response = yield call(updateMarketingConsentApi, action.payload);

    yield put(updateMarketingConsentRequest.success(response.data));
  } catch (e) {
    yield put(updateMarketingConsentRequest.failure());
  }
}

const connectContractSubjectApi = (payload: ConnectContractSubjectRequestPayload) => request({
  url: '/users/contract-subject',
  method: 'PATCH',
  data: payload,
});

function* connectContractSubjectAsync(action: ReturnType<typeof connectContractSubject.request>) {
  try {
    const response = yield call(connectContractSubjectApi, action.payload);

    yield put(connectContractSubject.success(response.data));
  } catch (e) {
    yield put(connectContractSubject.failure());
  }
}

export function* watchUser() {
  yield takeEvery(SIGN_UP_REQUEST, signUpAsync);
  yield takeEvery(SIGN_IN_REQUEST, signInAsync);
  yield takeEvery(SIGN_WITH_KAKAO_REQUEST, signWithKakaoAsync);
  yield takeEvery(FETCH_MY_USER_REQUEST, fetchMyUserAsync);
  yield takeEvery(UPDATE_MARKETING_CONSENT_REQUEST, updateMarketingConsentAsync);
  yield takeEvery(CONNECT_CONTRACT_SUBJECT_REQUEST, connectContractSubjectAsync);
}
