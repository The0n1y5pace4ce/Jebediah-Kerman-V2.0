const  { MessageEmbed, CommandInteraction, Interaction, Message } = require("discord.js"); 

module.exports = {
    name: 'random',
    description: 'Make the bot choose a random number',
    options: [
        {
          name: 'range',
          description: 'select a max number for the bot ',
          type: "INTEGER",
          required: true,

        }
    ],
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    execute(interaction) {

    const { options } = interaction;

    const range = options.getInteger("range");

const rangenum = (Math.floor(Math.random() * range));

const randEmbed = new MessageEmbed()
        .setTitle("Your random number is...")
        .setColor("RED")
        .setDescription(`${rangenum}!`)

        interaction.reply({embeds: [randEmbed]})
    }
}