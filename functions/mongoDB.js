const mongoose = require('mongoose')
require('dotenv').config()
const postData = require('./postGuestBook')
const uri = process.env.MONGODB_URI
let db = null

exports.handler = async (event, context) => {
  try {
    context.callbackWaitsForEmptyEventLoop = false

    if (!db) {
      db = await mongoose.createConnection(uri, {
        bufferMaxEntries: 0,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useNewUrlParser: true,
        useFindAndModify: false,
      })

      const { Schema } = mongoose
      const guestBook = new Schema({
        name: {
          type: String,
        },
        msg: {
          type: String,
        },
      })

      db.model('guestBook', guestBook)
    }
    const GuestBookDB = db.model('guestBook')

    if (event.httpMethod === 'POST') {
      await postData(GuestBookDB, event)
    }

    const allMessages = await GuestBookDB.find()
    return {
      statusCode: 200,
      body: JSON.stringify(allMessages),
    }
  } catch (err) {
    console.error('ERROR OCCURRED:', err)
  }
}
