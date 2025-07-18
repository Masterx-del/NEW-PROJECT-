/*CMD
  command: admin_reply
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Support 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

let ticket_id = Bot.getProperty("reply_ticket_id");
if (!ticket_id) return;

let user_id = Bot.getProperty("ticket_user_" + ticket_id);
if (!user_id) {
  Bot.sendMessage("❌ Ticket not found or expired.");
  return;
}

Bot.sendMessage("✍️  *REPLY FOR TICKET ID* : `" + ticket_id + "`", { parse_mode: "Markdown" });
Bot.run({
  command: "send_reply_message", // Go to next step after this message
  options: { ticket_id: ticket_id }
});
