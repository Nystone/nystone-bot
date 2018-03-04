const Discord = require('discord.js');
const bot = new Discord.Client({autoReconnect: true});
bot.login('NDE4NTEwNjE5NDE5ODY5MTg1.DXnP1w.cn1vN0y-LC074t4UpcbNJ0s5zZA');

bot.on('ready', function () {
	bot.user.setStatus("offline")
	bot.user.setActivity('7 servers - 118 users')
	console.log(' ');
	console.log(' Votre bot est en ligne!');
})








