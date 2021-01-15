const mongoose = require('mongoose');

let conn = null;
const uri = 'mongodb+srv://ossian:hucfy3-kobvoc-giqwoD@guestbook.gbqd3.mongodb.net/GuestBookDB?retryWrites=true&w=majority';

exports.handler = async function(event, context) {
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
  const res = await GuestBookDB.find();

  return {
    statusCode: 200,
    body: res,
  }
};

