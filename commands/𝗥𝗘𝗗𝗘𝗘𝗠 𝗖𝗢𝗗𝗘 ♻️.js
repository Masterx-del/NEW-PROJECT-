/*CMD
  command: 𝗥𝗘𝗗𝗘𝗘𝗠 𝗖𝗢𝗗𝗘 ♻️
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

Bot.sendMessage("🔰 *ENTER YOUR REDEEM CODE 🔰*", {
  parse_mode: "Markdown"
});
Bot.runCommand("check_redeem");

