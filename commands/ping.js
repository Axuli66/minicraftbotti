const Discord = require('discord.js');

module.exports = {
    name: "ping",
    description: "Example Command",
    args: false,
    usage: "",
    guildOnly: true,
    cooldown: 5,
    execute(message, args) {
        
  
  message.channel.send("Pinging...").then(m =>{
    
      var ping = m.createdTimestamp - message.createdTimestamp;

    
      var embed = new Discord.MessageEmbed()
      .setAuthor(`Your ping is ${ping}`)
      .setColor("Pink")
      
      
      m.edit(embed)
  });
    },
  };