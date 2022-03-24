const mongoose = require('mongoose');
// const { Schema} = mongoose;

const servicesShema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    body:{
        type: String,
        required: true
    }
},{
    timestamps:true,
    versionKey:false
})

module.exports = mongoose.model("Services",servicesShema);