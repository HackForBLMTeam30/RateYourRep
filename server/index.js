const express = require('express');
const path = require('path');
const db = require('./db');

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '../build')));

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '../build/index.html'));
});

const port = process.env.PORT || 5000;

const syncDb = db.sync({ force: true });
syncDb();

app.listen(port);

console.log('Rating Reps on port: ' + port);
