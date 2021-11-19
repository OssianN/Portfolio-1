const postData = async (GuestBookDB, event) => {
  const data = JSON.parse(event.body)
  const { name, msg } = data
  const guestMessage = new GuestBookDB({
    name,
    msg,
  })
  await guestMessage.save()
}

module.exports = postData
