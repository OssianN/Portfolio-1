'use strict';
const mongoose = require('mongoose');
const qs = require('qs');
const querystring = require('querystring');
require('dotenv').config();

let conn = null;
const uri = process.env.MONGODB_URI;

exports.handler = async function(event, context) {
  try {
    context.callbackWaitsForEmptyEventLoop = false;

    if (conn == null) {
      conn = mongoose.createConnection(uri, {
        bufferCommands: false,
        bufferMaxEntries: 0,
        useUnifiedTopology: true, 
        useNewUrlParser: true, 
        useFindAndModify: false
      });
      await conn;

      const { Schema } = mongoose;
      const guestBook = new Schema({
        name: {
          type: String
        },
        msg: {
          type: String
        }
      });
      conn.model('guestBook', guestBook);
    }
    const GuestBookDB = conn.model('guestBook');

    console.log(event.httpMethod)
  if (event.httpMethod === 'POST')  {
    const data = JSON.parse(event.body);
    const { name, msg } = data;
    const guestMessage = new GuestBookDB({
      name,
      msg
    });
    await guestMessage.save();
  }

    const allMessages = await GuestBookDB.find();

    return {
      statusCode: 200,
      body: JSON.stringify(allMessages),
    }

  }
  catch (err) {
    console.error('ERROR OCCURRED:', err)
  }
};

