const express = require('express');
const router = express.Router();
const postController = require('../posts/posts.controller');
const categoriesController = require('../categories/categories.controller');
// const {isAuthenticated} = require('../user/user.controller');
// const userController = require('../user/user.controller');
// const postMiddleware = require('../posts/posts.middleware');
const servicesController = require('../services/services.controller')
router.get('/', function(req, res) {
  return res.json({ message: 'App is running'});
});
router.post('/posts', postController.createPosts);
router.get('/posts', postController.getPosts);
router.get('/posts/:id', postController.getPostById);
router.put('/posts/:id', postController.updatePostById);
router.delete('/posts/:id', postController.deletePostById);

router.post('/services',servicesController.createPosts)
router.get('/services',servicesController.getPosts)
router.get('/services/:id',servicesController.getPostsById)
router.put('/services/:id',servicesController.updatesPostById)
router.delete('/services/:id',servicesController.deletePostById)

module.exports = router;
