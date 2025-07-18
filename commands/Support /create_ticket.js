/*CMD
  command: create_ticket
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Support 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

let ticket_id = Math.floor(Math.random() * 90000000) + 10000000;  // Unique 8-digit
let user_id = user.telegramid;
let msg = message;

// 💾 Save user ID for this ticket
Bot.setProperty("ticket_user_" + ticket_id, user_id, "string");

// ✅ Send confirmation to user
Bot.sendMessage(
  "✅* Your ticket has been created successfully!*\n\n" +
  "🎟️ *Ticket ID :* `" + ticket_id + "`\n" +
  "📩* Message* : " + msg + "\n\n" +
  "💡 *ADMIN WILL REPLY SOON 🔜.*",
  { parse_mode: "Markdown" }
);

// 📤 Notify Admin
let admin_id = 7849699181;  // Your Telegram ID
let admin_text =
  "📩 *New Ticket Received!*\n\n" +
  "👤 *User:* `" + user.first_name + "`\n" +
  "🆔 *Ticket ID:* `" + ticket_id + "`\n" +
  "📝 *Message:* " + msg;

let buttons = [
  [{ title: " REPLY ✅", command: "reply_ticket " + ticket_id }]
];

Bot.sendInlineKeyboardToChatWithId(admin_id, buttons, admin_text, { parse_mode: "Markdown" });
