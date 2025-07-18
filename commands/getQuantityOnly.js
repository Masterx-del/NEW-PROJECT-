/*CMD
  command: getQuantityOnly
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

// getQuantityOnly

let quantity = parseInt(message.trim());
if (isNaN(quantity) || quantity <= 0) {
  Bot.sendMessage("❌ *Invalid quantity. Please send a number like 100*");
  return;
}

let link = User.getProperty("order_link");

// 📦 API Settings
let api_key = "8bdff6669da184621e9c24d02de2e29b";
let api_url = "https://airsmm.com/api/v2";
let service_id = 2418;
let price_per_1k = 1000;
let userId = user.telegramid || user.id;

let balanceRes = ResLib.anotherUserRes("balance", userId);
let currentBalance = balanceRes.value();
let price = (quantity / 1000) * price_per_1k;

// 🧮 Check balance
if (currentBalance < price) {
  Bot.sendMessage(`❌ *INSUFFICIENT BALANCE*.\n\n🔰 *YOUR BALANCE: ${currentBalance.toFixed(2)}*\n🛒 *NEEDED: ${price.toFixed(2)}*`);
  return;
}

// 💾 Save data
User.setProperty("order_price", price, "float");
User.setProperty("order_quantity", quantity, "integer");
User.setProperty("order_userid", userId, "integer");

// 🚀 Send to API
HTTP.post({
  url: api_url,
  body: {
    key: api_key,
    action: "add",
    service: service_id,
    link: link,
    quantity: quantity
  },
  success: "orderPlaced"
});


