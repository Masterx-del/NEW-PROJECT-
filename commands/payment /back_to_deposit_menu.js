/*CMD
  command: back_to_deposit_menu
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

if (request.data == "back_to_deposit_menu") {
  Api.editMessageMedia({
    chat_id: chat.chatid,
    message_id: request.message.message_id,
    media: {
      type: "photo",
      media: "https://i.ibb.co/Zpxcv8bh/20250626-004351.jpg",
      caption:
        "👋 *Welcome!*\nHere You Can Add Funds To Your Balance!\n\n" +
        "1 INR = ₹1\n1 INR (UPI) = ₹1\n\n" +
        "➕ *Select Deposit Method*, All deposits will be converted to ₹",
      parse_mode: "Markdown"
    },
    reply_markup: {
      inline_keyboard: [
        [
          { text: "𝗣𝗔𝗬𝗧𝗠 💎", callback_data: "deposit_paytm" },
          { text: "𝗨𝗣𝗜 🏦", callback_data: "deposit_upi" }
        ],
        [
          { text: "⬅️ 𝗕𝗔𝗖𝗞", callback_data: "back_to_main" }
        ]
      ]
    }
  });
}
