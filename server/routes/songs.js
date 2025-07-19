const express = require('express');
const router = express.Router();
const {
  getSongs,
  getSongById,
  createSong,
  updateSong,
  deleteSong
} = require('../controllers/songController');


router.get('/', getSongs);

router.post('/', createSong);

router.get('/:id', getSongById);

router.put('/:id', updateSong);

router.delete('/:id', deleteSong);

module.exports = router;