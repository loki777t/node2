const express = require('express');
const app = express();
const router = require('./router');
const path = require('path');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', router);

module.exports = app;
