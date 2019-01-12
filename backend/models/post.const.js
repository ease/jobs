const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let oneDay = 1 * 24 * 60 * 60000; //one day in JS

postSchema = new Schema({
  title: String,
  description: String,
  location: String,
  deadline: { type: Date, default: Date.now() + oneDay * 30 },
  hidden: Boolean,
  expired: Boolean,
  promo: Boolean,
  meta: {
    votes: Number,
    favs: Number
  }
});

module.exports = mongoose.model('Post', postSchema);
