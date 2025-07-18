/*CMD
  command: /broadcast
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

// ✅ Only Admin can use this command
if (user.telegramid !== adminId) {
  return Bot.sendMessage("🚫 You are not authorized to use this command.");
}

let broadcastList = Bot.getProperty("broadcastList", []);

if (!params || params.length < 5) {
  return Bot.sendMessage("📢 *Usage:* `/broadcast Your message here...`\n\n_Example:_ `/broadcast Hello users! New offer is live!`", { parse_mode: "Markdown" });
}

let success = 0;
let failed = 0;

for (let i = 0; i < broadcastList.length; i++) {
  let uid = broadcastList[i];
  try {
    Bot.sendMessageToChatWithId(uid, params);
    success++;
  } catch (err) {
    failed++;
  }
}

Bot.sendMessage(`✅ *Broadcast sent!*\n\n📨 Success: ${success}\n❌ Failed: ${failed}`, { parse_mode: "Markdown" });


