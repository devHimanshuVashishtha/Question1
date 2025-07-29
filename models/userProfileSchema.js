//this is user profile
const mongoose = require("mongoose");

const userProfileSchema = mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
  dob: Date,
  mobile: Number,
});


module.exports = mongoose.model('UserProfile',userProfileSchema)