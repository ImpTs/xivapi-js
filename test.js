const XIVAPI = require('./XIVAPI'),
	readline = require('readline')

const xiv = new XIVAPI('yourAPIkey', {snake_case: true})

let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	terminal: false
}).on('line', function (cmd) {
	console.log(eval(cmd))
})
