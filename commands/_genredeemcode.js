/*CMD
  command: /genredeemcode
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

if (user.telegramid != 7849699181) {
  Bot.sendMessage("⛔ You are not authorized.");
  return;
}

// Get amount from command parameters
let amt = parseInt(params.trim());
if (isNaN(amt) || amt <= 0) {
  Bot.sendMessage("❌ Usage:\n/genredeemcode AMOUNT\n\nExample:\n/genredeemcode 50");
  return;
}

// Generate 6-character random code
function makeCode(length) {
  let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let code = "";
  for (let i = 0; i < length; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}

let code = makeCode(6);
let data = {amount: amt, used: false};

Bot.setProperty(code, data, "json");

Bot.sendMessage("✅ Redeem code generated:\n🔐 Code: `" + code + "`\n💸 Value: " + amt, {
  parse_mode: "Markdown"
});
