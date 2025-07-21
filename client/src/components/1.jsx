import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../features/songs/slice';

function SongList() {
  const dispatch = useDispatch();
  const { data, loading, error, pagination } = useSelector(state => state.songs);

  useEffect(() => {
    dispatch(actions.fetchSongsStart({ page: 1, limit: 10 }));
  }, [dispatch]);

  if (loading) return <div>Loading songs...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {data.map(song => (
        <div key={song.id}>
          <h3>{song.title}</h3>
          <p>{song.artist} • {song.album} ({song.year})</p>
        </div>
      ))}
    </div>
  );
}

export default SongList; 