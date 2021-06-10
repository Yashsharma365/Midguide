// const { Timestamp } = require('bson');
const mongoose = require('mongoose');
// const {Schema} = Mongoose;

// var userSchema = new mongoose.Schema({
//   name : String,
//   address : String
// })
var userSchema = new mongoose.Schema({
  // _id : mongoose.Schema.ObjectId,  
  name : String,
  city : String,
  State : String,
  history : String,
  about : String,
  timing : String,
  type : String,
  header_image : String,
  youtube : String,
  nearby_place_image : [String],
  nearby_place : [String]




 
});
module.exports = mongoose.model('places',userSchema);
   