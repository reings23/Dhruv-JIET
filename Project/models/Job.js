const mongoose = require("mongoose");

const Job = new mongoose.Schema({
     
    jobTitle:{
        type: String,
        required: true,
    },

    company:{
        type: String,
        required: true,
    },

    location:{
        type: String,
        required: true,
    },
   
    stipend:{
        type: String,
        required: true,
    },

     userId: {
        type: mongoose.Types.ObjectId,
        required: false,
    },
});

module.exports = mongoose.model("job", Job, "job"); 