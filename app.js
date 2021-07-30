"use strict";
function sendGreeting(message, userName) {
    if (message === void 0) { message = ''; }
    if (userName === void 0) { userName = 'there'; }
    console.log(message + ", " + userName);
}
sendGreeting();
sendGreeting("Good morning");
sendGreeting("Good afternoon", "Jenny");
