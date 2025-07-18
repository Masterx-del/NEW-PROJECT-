/*CMD
  command: 𝗕𝗔𝗟𝗔𝗡𝗖𝗘 🔰
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

let userName = user.first_name || "User";
let userId = user.telegramid || user.id || user.user_id;

const balance = ResLib.anotherUserRes("balance", userId);

Bot.sendMessage(
  `🔰 *Account Information*\n\n` +
  `👤 *Name*: ${userName}\n` +
  `🆔 *User ID*: ${userId}\n` +
  `♥️ *LIKES*: ${balance.value().toFixed()}\n\n` +
  `*TO TOP-UP, CONTACT ADMIN.*`
);

