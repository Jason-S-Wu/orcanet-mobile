const express = require('express');
const fs = require('fs');
const path = require('path');
const mime = require('mime-types');

const router = express.Router();

const fileHashes = fs.readFileSync(path.join(__dirname, '/../mock-data/file-hashes.json'));
const fileHashesJson = JSON.parse(fileHashes)['fileHashes'];

router.get('/getFile/:filehash', (req, res) => {
  const filehash = req.params.filehash;

  if (!fileHashesJson[filehash]) {
    res.status(404).json({ error: 'File not found in marketplace' });
    return;
  }

  const fileInfo = fileHashesJson[filehash];
  const filename = fileInfo.filename;
  const filePath = path.join(__dirname, '/../mock-data/', filename);

  if (!fs.existsSync(filePath)) {
    res.status(404).json({ error: 'File not found on "peer node"' });
    return;
  }

  // Determine the content type based on file extension
  const contentType = mime.contentType(path.extname(filename));

  // Set content type in response header
  res.set('Content-Type', contentType);

  // Read and send the file
  const fileStream = fs.createReadStream(filePath);
  fileStream.pipe(res);
});

module.exports = router;
