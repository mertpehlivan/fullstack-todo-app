const mongoose = require('mongoose');


const todoSchema = new mongoose.Schema({
    text:{
        type: String,
        require:true,
    },
    check : {
        type: Boolean,
        require:true,
    }
})
module.exports = mongoose.model('ToDo',todoSchema);