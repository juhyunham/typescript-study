function sendGreeting (message = '', userName = 'there'):void {
	console.log(`${message}, ${userName}`)
}

sendGreeting()
sendGreeting(`Good morning`)
sendGreeting(`Good afternoon`, `Jenny`)