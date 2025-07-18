/*CMD
  command: reply_ticket
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

let ticket_id = params;

Bot.setProperty("reply_ticket_id", ticket_id, "string");

Bot.runCommand("admin_reply"); // Go to reply file directly
