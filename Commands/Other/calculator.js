const { Client, CommandInteraction, MessageEmbed } = require("discord.js");
const { Calculator } = require('slash-calculator');

module.exports = {
    name: "calculator",
    description: "Use a calculator and find your answer!",
    usage: "/calculator",
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    async execute(interaction,err) {
        await Calculator({
            interaction: interaction,
            embed: {
                title: 'Calculator',
                color: '#5865F2',
                footer: '',
                timestamp: true
            },
            disabledQuery: 'Calculator is disabled!',
            invalidQuery: 'The provided equation is invalid!',
            othersMessage: 'Only <@{{author}}> can use the buttons!'
        });

    }
}