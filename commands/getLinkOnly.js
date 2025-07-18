/*CMD
  command: getLinkOnly
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

// getLinkOnly

let link = message.trim();

// ✅ Basic validation
if (!link.includes("instagram.com")) {
  Bot.sendMessage("❌ *Invalid link. Please send a valid Instagram profile URL.*");
  return;
}

// Save link and ask for quantity next
User.setProperty("order_link", link, "string");
Bot.sendMessage("🔢 *NOW SEND THE QUANTITY (Min. 10)*");

Bot.runCommand("getQuantityOnly");
