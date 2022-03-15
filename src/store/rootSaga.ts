import { all, fork } from 'redux-saga/effects'
import { watchUser } from 'store/user/sagas'
import { watchArtwork } from 'store/Artwork/sagas'


export function* rootSaga() {
  yield all([
    fork(watchUser),
    fork(watchArtwork),
  ])
}
