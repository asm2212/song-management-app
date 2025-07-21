
let songs = [
  { id: 1, title: 'Bohemian Rhapsody', artist: 'Queen', album: 'A Night at the Opera', year: 1975 },
];

// Get paginated songs
exports.getSongs = (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const data = songs.slice(startIndex, endIndex);

  res.json({
    data,
    pagination: {
      currentPage: page,
      totalPages: Math.ceil(songs.length / limit),
      totalItems: songs.length,
    },
  });
};

// Get single song by ID
exports.getSongById = (req, res) => {
  const song = songs.find((s) => s.id === parseInt(req.params.id));
  if (!song) return res.status(404).json({ message: 'Song not found' });
  res.json(song);
};

// Create a new song
exports.createSong = (req, res) => {
  const { title, artist, album, year } = req.body;
  if (!title || !artist || !album || !year) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const newSong = {
    id: songs.length ? songs[songs.length - 1].id + 1 : 1,
    title,
    artist,
    album,
    year,
  };

  songs.push(newSong);
  res.status(201).json(newSong);
};

// Update existing song
exports.updateSong = (req, res) => {
  const { id } = req.params;
  const index = songs.findIndex((s) => s.id === parseInt(id));
  if (index === -1) return res.status(404).json({ message: 'Song not found' });

  const { title, artist, album, year } = req.body;
  songs[index] = { ...songs[index], title, artist, album, year };
  res.json(songs[index]);
};

// Delete song by ID
exports.deleteSong = (req, res) => {
  const { id } = req.params;
  const index = songs.findIndex((s) => s.id === parseInt(id));
  if (index === -1) return res.status(404).json({ message: 'Song not found' });

  songs.splice(index, 1);
  res.json({ message: 'Song deleted successfully', id: parseInt(id) });
};
