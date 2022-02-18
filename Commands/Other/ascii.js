const { CommandInteraction, MessageEmbed } = require("discord.js");
const figlet = require("figlet");
const { promisify } = require("util");
const figletAsync = promisify(figlet);

module.exports = {
    name: "ascii",
    description: "Ascii Art!",
    options: [
        {
            name: "text",
            description: "Text",
            type: 'STRING',
            required: true
        }
    ],
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    async execute(interaction) {
        let Content = interaction.options.getString("text");
        let Result = await figletAsync(Content);

        let embed = new MessageEmbed()
        .setColor("GREEN")
        .setDescription("```" + Result + "```")
        .setTimestamp();

        if(Content.length > 20) return await interaction.reply(`Please Make Shorter! | Limit : 20`);
        await interaction.reply({ embeds: [embed] });
    }
}