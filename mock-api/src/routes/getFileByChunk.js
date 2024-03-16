const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

const fileHashes = fs.readFileSync(path.join(__dirname, '/../mock-data/file-hashes.json'));
const fileHashesJson = JSON.parse(fileHashes)['fileHashes'];

router.get('/getFileByChunk/:filehash/:chunksize/:chunkindex', async (req, res) => {
  const { filehash, chunksize, chunkindex } = req.params;

  if (!fileHashesJson[filehash]) {
    res.status(404).json({ error: 'File not found in marketplace' });
    return;
  }

  const fileInfo = fileHashesJson[filehash];
  const filename = fileInfo.filename;
  const filePath = path.join(__dirname, '/../mock-data/', filename);

  // Read the file asynchronously
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.status(500).json({ error: 'Error reading file' });
      return;
    }

    // Calculate the start and end index of the requested chunk
    const start = chunkindex * chunksize;
    const end = start + parseInt(chunksize);

    // Create a buffer for the chunk
    const chunk = Buffer.alloc(parseInt(chunksize));

    // Copy the chunk data into the buffer
    data.copy(chunk, 0, start, end);

    // Send the chunk in the response
    res.status(200).send(chunk);
  });
});

module.exports = router;
