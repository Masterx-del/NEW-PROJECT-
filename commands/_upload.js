/*CMD
  command: /upload
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

let folderId = "1-t0uiSHvIsx3gNozUxAPuTun5Eur66qP";

function uploadCSV(fileName, content) {
  HTTP.post({
    url: "https://api.bots.business/uploadCSV",
    body: {
      folderId: folderId,
      fileName: fileName,
      content: content
    },
    success: function(response) {
      Bot.sendMessage(`✅ Uploaded: ${fileName}`);
    },
    error: function(e) {
      Bot.sendMessage(`❌ Failed to upload ${fileName}`);
    }
  });
}

// Upload total orders
let totalCsv = Bot.getProperty("CSV_TotalOrders");
if (totalCsv) {
  uploadCSV("total_orders.csv", totalCsv);
}

// Upload each user's orders
let allUsers = Bot.getProperty("userList") || [];
allUsers.forEach(function(userId) {
  let userCsv = Bot.getProperty("CSV_UserOrders_" + userId);
  if (userCsv) {
    uploadCSV(`user_${userId}.csv`, userCsv);
  }
});
