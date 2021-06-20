const mongoose = require("mongoose");

const Blog = new mongoose.Schema({

    id:{
        type: mongoose.SchemaTypes.ObjectId,
    },

    heading:{
        type: String,
        required: true,
    },

    blog:{
        type: String,
        required: true,
    },
     
});

module.exports = mongoose.model("blog", Blog, "blog");