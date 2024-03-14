const express = require('express');
const fs = require('fs');
const router = express.Router();

const users = fs.readFileSync(__dirname + '/../mock-data/users.json');
const usersJson = JSON.parse(users)['users'];

router.get('/balance/:userId', (req, res) => {
  const userId = req.params.userId;
  const user = usersJson[userId];
  if (user) {
    res.json({ balance: user.balance });
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

router.get('/balance', (req, res) => {
  res.status(404).json({ error: 'Checking Current User Not Implemented' });
});

module.exports = router;
