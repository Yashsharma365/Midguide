const mongoose= require('mongoose');

const User = new mongoose.Schema({
    FullName :{
        type : String,
         required : [true, 'FullName cannot be empty'] 
    } ,
    Username : {
        type : String,
        required : [true, 'Username cannot be empty']
    },
    Password : {
        type : String,
        required : [true, 'Password cannot be empty']
    },
    Email    : String
})

module.exports = mongoose.model('User',User);