const Group = require("../../models/groupModel");

const uploadGroups = async (client) => {
  let chats = await client.getChats();

  chats = chats.filter((chat) => chat.isGroup);

  for (let chat of chats) {
    const checkGroupExists = await Group.findOne({
      id: chat.id._serialized,
    });
    if (!checkGroupExists) {
      const group = new Group({
        id: chat.id._serialized,
        subject: chat.name,
        desc: chat.groupMetadata.desc,
        participants: chat.groupMetadata.participants,
      });
      await group.save();
    }
  }
};

const updateGroups = async (client, notification) => {
  let chats = await client.getChats();
  chats = chats.filter((chat) => chat.isGroup);

  const group = await Group.findOne({
    id: notification.id.remote,
  });

  const chat = chats.filter((e) => {
    if (e.id._serialized == notification.id.remote) return e;
  });

  group.participants = chat[0].groupMetadata.participants;
  await group.save();
};

module.exports = {
  uploadGroups,
  updateGroups,
};
