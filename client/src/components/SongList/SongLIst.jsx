import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FETCH_SONGS, DELETE_SONG, UPDATE_SONG } from '../../features/songs/types';
import Pagination from '../Pagination/Pagination';
import {
  ListContainer,
  Table,
  Th,
  Td,
  EditButton,
  DeleteButton,
  SaveButton,
  CancelButton,
  EmptyMessage,
  Input,
} from './styles';
import Loader from '../common/Loader/Loader';
import ErrorMessage from '../common/ErrorMessage/ErrorMessage';

const SongList = () => {
  const dispatch = useDispatch();
  const { items: songs = [], loading, error, pagination } = useSelector(state => state.songs);
  const total = pagination?.totalItems || 0;
  const currentPage = pagination?.currentPage || 1;

  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({ title: '', artist: '', album: '', year: '' });

  const handlePage = (page) => {
    dispatch({ type: FETCH_SONGS, payload: { page, limit: 10 } });
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this song?')) {
      dispatch({ type: DELETE_SONG, payload: id });
    }
  };

  const startEdit = (song) => {
    setEditingId(song.id);
    setEditForm({ title: song.title, artist: song.artist, album: song.album, year: song.year });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditForm({ title: '', artist: '', album: '', year: '' });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditForm(prev => ({ ...prev, [name]: value }));
  };

  const submitEdit = (id) => {
    if (!editForm.title.trim() || !editForm.artist.trim()) {
      alert('Title and Artist are required.');
      return;
    }

    dispatch({ type: UPDATE_SONG, payload: { id, data: editForm } });
    setEditingId(null);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      submitEdit(editingId);
    }
    if (e.key === 'Escape') {
      cancelEdit();
    }
  };

  return (
    <ListContainer>
      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {!loading && !error && (
        <>
          <Table>
            <thead>
              <tr>
                <Th>Title</Th>
                <Th>Artist</Th>
                <Th>Album</Th>
                <Th>Year</Th>
                <Th>Actions</Th>
              </tr>
            </thead>
            <tbody>
              {songs.length > 0 ? (
                songs.map((s) => (
                  <tr key={s.id}>
                    <Td>
                      {editingId === s.id ? (
                        <Input
                          name="title"
                          value={editForm.title}
                          onChange={handleEditChange}
                          onKeyDown={handleKeyDown}
                          autoFocus
                        />
                      ) : (
                        s.title
                      )}
                    </Td>
                    <Td>
                      {editingId === s.id ? (
                        <Input
                          name="artist"
                          value={editForm.artist}
                          onChange={handleEditChange}
                          onKeyDown={handleKeyDown}
                        />
                      ) : (
                        s.artist
                      )}
                    </Td>
                    <Td>
                      {editingId === s.id ? (
                        <Input
                          name="album"
                          value={editForm.album}
                          onChange={handleEditChange}
                          onKeyDown={handleKeyDown}
                        />
                      ) : (
                        s.album
                      )}
                    </Td>
                    <Td>
                      {editingId === s.id ? (
                        <Input
                          name="year"
                          value={editForm.year}
                          onChange={handleEditChange}
                          onKeyDown={handleKeyDown}
                        />
                      ) : (
                        s.year
                      )}
                    </Td>
                    <Td>
                      {editingId === s.id ? (
                        <>
                          <SaveButton onClick={() => submitEdit(s.id)}>Save</SaveButton>
                          <CancelButton onClick={cancelEdit}>Cancel</CancelButton>
                        </>
                      ) : (
                        <>
                          <EditButton onClick={() => startEdit(s)}>Edit</EditButton>
                          <DeleteButton onClick={() => handleDelete(s.id)}>Delete</DeleteButton>
                        </>
                      )}
                    </Td>
                  </tr>
                ))
              ) : (
                <tr>
                  <Td colSpan="5">
                    <EmptyMessage>No songs found.</EmptyMessage>
                  </Td>
                </tr>
              )}
            </tbody>
          </Table>

          {songs.length > 0 && (
            <Pagination
              currentPage={currentPage}
              totalCount={total}
              pageSize={10}
              onPageChange={handlePage}
            />
          )}
        </>
      )}
    </ListContainer>
  );
};

export default SongList;
