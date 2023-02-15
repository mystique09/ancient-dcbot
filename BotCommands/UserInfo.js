const { MessageEmbed } = require("discord.js");

delete eval;

const Discord = require('discord.js'),
      embed = new Discord.MessageEmbed().setTitle('User Info');  

module.exports = {
    "name" : "user",
    "description" : "Get User Info.",
    execute(message, args){
    
        message.reply(embed);
        console.log(message);
    }
};