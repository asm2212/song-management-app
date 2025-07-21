import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FormWrapper, InputGroup, Input, Button, Label } from './styles';
import { ADD_SONG } from '../../features/songs/types';

const initialFormState = {
  title: '',
  artist: '',
  album: '',
  year: '',
};

const SongForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, artist } = formData;

    if (!title.trim() || !artist.trim()) return;

    dispatch({ type: ADD_SONG, payload: formData });
    setFormData(initialFormState);
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <InputGroup>
        <Label htmlFor="title">Title</Label>
        <Input id="title" name="title" placeholder="Enter song title" value={formData.title} onChange={handleChange} />
      </InputGroup>

      <InputGroup>
        <Label htmlFor="artist">Artist</Label>
        <Input id="artist" name="artist" placeholder="Enter artist name" value={formData.artist} onChange={handleChange} />
      </InputGroup>

      <InputGroup>
        <Label htmlFor="album">Album</Label>
        <Input id="album" name="album" placeholder="Enter album name" value={formData.album} onChange={handleChange} />
      </InputGroup>

      <InputGroup>
        <Label htmlFor="year">Year</Label>
        <Input id="year" name="year" placeholder="Enter release year" value={formData.year} onChange={handleChange} />
      </InputGroup>

      <Button type="submit">Add Song</Button>
    </FormWrapper>
  );
};

export default SongForm;
