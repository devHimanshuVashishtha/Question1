// this is user

const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  FirstName: { type: String, require: true },
  LastName: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  Password: { type: String, require: true },
});

module.exports = mongoose.model("User", userSchema);
