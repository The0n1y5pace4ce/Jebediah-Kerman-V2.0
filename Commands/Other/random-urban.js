const urban = require('urban');
const { Discord, CommandInteraction, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'random-urban',
    description: 'gives urban dictionary definiton of a random word',
    execute(interaction) {
        urban.random().first(json => {
            const def = new MessageEmbed()
                .setTitle(json.word)
                .setDescription(json.definition)
                .addField('Upvotes', `${json.thumbs_up}`, true)
                .addField('Downvotes', `${json.thumbs_down}`, true)
                .setTimestamp(new Date())
                .setFooter(`Written by ${json.author}`);

            interaction.reply({embeds: [def]});
        });
    },
};