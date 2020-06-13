const express = require('express');
const path = require('path');
const db = require('./db');

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '../build')));

app.use('/api', require('./routes/legislators'));

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '../build/index.html'));
});

const port = process.env.PORT || 5000;


db.sync().then(function () {
  app.listen(port, function () {
    console.log('Rating Reps on port: ' + port);
  });
});

