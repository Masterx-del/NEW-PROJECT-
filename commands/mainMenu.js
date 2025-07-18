/*CMD
  command: mainMenu
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

const isReferred = RefLib.getAttractedBy();

if (isReferred) {
    // define a variable to check if bonus given or not
    const isBonusGiven = User.getProperty("isBonusGiven");

    if (!isBonusGiven) {
        // define user balance
        const balance = ResLib.anotherUserRes("balance", isReferred.telegramid);
        
        balance.add(50);
        
        User.setProperty("isBonusGiven", true, "boolean");
    }
}
if (User.getProperty("balance") === undefined) {
    User.setProperty("balance", 0.0, "float"); // Fixed: Removed leading zeros
}

if (message === "Order 🛍️") {
    handleOrderCommand(user.telegramid);
    return;
}

function handleOrderCommand(userId) {
    Bot.sendMessage("🛍️ Send your order in this format:\n\n*link quantity*\n\nExample:\nhttps://instagram.com/test 100");
    Bot.runCommand("processOrder");
}

// Handle inline keyboard callbacks
function onCallbackQuery(userId, callbackData) {
    if (callbackData.startsWith("order_instagram")) {
        handleInstagramOrder(userId);
    }
    else if (callbackData.startsWith("ig_service_101")) { // Followers service ID
        handleFollowersOrder(userId, callbackData.split("_")[2]);
    }
    else if (callbackData.startsWith("confirm_")) {
        const [_, quantity, price] = callbackData.split("_");
        confirmFollowersOrder(userId, quantity, price);
    }
    // ... other cases
}

// send message with keyboard
Bot.sendKeyboard(
  "𝗢𝗥𝗗𝗘𝗥 🛍️ \n𝗕𝗔𝗟𝗔𝗡𝗖𝗘 🔰, 𝗥𝗘𝗙𝗘𝗥 🫂\n𝗦𝗧𝗔𝗧𝗨𝗦 ⏳, 𝗥𝗘𝗗𝗘𝗘𝗠 𝗖𝗢𝗗𝗘 ♻️,\n𝗕𝗢𝗡𝗨𝗦 🎉,𝗔𝗗𝗗 𝗙𝗨𝗡𝗗 ➕\n𝗛𝗘𝗟𝗣 📞,",
  "              *Hello Sir / madam* 👋\n\n*Welcome To Our Bot.Here Important\n                   Note For You..\n\n🔰 Only Public Account Accepted ✅\n🔰 Private Account ❌\n🔰 No Refund If Private Account ⚠️*",
  { parse_mode: "Markdown" }
);
