module.exports = {
    name: "warn",
    description: "warns people",
    args: false,
    usage: "", 
    guildOnly: true,
    cooldown: 5,
    execute(message, args) {
      message.channel.send(":x: looks like you dont have permissions to execute that command :x:");
      message.channel.send(":x: You need permission: KICK_MEMBERS to execute that command :x:")
      console.log("Error PERMISSION has not validated") //idk how to make this to work lol
    },
  };
  