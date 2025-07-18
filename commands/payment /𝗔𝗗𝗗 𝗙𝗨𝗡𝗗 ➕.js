/*CMD
  command: 𝗔𝗗𝗗 𝗙𝗨𝗡𝗗 ➕
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

let userName = user.first_name || "User";

let msg = `👋 *Welcome ${userName}!*\nHere You Can Add Funds To Your Balance!\n\n` +
          `1 INR = ₹1\n1 INR (UPI) = ₹1\n\n` +
          `➕ *Select Deposit Method*, All deposits will be converted to ₹`;

Api.sendPhoto({
  photo: "https://i.ibb.co/Zpxcv8bh/20250626-004351.jpg",  // aapka deposit image
  caption: msg,
  parse_mode: "Markdown",
  reply_markup: {
    inline_keyboard: [
      [
        { text: "💎 PAYTM", callback_data: "deposit_paytm" },
        { text: "🏧 UPI", callback_data: "deposit_upi" }
      ]
    ]
  }
});

