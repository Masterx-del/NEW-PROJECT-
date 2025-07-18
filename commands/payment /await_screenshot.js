/*CMD
  command: await_screenshot
  help: 
  need_reply: true
  auto_retry_time: 
  folder: payment 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

// 📸 Screenshot Await Command
let adminId = 7849699181; // 🔁 Replace with your admin Telegram ID

if (request.photo) {
  // ✅ Alert for user
  Bot.sendMessage("*✅ Screenshot received. We will verify and update you soon*.");

  // 📤 Forward to Admin
  Api.sendPhoto({
    chat_id: adminId,
    photo: request.photo[request.photo.length - 1].file_id, // Highest quality
    caption:
      "🆕 New Payment Screenshot\n" +
      "👤 User: " + user.first_name + "\n" +
      "🆔 ID: `" + user.telegramid + "`", // Monospace ID
    parse_mode: "Markdown"
  });
} else {
  Bot.sendMessage("❌ Please send a *screenshot* of the payment.");
  Bot.runCommand("await_screenshot");
}
