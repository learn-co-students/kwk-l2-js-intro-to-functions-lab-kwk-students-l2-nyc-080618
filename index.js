// Write your code in this file!

function getUKTime() {
var Uktime= new Date().getHours() + 5
return (Uktime); 
}
 
getUKTime(); 

function discountTicket(originalticket){
  var discounttick= (originalticket -(originalticket*0.2)); 
  return (discounttick); 
}

discountTicket(); 

function tweetReply (fanName){
  var thankYou = "Hey " + fanName + ", thanks so much for the support! I really appreciate it!"; 
  return (thankYou); 
}

tweetReply(); 