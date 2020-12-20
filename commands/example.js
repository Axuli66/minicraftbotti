module.exports = {
  name: "example",
  description: "Example Command",
  args: false,
  usage: "", 
  guildOnly: true,
  cooldown: 5,
  execute(message, args) {
    message.channel.send("Example.");
  },
};
