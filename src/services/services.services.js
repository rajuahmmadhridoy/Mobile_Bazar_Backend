const services = require('./services.model')


module.exports.createPost = async function (post){
    return services.create(post)
}

module.exports.getPosts = async function (){
    return services.find({})
}
module.exports.getPostsById = async function (id){
    return services.findById(id)
}

module.exports.updatesPostById = async function (id,update){
    return services.findByIdAndUpdate(id, update,{ new: true})
}

module.exports.deletePostById = async function (id){
    return services.findByIdAndDelete(id)
}