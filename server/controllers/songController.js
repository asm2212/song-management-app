// In-memory database
let songs = [
    { id: 1, title: 'Bohemian Rhapsody', artist: 'Queen', album: 'A Night at the Opera', year: 1975 },
  ];
  
  // Get paginated songs
  exports.getSongs = (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    
    const results = {
      data: songs.slice(startIndex, endIndex),
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(songs.length / limit),
        totalItems: songs.length
      }
    };
    
    res.json(results);
  };
  

  exports.getSongById = (req, res) => { /* ... */ };
  exports.createSong = (req, res) => { /* ... */ };
  exports.updateSong = (req, res) => { /* ... */ };
  exports.deleteSong = (req, res) => { /* ... */ };