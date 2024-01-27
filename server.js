
const express = require('express')();
const server = express();
const PORT = process.env.PORT || 5000;

    server.listen(PORT, () => {
        console.log('Server listening on ${PORT}');
    });

    server.get('/', (req, res) => {
        res.send('Hello World! This is a Node.js app running on Heroku.');
        });