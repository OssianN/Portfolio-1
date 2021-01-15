"use strict";

const mongoose = require('mongoose');

const {
  Schema
} = mongoose;
const guestBook = new Schema({
  name: {
    type: String
  },
  msg: {
    type: String
  }
});
const GuestBookDB = mongoose.model("guestBook", guestBook);

exports.handler = async function (data) {
  const {
    name,
    msg
  } = data;
  const guestMessage = new GuestBookDB({
    name,
    msg
  });
  guestMessage.save();
  return {
    statusCode: 200,
    body: 'posted to mongodb'
  };
};