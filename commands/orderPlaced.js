/*CMD
  command: orderPlaced
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

// Parse incoming data
let data;
try {
  data = JSON.parse(content);
} catch (e) {
  Bot.sendMessage("❌ Invalid order data format");
  return;
}

// Get order details from user properties
let price = User.getProperty("order_price");
let quantity = User.getProperty("order_quantity");
let userId = User.getProperty("order_userid");
let link = User.getProperty("order_link");
let userName = user.first_name || "User";
let service = User.getProperty("order_service") || "Instagram Likes"; // Optional dynamic service

// Validate required fields
if (!price || !quantity || !userId || !link) {
  Bot.sendMessage("❌ Missing order details. Please try again.");
  return;
}

// 🛒 Process order
if (data.order) {
  try {
    // Deduct balance
    let balanceRes = ResLib.anotherUserRes("balance", userId);
    let currentBalance = balanceRes.value();
    let newBalance = currentBalance - price;

    if (currentBalance < price) {  
      Bot.sendMessage("❌ Insufficient balance for this order");  
      return;  
    }  

    balanceRes.set(newBalance);  

    // ✅ Send confirmation to user  
    Api.sendPhoto({  
      chat_id: userId,  
      photo: "https://i.ibb.co/Kp75ZxWd/20250627-115954.jpg",  
      caption:  
        `🧑‍💻 *Your Order Submitted*\n\n` +  
        `👉 *Service*: ${service}\n` +  
        `🎉 *Order ID*: ${data.order}\n` +  
        `📊 *Quantity*: ${quantity}\n` +  
        `💰 *Deducted*: ${price.toFixed()}\n` +  
        `💵 *Remaining Balance*: Rs ${newBalance.toFixed()}`,  
      parse_mode: "Markdown",  
      reply_markup: {  
        inline_keyboard: [  
          [  
            {  
              text: "🧡 Check Details",  
              url: "https://t.me/VIP3RxPROOF"  
            }  
          ]  
        ]  
      }  
    });  

    // 📢 Send LOG to channel  
    let logMessage =  
      `✅* New Order Received By ${userName}*\n\n` +  
      `🆔* Order ID : ${data.order}*\n\n` +  
      `💻* Service Name: ${service}*\n\n` +  
      `📊* Quantity : ${quantity} Likes ♥️*\n\n` +  
      `🔗* Link: ${link}*\n\n` +  
      `🤩 *Buy At Cheapest Rate From*\n➡️ @Exachbot`;  
    Api.sendMessage({  
      chat_id: "@XSACHLOG",  
      text: logMessage,  
      parse_mode: "Markdown",  
      reply_markup: {  
        inline_keyboard: [  
          [  
            {  
              text: "🛒 ORDER NOW",  
              url: "https://t.me/Exachbot"  
            }  
          ]  
        ]  
      }  
    });

  } catch (e) {
    console.log("Order processing error:", e);
    Bot.sendMessage("❌ Failed to process order. Contact support.");
  }
} else if (data.error) {
  Bot.sendMessage(`❌ *Order Failed:*\n${data.error}`);
} else {
  Bot.sendMessage("⚠️ Unexpected response from the SMM panel.");
}
