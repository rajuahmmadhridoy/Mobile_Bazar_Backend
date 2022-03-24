const servicesService = require('./services.services')

module.exports.createPosts = async function (req, res) {
    const post = req.body;
    const createdPost = await servicesService.createPost(post);
    return res.status(200).json(createdPost);
  };
  
  module.exports.getPosts = async function (req,res){
    const posts = await servicesService.getPosts();
    return res.json(posts)
  }

  module.exports.getPostsById = async function (req,res){
    const postId = req.params.id;
    const post = await servicesService.getPostsById(postId); 
    return res.json(post)
  }

  module.exports.updatesPostById = async function (req,res){
    const postId = req.params.id;
    const update = req.body;
    const post = await servicesService.updatesPostById(postId, update); 
    return res.json(post)
  }

  module.exports.deletePostById = async function (req,res){
    const postId = req.params.id;
    const post = await servicesService.deletePostById(postId); 
    return res.json(post)
  }