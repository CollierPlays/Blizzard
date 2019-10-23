require("dotenv").config();
const { CommandoClient } = require("discord.js-commando");
const path = require("path");

const client = new CommandoClient({
  commandPrefix: "b?",
  unknownCommandResponse: false,
  disableEveryone: false
});

client.registry
  .registerDefaultTypes()
  .registerGroups([["fun"], ["moderation"]])
  .registerDefaultGroups()
  .registerDefaultCommands()
  .registerCommandsIn(path.join(__dirname, "commands"));

client.on("ready", () => {
  console.log("Logged in!");
  client.user.setActivity("Blizzard | Server Moderation");
});

client.login();
