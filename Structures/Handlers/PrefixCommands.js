const { Perms } = require("../Validation/Permissions");
const { Client } = require("discord.js");
/**
 * @param {Client} client
 */
module.exports = async (client, PG, Ascii) => {
  const Table = new Ascii("Prefix Commands");

  CommandsArray = [];

  (await PG(`${process.cwd()}/PrefixCommands/**/*.js`)).map(async (file) => {
    const command = require(file);

    if (!command.name)
      return Table.addRow(file.split("/")[7], "🟥 Missing a name");

    if (!command.type && !command.description)
      return Table.addRow(command.name, "🟥 Missing a description");

    if (command.permission) {
      if (Perms.includes(command.permission)) command.defaultPermission = false;
      else return Table.addRow(command.name, "🟥 Permission is invalid");
    }

    client.commands.set(command.name, command);
    CommandsArray.push(command);

    Table.setHeading(`Name`, `Status`);
    await Table.addRow(command.name, "🟩 Success");
  });
  console.log(Table.toString());
};
//Credit to Roald Dahl#5787 on discord
