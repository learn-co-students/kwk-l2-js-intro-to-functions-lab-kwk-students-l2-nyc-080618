// Write your code in this file!
function getUKTime() {
  var result = new Date().getHours() + 5;
  return result;
}

getUKTime();

function discountTicket(orginialPrice) {
  var newPrice = orginialPrice*0.8;
  return newPrice;
}

discountTicket();

function tweetReply(fanName) {
  var tweet = "Hey " + fanName + ", thanks so much for the support! I really appreciate it!"
  return tweet;
}

tweetReply("Claire");