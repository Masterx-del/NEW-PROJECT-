/*CMD
  command: /start
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

let adminId = 7849699181;
let promoChannel = "@Instagramfreefollowersrx";
let log_channel = "@XSACHLOG";

// ✅ REFERRAL SYSTEM SETUP
function onTouchOwnLink() {
  Bot.sendMessage("You can't refer yourself.");
}

function onAlreadyAttracted() {
  Bot.sendMessage("You've already started the bot or were referred.");
}

function onAttracted(byUser) {
  Bot.sendMessage(`You were referred by ${byUser.first_name}`);
  Bot.sendMessageToChatWithId(byUser.telegramid, `You referred ${user.first_name}`);

  let logMessage = 
    `👤 **New User Joined via Referral!**\n\n` +
    `✅ **Username:** @${user.username || "NoUsername"}\n` +
    `🆔 **User ID:** \`${user.telegramid}\`\n` +
    `🔰 **Name:** ${user.first_name}\n\n` +
    `🤝 **Referred by:** ${byUser.first_name} (@${byUser.username || "NoUsername"})`;

  Api.sendMessage({
    chat_id: log_channel,
    text: logMessage,
    parse_mode: "Markdown"
  });
}

if (typeof Reflib !== 'undefined') {
  Reflib.track({
    onTouchOwnLink: onTouchOwnLink,
    onAlreadyAttracted: onAlreadyAttracted,
    onAttracted: onAttracted
  });
}

// ✅ NORMAL USER JOIN LOG (NO REFERRAL)
let referrer = null;
try {
  referrer = Reflib.getReferrer ? Reflib.getReferrer() : (Reflib.getReferral ? Reflib.getReferral() : null);
} catch (e) {
  referrer = null;
}

if (!referrer) {
  let logMessage = 
    `👤 **New User Joined!**\n\n` +
    `✅ **Username:** @${user.username || "NoUsername"}\n` +
    `🆔 **User ID:** \`${user.telegramid}\`\n` +
    `🔰 **Name:** ${user.first_name}`;

  Api.sendMessage({
    chat_id: log_channel,
    text: logMessage,
    parse_mode: "Markdown"
  });
}

// ✅ BALANCE INITIALIZATION
if (User.getProperty("balance") === undefined) {
  User.setProperty("balance", 0.0, "float");
}

// ✅ BROADCAST LIST TRACKING
let broadcastList = Bot.getProperty("broadcastList", []);
if (!broadcastList.includes(user.telegramid)) {
  broadcastList.push(user.telegramid);
  Bot.setProperty("broadcastList", broadcastList, "json");
}

// ✅ IF ADMIN
if (user.telegramid === adminId) {
  Bot.sendMessage("👑 Welcome Admin!");
  Bot.runCommand("mainMenu");
  return;
}

// ✅ NORMAL USER: ASK TO JOIN CHANNEL
Bot.sendInlineKeyboard(
  [
    [{ title: "✅ JOIN PROMOTION GROUP", url: "https://t.me/Instagramfreefollowersrx" }],
    [{ title: "✅ JOIN PROMOTION GROUP", url: "https://t.me/XSACHLOG" }],
    [{ title: "⚜️ Joined ⚜️", command: "checkJoin" }]
  ],
  "💡* YOU MUST JOIN OUR CHANNEL FIRST*"
);

