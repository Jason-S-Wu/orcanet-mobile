const express = require('express');
const fs = require('fs');

const app = express();

fs.readdirSync(__dirname + '/routes').forEach((file) => {
  const route = require(__dirname + `/routes/${file}`);
  console.log('Loaded route:', file);
  app.use('/', route);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
