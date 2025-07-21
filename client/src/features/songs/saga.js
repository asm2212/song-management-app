
import { call, put, takeLatest } from 'redux-saga/effects';
import {
  FETCH_SONGS,
  ADD_SONG,
  UPDATE_SONG,
  DELETE_SONG,
} from './types';
import {
  fetchSongsStart,
  fetchSongsSuccess,
  fetchSongsFailure,
  addSongSuccess,
  updateSongSuccess,
  deleteSongSuccess,
} from './slice';
import {
  fetchSongsApi,
  addSongApi,
  updateSongApi,
  deleteSongApi,
} from './api';

// Fetch songs (with pagination)
function* fetchSongsSaga(action) {
  try {
    yield put(fetchSongsStart());
    const page = action.payload?.page || 1;
    const response = yield call(fetchSongsApi, page);
    yield put(fetchSongsSuccess(response.data));
  } catch (error) {
    yield put(fetchSongsFailure(error.message || 'Failed to fetch songs'));
  }
}

// Add new song
function* addSongSaga(action) {
  try {
    const response = yield call(addSongApi, action.payload);
    yield put(addSongSuccess(response.data));

    // Re-fetch first page to sync pagination
    const updatedList = yield call(fetchSongsApi, 1);
    yield put(fetchSongsSuccess(updatedList.data));
  } catch (error) {
    yield put(fetchSongsFailure(error.message || 'Failed to add song'));
  }
}

// Update song
function* updateSongSaga(action) {
  try {
    const { id, data } = action.payload;
    const response = yield call(updateSongApi, id, data);
    yield put(updateSongSuccess(response.data));
  } catch (error) {
    console.error('Update song failed:', error);
    yield put(fetchSongsFailure(error.message || 'Failed to update song'));
  }
}

// Delete song
function* deleteSongSaga(action) {
  try {
    yield call(deleteSongApi, action.payload);
    yield put(deleteSongSuccess(action.payload));

    // Re-fetch current page to sync pagination
    const response = yield call(fetchSongsApi, 1);
    yield put(fetchSongsSuccess(response.data));
  } catch (error) {
    console.error('Delete song failed:', error);
    yield put(fetchSongsFailure(error.message || 'Failed to delete song'));
  }
}

export default function* songSaga() {
  yield takeLatest(FETCH_SONGS, fetchSongsSaga);
  yield takeLatest(ADD_SONG, addSongSaga);
  yield takeLatest(UPDATE_SONG, updateSongSaga);
  yield takeLatest(DELETE_SONG, deleteSongSaga);
}
