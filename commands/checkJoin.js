/*CMD
  command: checkJoin
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

Api.getChatMember({
  chat_id: "@Instagramfreefollowersrx",
  user_id: user.telegramid,
  on_result: "checkJoinStatus"
});
