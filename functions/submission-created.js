const mongoose = require('mongoose');
require('dotenv').config();

let conn = null;
const uri = process.env.MONGODB_URI;

exports.handler = async function(event, context) {
  const data = JSON.parse(event.body);

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

  const { name, msg } = data.node;
  console.log(name, msg);

  const guestMessage = new GuestBookDB({
    name,
    msg
  });
  await guestMessage.save();

  return {
    statusCode: 200,
    body: 'Message posted!',
  }
};

