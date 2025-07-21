import client from '../../api/client';

export const fetchSongsApi = (page = 1, limit = 10) =>
  client.get(`/songs?page=${page}&limit=${limit}`);

export const addSongApi = (song) => client.post('/songs', song);
export const updateSongApi = (id, song) => client.put(`/songs/${id}`, song);
export const deleteSongApi = (id) => client.delete(`/songs/${id}`);