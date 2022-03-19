const { Client, Message, Collection, MessageEmbed } = require("discord.js");
const { Prefix } = require("../../Structures/config.json");

module.exports = {
  name: "messageCreate",
  /**
   * @param {Client} client
   * @param {Message} message
   */
  async execute(message, client, Discord) {
    if (!message.content.startsWith(Prefix) || message.author.bot) return;

    const args = message.content.slice(Prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLocaleLowerCase();
    const command =
      client.commands.get(commandName) ||
      client.commands.find(
        (cmd) => cmd.aliases && cmd.aliases.includes(commandName)
      );

    if (!command) return;

    if (command.permission) {
      const authorPerms = message.channel.permissionsFor(message.author);
      if (!authorPerms || !authorPerms.has(command.permission)) {
        const NoPermsEmbed = new MessageEmbed()
          .setColor("#e81224")
          .setDescription(
            "🟥 | You don't have the required permission to use this command"
          );
        return message.reply({ embeds: [NoPermsEmbed] }).then((sent) => {
          setTimeout(() => {
            sent.delete();
          }, 2500);
        });
      }
    }


    try {
      command.execute(message, args, commandName, client, Discord);
    } catch (error) {
      console.log(error);
      const ErrorEmbed = new MessageEmbed()
        .setColor("#e81224")
        .setDescription("🟥 | An error occurred whilst running this command");
      message.reply({ embeds: [ErrorEmbed] });
    }
  },
}; //Credit to Roald Dahl#5787 on discord
