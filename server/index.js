const express = require('express')
const db = require('./db');
const app = express();
app.use('/auth', require('./auth'))
app.use('/api', require('./api'))
const port = process.env.PORT || 5000;
db.sync().then(function() {
    app.listen(port, function() {
        console.log('Rating Reps on port: '+port);
    });
});
