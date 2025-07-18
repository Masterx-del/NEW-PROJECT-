/*CMD
  command: checkStatusById
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

let orderId = message.trim();
let api_key = "fb718f2a23ec8fe8776e60626262d3a1";
let api_url = "https://airsmm.com/api/v2";
// Send request to check status
HTTP.post({
  url: api_url,
  body: {
    key: api_key,
    action: "status",
    order: orderId
  },
  success: "showOrderStatus"
});
