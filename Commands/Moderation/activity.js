//  GNU General Publice Lisence v3.0 - https://www.gnu.org/licenses/gpl-3.0.en.html
//  Credit to: Wilson#0159 on Discord.
//  Removal of this header breaches the license agreement.
//  For more info, refer to the license page linked at the top.

const { Client, MessageEmbed, CommandInteraction } = require('discord.js');

module.exports = {
    name: 'activity',
    description: 'Sets the activity for the bot. (Only for devs)',
    permission: 'ADMINISTRATOR',
    options: [
        {
            name: 'type',
            description: 'Choose between adding or removing the role from member.',
            type: 'STRING',
            required: true,
            choices: [
                {name: 'add', value: 'add'},
                {name: 'remove', value: 'remove'},
            ],
        },
        {
            name: 'activity',
            description: 'Choose the activity.',
            type: 'STRING',
            required: false,
            choices: [
                { name: 'WATCHING', value: 'WATCHING'},
                { name: 'PLAYING', value: 'PLAYING' },
                { name: 'LISTENING', value: 'LISTENING' },
            ],
        },
        {
            name: 'text',
            description: 'Enter activity text.',
            type: 'STRING',
            required: false,
        },
    ],
    /**
     * @param {CommandInteraction} interaction 
     * @param {client} Client
     */
    async execute(interaction, client) {
        if (interaction.member.id === "656306365534437386") {
            const type     = interaction.options.getString('type');
            const activity = interaction.options.getString('activity');
            const text     = interaction.options.getString('text');

            switch (type) {
                case 'add':
                        client.user.setActivity({ type: `${activity}`, name: `${text}` });
                        interaction.reply({ content: `Done!`, ephemeral: true });
                    break;
                case 'remove': {
                        client.user.setPresence({ activity: null });
                        interaction.reply({ content: `Done!`, ephemeral: true });
                    break;
                }
            }
        }
    },
};