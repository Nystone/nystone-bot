const bot = new Discord.Client({autoReconnect: true});
bot.login('NDE4NTEwNjE5NDE5ODY5MTg1.DXnP1w.cn1vN0y-LC074t4UpcbNJ0s5zZA');

bot.on('ready', function () {
	bot.user.setStatus("offline")
	bot.user.setActivity('7 servers - 118 users')
	console.log(' ');
	console.log(' Votre bot est en ligne!');
})

bot.on('message', message => {
  if (message.content === 'n@help') {
  	message.delete();
    message.reply('Regardé vos messages privés!').then(msg => {msg.delete(5000)})
    message.author.sendMessage({embed})
  }
})

const embed = new Discord.RichEmbed()
  .setTitle("vous pouvez retrouvé plus d'information en cliquant ici.")
  .setAuthor("NystoneurBOT", "https://i.goopics.net/r8xa4.png")
  .setColor(0x00AE86)
  .setDescription("This robot is created to do all the tasks that can make a robot on discord, a command is not there yet, no problem inform us we add! \n\n\n\nHere are commands:\n\n\nn@help | View operating aids\n\nn@clear | delete the trade show messages (50 messages maximum)\n\nn@ping | See the time it takes for the robot to answer you\n\nn@invite | join the developer discord.\n\n\nBon Jeu!\n")
  .setThumbnail("http://i.imgur.com/yVpymuV.png")
  .setTimestamp()
  .setURL("https://discordbots.org/bot/418510619419869185")

  bot.on('message', message => {
  if (message.content === 'n@ping') {
    message.reply(':ping_pong: **Pong !**').then(msg => {msg.delete(3000)})
    message.delete();
  }
})







