const mongoose = require('mongoose');
let Schema = mongoose.Schema;

userSchema = new Schema({
  username: String,
  email: String,
  location: {
    town: String,
    address: String
  },
  regDate: { type: Date, default: Date.now },
  verificationStatus: {
    pending: Boolean,
    verified: Boolean
  },
  status: {
    suspended: { type: Boolean, default: false }
  },
  meta: {
    verified: Number,
    favs: Number
  }
});

module.exports = mongoose.model('User', userSchema);
