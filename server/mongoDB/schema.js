const mongoose = require('mongoose');
const { Schema } = mongoose;

const guestBook = new Schema({
  name: { type: String },
  msg: { type: String },
})

const GuestBookDB = mongoose.model("guestBook", guestBook);

module.exports = GuestBookDB;