const express = require('express');
const fs = require('fs');
const router = express.Router();

const fileHashes = fs.readFileSync(__dirname + '/../mock-data/file-hashes.json');
const fileHashesJson = JSON.parse(fileHashes)['fileHashes'];

router.get('/hash/:hash', (req, res) => {
  const hash = req.params.hash;
  const file = fileHashesJson[hash];
  if (file) {
    res.json(file);
  } else {
    res.status(404).json({ error: 'File not found' });
  }
});

module.exports = router;
