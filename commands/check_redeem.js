/*CMD
  command: check_redeem
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

let code = message.trim().toUpperCase();
let data = Bot.getProperty(code);

if (!data) {
  Bot.sendMessage("❌ Invalid redeem code.");
  return;
}

// ❗ Check if expired
if (data.expires && Date.now() > data.expires) {
  Bot.sendMessage("⌛ This code has expired.");
  return;
}

// ✅ If one-time use
if (data.used === true) {
  Bot.sendMessage("⚠️ This code has already been used.");
  return;
}

// Add balance using ResLib
let userId = user.telegramid;
let bal = ResLib.anotherUserRes("balance", userId).value() || 0;
ResLib.anotherUserRes("balance", userId).set(bal + data.amount);


// 🔐 If one-time code, mark as used
if (data.used === false) {
  data.used = true;
  Bot.setProperty(code, data, "json");
}

Bot.sendMessage(`*✅ Success! ${data.amount} added to your balance.*\n🔐 Code: ${code}`);


