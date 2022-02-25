const express = require('express');
const models = require('../src/models');
const catRouter = require('../src/routes/catRoute');

const app = express();

// we expect to have to parse json from request bodies, 
// so we need the JSON middleware
app.use(express.json());

app.use('/cats', catRouter);


module.exports = app;