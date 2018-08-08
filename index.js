// Write your code in this file!
function getUKTime() {
 var time = new Date().getHours() + 5; 
 return time; 
}

function discountTicket(amount) {
  var newAmount = amount * .80; 
  return newAmount; 
}

function tweetReply(name) {
  var tweet = `Hey ${name}, thanks so much for the support! I really appreciate it!`; 
  return tweet; 
}

