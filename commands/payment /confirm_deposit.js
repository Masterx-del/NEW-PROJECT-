/*CMD
  command: confirm_deposit
  help: 
  need_reply: false
  auto_retry_time: 
  folder: payment 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

if (request.data == "confirm_deposit") {
  Bot.sendMessage("*🏦 Send Payment Full Screenshot*");
  Bot.runCommand("await_screenshot");
}

