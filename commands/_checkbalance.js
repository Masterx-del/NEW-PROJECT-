/*CMD
  command: /checkbalance
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

let adminId = 7849699181;

if (user.telegramid !== adminId) {
  return Bot.sendMessage("❌ You are not authorized to use this command.");
}

let parts = message.split(" ");
if (parts.length < 2) {
  return Bot.sendMessage("❗ Please provide a user ID.\nExample: /checkbalance 123456789");
}

let targetUserId = parts[1];
let res = ResLib.anotherUserRes("balance", targetUserId);
let balance = res ? res.value() : null;  // ← call .value as function!

if (balance === null || balance === undefined) {
  Bot.sendMessage("⚠️ No balance found for user ID: `" + targetUserId + "`", { parse_mode: "Markdown" });
} else {
  Bot.sendMessage("✅ *BALANCE FOR USER* `" + targetUserId + "`* IS*: *" + balance + "*", { parse_mode: "Markdown" });
}


