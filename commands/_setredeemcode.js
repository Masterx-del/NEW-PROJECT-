/*CMD
  command: /setredeemcode
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

if (user.telegramid != 7849699181) {
  Bot.sendMessage("⛔ Not authorized.");
  return;
}

// Use params instead of message
let parts = params.split(" ");
let code = parts[0]?.toUpperCase();
let amount = parseInt(parts[1]);
let timeStr = parts[2]?.toLowerCase();

if (!code || isNaN(amount) || !timeStr) {
  Bot.sendMessage("❌ Usage:\n/setredeemcode CODE AMOUNT TIME\n\nExamples:\n/setredeemcode BOOST10 50 60min\n/setredeemcode BONUS 25 2hours", {
    parse_mode: "Markdown"
  });
  return;
}

// 🧠 Flexible time parser
let minutes = 0;

if (timeStr.endsWith("min") || timeStr.endsWith("mins")) {
  minutes = parseInt(timeStr.replace(/mins?/, ""));
} else if (
  timeStr.endsWith("h") ||
  timeStr.endsWith("hr") ||
  timeStr.endsWith("hrs") ||
  timeStr.endsWith("hour") ||
  timeStr.endsWith("hours")
) {
  let hrs = parseFloat(timeStr.replace(/h(rs?|our|ours)?/, ""));
  minutes = Math.round(hrs * 60);
} else if (!isNaN(parseInt(timeStr))) {
  minutes = parseInt(timeStr); // plain number
} else {
  Bot.sendMessage("⚠️ Invalid time format. Use formats like `30min`, `2hrs`, `1h`, `3hours`", {
    parse_mode: "Markdown"
  });
  return;
}

if (isNaN(minutes) || minutes <= 0) {
  Bot.sendMessage("❌ Invalid time. Use at least 1 minute.");
  return;
}

// ⏳ Expiration timestamp in ms
let expire = Date.now() + minutes * 60 * 1000;

// Store code
let data = {
  amount: amount,
  expires: expire,
  multi: true
};

Bot.setProperty(code, data, "json");

Bot.sendMessage(`✅ Code *${code}* created!\n💸 ${amount}\n⏰ Valid for ${minutes} min\n🌐 Multi-use`, {
  parse_mode: "Markdown"
});

