/*CMD
  command: deposit_upi
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

if (request.data == "deposit_upi") {
  Api.editMessageMedia({
    chat_id: chat.chatid,
    message_id: request.message.message_id,
    media: {
      type: "photo",
      media: "https://i.ibb.co/LzK4tYLj/20250627-012531.jpg",
      caption: "🔝 *Send INR On This QR Code.*\nUsing Any UPI App\n\n *VISIT RATE LIST - @VIPZXXAMFUND*",
      parse_mode: "Markdown"
    },
    reply_markup: {
      inline_keyboard: [
        [
          { text: "✅ 𝗗𝗘𝗣𝗢𝗦𝗜𝗧", callback_data: "confirm_deposit" },
          { text: "⬅️ 𝗕𝗔𝗖𝗞", callback_data: "back_to_deposit_menu" }
        ]
      ]
    }
  });
}

