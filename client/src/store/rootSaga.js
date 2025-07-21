import { all } from 'redux-saga/effects';
import songSaga from '../features/songs/saga';

export default function* rootSaga() {
  yield all([
    songSaga(),
  ]);
}