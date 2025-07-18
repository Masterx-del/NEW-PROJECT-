/*CMD
  command: checkJoinStatus
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

let status = options.result.status;
if (status == "member" || status == "administrator" || status == "creator") {
  Bot.runCommand("mainMenu");
} else {
  Bot.sendInlineKeyboard(
    [
      [{ title: "✅ JOIN PROMOTION GROUP", url: "https://t.me/Instagramfreefollowersrx" }],
      [{ title: "⚜️ Joined ⚜️", command: "checkJoin" }]
    ],
    "🚫 *You haven't joined yet! Please join and tap ⚜️ Joined ⚜️ again.*"
  );
}
