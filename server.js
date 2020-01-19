const path = require('path');
const express = require('express');

const app = new express();

app.use(express.static('public'));

const port = process.env.PORT || 8080;

app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, 'client/build')));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));