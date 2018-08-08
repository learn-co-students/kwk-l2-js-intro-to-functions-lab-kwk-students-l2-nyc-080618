// Write your code in this file!

new Date().getHours() 

function getUKTime(){
  var result = new Date().getHours() + 5
  return (result);
}
getUKTime();

function discountTicket(originalPrice){
  var result = originalPrice - (originalPrice*0.20);
  return (result);
}

discountTicket();

function tweetReply(userName){
  var result = "Hey " + userName + ", thanks so much for the support! I really appreciate it!";
  return (result);
}
tweetReply();