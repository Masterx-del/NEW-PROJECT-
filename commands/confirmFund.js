/*CMD
  command: confirmFund
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

var admin_id = 7849699181;  // 👈 Replace with your Telegram ID

var userMessage = message.text || (message.photo ? "📷 Photo received" : "❓ Unknown input");

// Acknowledge user
Bot.sendMessage("🕵️ Thank you! We have received the following info:\n\n" + userMessage + "\n\n✅ Our team will verify and update your balance shortly.");

// Notify admin
Api.sendMessage({
  chat_id: admin_id,
  text: "🔰 *NEW FUND REQUEST!*\n\n👤 From: @" + user.username + " (`" + user.telegramid + "`)\n\n📝 Message:\n" + userMessage,
  parse_mode: "Markdown"
});

