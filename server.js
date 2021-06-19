const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/covid-tracker'));

app.all('*', function (req, res) {

    res.sendFile(path.join(__dirname + '/dist/covid-tracker/index.html'));
});

app.listen(process.env.PORT || 8080);

console.log(`Running on port ${process.env.PORT || 8080}`);