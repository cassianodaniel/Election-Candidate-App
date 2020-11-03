const express = require('express');

const routes = express.Router();

const ApoiadoresController = require('./controllers/ApoiadoresController');
const PostsController = require('./controllers/PostsController');

routes.post('/apoiadores', ApoiadoresController.create);
routes.get('/apoiadores', ApoiadoresController.list);
routes.delete('/apoiadores', ApoiadoresController.delete);
routes.post('/apoiadores/count', ApoiadoresController.count);

routes.post('/posts', PostsController.create);
routes.post('/posts/list', PostsController.list);
routes.delete('/posts', PostsController.delete);

module.exports = routes;