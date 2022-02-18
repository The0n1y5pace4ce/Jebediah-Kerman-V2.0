//  GNU General Publice Lisence v3.0 - https://www.gnu.org/licenses/gpl-3.0.en.html
//  Credit to: Wilson#0159 on Discord.
//  Removal of this header breaches the license agreement.
//  For more info, refer to the license page linked at the top.

const { CommandInteraction, MessageEmbed } = require("discord.js");

module.exports = {
    name: "bugreport",
    description: "Report any bugs or issues with the bot.",
    options: [
        {
            name: "type",
            description: "Choose type of bug.",
            type: "STRING",
            required: true,
            choices: [
                { name: "command", value: "Command" },
                { name: "event", value: "Event" },
                { name: "misc", value: "Misc" }
            ],
        },
        {
            name: "name",
            description: "Provide the name of the command, the event or the misc error.",
            type: "STRING",
            required: true
        },
        {
            name: "description",
            description: "Provide a description of the bug",
            type: "STRING",
            required: true
        }
    ],
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    async execute(interaction) {
        const { options } = interaction;
        const type        = options.getString("type");
        const name        = options.getString("name");
        const description = options.getString("description");
        
        const response    = new MessageEmbed()
            .setTitle("Bug Report")
            .addFields(
                {name: "Type:", value: `${type}`, inline: true},
                {name: "Name:", value: `${name}`, inline: true},
                {name: "Description", value: `${description}`}
            );

        interaction.reply({embeds: [response]});
    }
}