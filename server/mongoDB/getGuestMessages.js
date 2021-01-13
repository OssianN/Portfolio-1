const GuestBookDB = require('./schema');

const getGuestMessages = async () => await GuestBookDB.find();

module.exports.getGuestMessages = getGuestMessages;
