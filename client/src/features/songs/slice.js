
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  loading: false,
  error: null,
  pagination: {
    currentPage: 1,
    totalPages: 1,
    totalItems: 0,
  },
};

const songSlice = createSlice({
  name: 'songs',
  initialState,
  reducers: {
    fetchSongsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchSongsSuccess(state, action) {
      state.loading = false;
      state.items = action.payload.data;
      state.pagination = action.payload.pagination;
    },
    fetchSongsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    addSongSuccess(state, action) {
      state.items.unshift(action.payload);
    },
    updateSongSuccess(state, action) {
      const index = state.items.findIndex(song => song.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    deleteSongSuccess(state, action) {
      state.items = state.items.filter(song => song.id !== action.payload);
    },
  },
});

export const {
  fetchSongsStart,
  fetchSongsSuccess,
  fetchSongsFailure,
  addSongSuccess,
  updateSongSuccess,
  deleteSongSuccess,
} = songSlice.actions;

export default songSlice.reducer;
