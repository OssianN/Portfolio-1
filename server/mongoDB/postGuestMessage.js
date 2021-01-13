const GuestBookDB = require('./schema');

const postGuestMessage = (data) => {
  const { name, msg } = data;
  const guestMessage = new GuestBookDB({
    name,
    msg
  });
  guestMessage.save();
};

module.exports.postGuestMessage = postGuestMessage;
