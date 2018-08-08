// Write your code in this file!
function getUKTime(){
  var result = new Date().getHours() + 5;
  return result;
}

getUKTime();

function discountTicket(originalPrice){
  return originalPrice * .8;
}

function tweetReply(name){
  return "Hey " + name + ", thanks so much for the support! I really appreciate it!";
}