const express = require('express');
const { Cat } = require('../models/cats');
const { createCat, findCatByPk, findAllCats, updateLastFed, deleteCat } = require('../controllers/catController');

const catRouter = express.Router();

catRouter.post('/cats', createCat);
catRouter.get('/cats', findAllCats);
catRouter.get('/cats/:catId', findCatByPk);
catRouter.patch('/cats/:catId', updateLastFed);
catRouter.delete('/cats/:catId', deleteCat);

module.exports = catRouter;
