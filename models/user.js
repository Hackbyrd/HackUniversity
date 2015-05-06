var mongoose = require('mongoose');
var bcrypt = require("bcrypt");

var userSchema = mongoose.Schema({
  Name:       String,
  email:      { type: String, index: { unique: true } },
  password:   String,
  school:     String,
  gender:     { type: String, enum: ['Male', 'Female'] },
  age:        { type: Number, min: 1, max: 150 }
});

userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(9));
}

userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
}

module.exports = mongoose.model('User', userSchema);
