/*CMD
  command: showOrderStatus
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

let data = JSON.parse(content);

if (data.error) {
  Bot.sendMessage(`*❌ Error: ${data.error}*`);
  return;
}

Bot.sendMessage(`📄 *Order Status*\n\n✅ *Status:* ${data.status}\n📊 *Remains:* ${data.remains}`);

