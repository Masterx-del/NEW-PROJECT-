/*CMD
  command: /stats
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

let totalUsers = Bot.getProperty("userList", []).length || 0;
let totalOrders = Bot.getProperty("totalOrders") || 0;
let totalFunds = Bot.getProperty("totalFunds") || 0;

Bot.sendMessage(
  "📊 *Bot Statistics*\n\n" +
  `👥 *Total Users:* ${totalUsers}\n` +
  `💨 *Total Orders:* ${totalOrders}\n` +
  `🔰 *Total Funds Added:* ${totalFunds.toFixed()}\n`,
  { parse_mode: "Markdown" }
);
