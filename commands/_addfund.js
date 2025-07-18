/*CMD
  command: /addfund
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

// ✅ Admin protection
let adminIds = [7849699181];
let senderId = user.telegramid || user.id;

if (!adminIds.includes(senderId)) {
  Bot.sendMessage("*🚫 HAVE YOU WANT PUNCH 👊*");
  return;
}

// ✅ Input validation
let parts = message.split(" ");
if (parts.length < 3) {
  Bot.sendMessage("*❌ USAGE: /addfund USER_ID AMOUNT\nExample: /addfund 12345678 50*");
  return;
}

let userId = parts[1];
let amount = parseFloat(parts[2]);

if (isNaN(amount)) {
  Bot.sendMessage("❌ Invalid amount.");
  return;
}

// ✅ Add fund
let userBalance = ResLib.anotherUserRes("balance", userId);
userBalance.add(amount);

// ✅ Notify admin
Bot.sendMessage(`*✅ ${amount.toFixed()} ADDED TO USER*\n\n🆔 ${userId}\n\n🔰 *NEW BALANCE: ${userBalance.value().toFixed()}*`, { parse_mode: "Markdown" });

// ✅ Notify user
Bot.sendMessageToChatWithId(userId, `🗒️ *FUND ADDED!*\n\n✅*  ${amount.toFixed()} Has Been Added To Your Account*.\n\n🔰 *NEW BALANCE:  ${userBalance.value().toFixed()}*`, { parse_mode: "Markdown" });
