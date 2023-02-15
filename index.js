const Discord = require('discord.js');
const bot = new Discord.Client(),
      {log, clear, error} = console,
      fs = require('fs');
const config = require('./private/config.json');


bot.commands = new Discord.Collection();

fs.readdir('../dc_bot/BotCommands', (error, files)=>{

    if(error) log(error);

    for(const file of files){

        const command = require(`./BotCommands/${file}`);
        bot.commands.set(command.name, command);
    }

});


bot.once('ready', ()=>{

    log("The bot is up!");

});


bot.on('message', (message)=>{

    if(message.author.bot) return;
    if(!message.content.startsWith("!"))return;

    const args = message.content.slice("!".length).split(/ +/);
    const command = args.shift();
    
    try {

    bot.commands.get(command).execute(message, args);

    } catch (e){

        message.reply("Command not found!");
    }

});

bot.on('guildBanAdd', (guild, user) => {


    const channel = bot.channels.find('name', "server-logs");

    channel.send(`@${user} was banned from ${guild}`);

});


bot.login(config.key);