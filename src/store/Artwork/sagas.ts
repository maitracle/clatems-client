import { call, put, takeEvery } from 'redux-saga/effects'
import { request } from 'utils/request'
import {
  CREATE_ARTWORK_REQUEST,
  createArtwork,
  FETCH_ARTWORK_LIST_REQUEST,
  FETCH_ARTWORK_REQUEST,
  FETCH_MY_ARTWORK_LIST_REQUEST,
  fetchArtwork,
  fetchArtworkList,
} from './actions'
import { CreateArtworkPayload } from './types'


const createArtworkApi = (payload: CreateArtworkPayload) => request({
  url: '/artworks',
  method: 'POST',
  data: payload,
})

function* createArtworkAsync(action: ReturnType<typeof createArtwork.request>) {
  try {
    const response = yield call(createArtworkApi, action.payload)

    yield put(createArtwork.success(response.data))
  } catch (e) {

    yield put(createArtwork.failure())
  }
}

const fetchArtworkListApi = () => request({
  url: '/artworks',
  method: 'GET',
})

function* fetchArtworkListAsync() {
  try {
    const response = yield call(fetchArtworkListApi)

    yield put(fetchArtworkList.success(response.data))
  } catch (e) {

    yield put(fetchArtworkList.failure())
  }
}

const fetchMyArtworkListApi = () => request({
  url: '/artworks/my',
  method: 'GET',
})

function* fetchMyArtworkListAsync() {
  try {
    const response = yield call(fetchMyArtworkListApi)

    yield put(fetchArtworkList.success(response.data))
  } catch (e) {

    yield put(fetchArtworkList.failure())
  }
}

const fetchArtworkApi = (artworkId: Number) => request({
  url: `/artworks/${artworkId}`,
  method: 'GET',
})

function* fetchArtworkAsync(action: ReturnType<typeof fetchArtwork.request>) {
  try {
    const response = yield call(fetchArtworkApi, action.payload)

    yield put(fetchArtwork.success(response.data))
  } catch (e) {

    yield put(fetchArtwork.failure())
  }
}

export function* watchArtwork() {
  yield takeEvery(CREATE_ARTWORK_REQUEST, createArtworkAsync)
  yield takeEvery(FETCH_ARTWORK_LIST_REQUEST, fetchArtworkListAsync)
  yield takeEvery(FETCH_MY_ARTWORK_LIST_REQUEST, fetchMyArtworkListAsync)
  yield takeEvery(FETCH_ARTWORK_REQUEST, fetchArtworkAsync)
}
