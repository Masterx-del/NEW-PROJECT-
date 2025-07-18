/*CMD
  command: 𝗕𝗢𝗡𝗨𝗦 🎉
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

let lastClaim = User.getProperty("lastRewardTime");
let now = Date.now();
let waitHours = 24;
let rewardAmount = 30;

if (lastClaim && now - lastClaim < waitHours * 60 * 60 * 1000) {
  let remaining = Math.ceil(((lastClaim + waitHours * 3600000) - now) / 3600000);
  Bot.sendMessage(`*⏳ ALREADY CLAIMED *\n\n🕒* Try again in ${remaining} hour(s).*`);
  return;
}

// ✅ Give reward
let uid = user.telegramid || user.id;
let balanceRes = ResLib.anotherUserRes("balance", uid);
balanceRes.add(rewardAmount);

// ✅ Save claim time
User.setProperty("lastRewardTime", now, "integer");

Bot.sendMessage(`🎉 *You've Received ${rewardAmount.toFixed()} As Daily Reward!*\n\n🔰* NEW BALANCE:* ${balanceRes.value().toFixed()}`);

