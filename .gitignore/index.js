const Discord = require('discord.js');
const bot = new Discord.Client({autoReconnect: true});
bot.login('NDE4NTEwNjE5NDE5ODY5MTg1.DXnP1w.cn1vN0y-LC074t4UpcbNJ0s5zZA');

bot.on('ready', function () {
	bot.user.setStatus("offline")
	bot.user.setActivity('7 servers - 118 users')
	console.log(' ');
	console.log(' Votre bot est en ligne!');
})

bot.on('message', message => {
  if (message.content === 'n@ping-') {
    message.reply('**Pong !**').then(msg => {msg.delete(5000)})
    message.delete();
  }
});

bot.on('message', message => {
  if (message.content === 'n@invite') {
    message.reply('Voici le discord: **https://discord.gg/8dcX5DU**').then(msg => {msg.delete(10000)})
    message.delete();
  }
});

bot.on('guildMemberAdd', member => {
  member.createDM().then(channel => {
    return channel.send('Bienvenue ' + member.displayName + 'sur ce serveur!')
  }).catch(console.error)
})

bot.on('message', message => {
  if (message.content === 'n@updateserver') {
  	message.delete();
  	bot.user.setGame('7 servers - 109 users')
  }
})

bot.on('message', message => {
  if (message.content === 'n@help') {
  	message.delete();
    message.reply('Regardé vos messages privés!').then(msg => {msg.delete(5000)})
    message.author.sendMessage({embed})
  }
})


bot.on('ready', () => {
  bot.on('message', message => {
    if (message.content == 'n@clear') {


      if (!message.channel.permissionsFor(message.author).hasPermission("MANAGE_MESSAGES")) {
        message.channel.sendMessage("Vous n'avez pas la permissions d'executer cette commande: \""+message.content+"\"").then(msg => {msg.delete(5000)})
        console.log("Sorry, you don't have the permission to execute the command \""+message.content+"\"");
        return;
      } else if (!message.channel.permissionsFor(bot.user).hasPermission("MANAGE_MESSAGES")) {
        message.channel.sendMessage("Vous n'avez pas la permissions d'executer cette commande: \""+message.content+"\"").then(msg => {msg.delete(5000)})
        console.log("Sorry, I don't have the permission to execute the command \""+message.content+"\"");
        return;
      }

      if (message.channel.type == 'text') {
        message.channel.fetchMessages()
          .then(messages => {
            message.channel.bulkDelete(messages);
            messagesDeleted = messages.array().length; 

            message.channel.sendMessage("Selection..").then(msg => {msg.delete(50)})
            message.channel.sendMessage(":bomb: `"+messagesDeleted+"` Messages ont été supprimés.").then(msg => {msg.delete(3000)})
            console.log(":bomb: `"+messagesDeleted+"` Messages ont été supprimés.")
          })
          .catch(err => {
            console.log('Error Clear');
            console.log(error);
          });
      }
    }
  });
});

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







