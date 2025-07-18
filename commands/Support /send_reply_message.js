/*CMD
  command: send_reply_message
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

let ticket_id = options.ticket_id;
let user_id = Bot.getProperty("ticket_user_" + ticket_id);
if (!user_id) {
  Bot.sendMessage("❌ User ID not found.");
  return;
}

let reply_text = message;

Api.sendMessage({
  chat_id: user_id,
  text: `*🗒️ ADMIN REPLY*\n*🆔 TICKET ID - ${ticket_id}*\n\n*📝 MESSAGE : ${reply_text}*`,
  parse_mode: "Markdown"
});

Bot.sendMessage("✅ REPLY SENT TO TICKET ID: `" + ticket_id + "`", { parse_mode: "Markdown" });
Bot.setProperty("reply_ticket_id", null);
