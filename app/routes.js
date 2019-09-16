const express = require('express');
const indexController = require('./controllers/indexController');
const chatController = require('./controllers/chatController');

const routes = express.Router();

routes.get('/', indexController.index);

routes.get('/chat', chatController.initChat);

routes.post('/chat', chatController.validate('validateNickname'), chatController.initChat);

module.exports = routes;