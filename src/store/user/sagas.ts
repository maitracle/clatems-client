import { call, put, takeEvery } from 'redux-saga/effects'
import { request } from 'utils/request'
import { FETCH_MY_USER_REQUEST, fetchMyUser, SIGN_IN_REQUEST, SIGN_UP_REQUEST, signIn, signUp } from './actions'
import { SignRequestPayload } from 'store/user/types'
import { setAuthToken } from 'utils/tokenHandler'
import { setHttpHeader } from 'hooks/useAuthToken'


const signUpApi = (payload: SignRequestPayload) => request({
  url: '/security/signup',
  method: 'POST',
  data: payload,
})

function* signUpAsync(action: ReturnType<typeof signUp.request>) {
  try {
    const response = yield call(signUpApi, action.payload)

    setHttpHeader('Authorization', `Token ${response.data.token}`)
    setAuthToken(response.data.token)

    yield put(fetchMyUser.success(response.data.user))
    window.location.href = '/'
  } catch (e) {
    setHttpHeader('Authorization', null)
    setAuthToken('')

    yield put(fetchMyUser.failure())
  }
}

const signInApi = (payload: SignRequestPayload) => request({
  url: '/security/login',
  method: 'POST',
  data: payload,
})

function* signInAsync(action: ReturnType<typeof signIn.request>) {
  try {
    const response = yield call(signInApi, action.payload)

    setHttpHeader('Authorization', `Token ${response.data.token}`)
    setAuthToken(response.data.token)

    yield put(fetchMyUser.success(response.data.user))
    window.location.href = '/'
  } catch (e) {
    setHttpHeader('Authorization', null)
    setAuthToken('')

    yield put(fetchMyUser.failure())
  }
}

const fetchMyUserApi = () => request({
  url: '/users/my-profile',
  method: 'GET',
})

function* fetchMyUserAsync() {
  try {
    const response = yield call(fetchMyUserApi)

    yield put(fetchMyUser.success(response.data))
  } catch (e) {
    yield put(fetchMyUser.failure())
  }
}


export function* watchUser() {
  yield takeEvery(SIGN_UP_REQUEST, signUpAsync)
  yield takeEvery(SIGN_IN_REQUEST, signInAsync)
  yield takeEvery(FETCH_MY_USER_REQUEST, fetchMyUserAsync)
}
