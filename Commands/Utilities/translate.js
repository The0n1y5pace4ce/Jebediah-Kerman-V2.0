const translate = require(`@iamtraction/google-translate`);
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'translate',
    description: 'translate any word to any languge you want',
    options: [
        {
            name: 'lang_name',
            description: 'the languge to translate to',
            type: 'STRING',
            required: true,
        },
        {
            name: 'the_message',
            description: 'the message to translate ',
            type: 'STRING',
            required: true,
        },
    ],
    async execute(interaction, args, client) {
        const la = interaction.options.getString(`lang_name`);
        const msg = interaction.options.getString(`the_message`);

        translate(msg, { to: la })
            .then((res) => {
                var ee = new MessageEmbed()
                    .setTitle(`Translate`)
                    .setColor(`BLUE`)
        .setTimestamp()
                    .addField(`Before : `, `${msg}`)
                    .addField(`After : `, `${res.text}`)
                    .addField(`Language : `,`${la} `)
                interaction.reply({ embeds: [ee] });
            })
            .catch((err) => {
                interaction.reply({ content: `${err.message}` });
            });
    },
};