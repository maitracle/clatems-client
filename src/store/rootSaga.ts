import { all, fork } from 'redux-saga/effects';
import { watchUser } from 'store/user/sagas';


export function* rootSaga() {
  yield all([
    fork(watchUser),
  ]);
}
