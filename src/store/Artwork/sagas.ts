import { call, put, takeEvery } from 'redux-saga/effects'
import { request } from 'utils/request'
import { CREATE_ARTWORK_REQUEST, createArtwork } from './actions'
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


export function* watchArtwork() {
  yield takeEvery(CREATE_ARTWORK_REQUEST, createArtworkAsync)
}
