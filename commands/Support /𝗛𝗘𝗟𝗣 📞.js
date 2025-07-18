/*CMD
  command: 𝗛𝗘𝗟𝗣 📞
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

Api.sendPhoto({
  photo: "https://i.ibb.co/zTkyXYt9/20250705-110112.jpg",  // Replace with your desired image
  caption: "*🎫 PLEASE TYPE YOUR MESSAGE HERE*",
  parse_mode: "Markdown"
});

Bot.runCommand("create_ticket");

