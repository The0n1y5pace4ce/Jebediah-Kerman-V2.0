const { MessageEmbed, CommandInteraction} = require('discord.js');

module.exports = {
    name: 'help',
    description: 'Get the commands of the bot!',
    options: [
        {
            name: 'type',
            description: 'Select the help commands type!',
            type: 'STRING',
            required: true,
            choices: [
                {
                    name: 'KSP commands',
                    value: 'ksphelp'
                },
                {
                    name: 'Fun commands',
                    value: 'funhelp',
                },
                {
                    name: 'Moderation Commands',
                    value: 'modhelp'
                },
                {
                    name: 'Other commands',
                    value: 'otherhelp'
                }
            ]
        }
    ],
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    async execute(interaction) {
        const choices = interaction.options.getString('type');

        switch(choices) {
            case 'ksphelp' : {
                const kspEmbed = new MessageEmbed()
                .setTitle('KSP Commands')
                .setDescription('KSP commands for the bot')
                .addField('dvmap', 'Different delta V maps for Kerbal Space Program to help you get to other places in the system', true)
                .addField('kspkeybinds', 'Shows KSP\'s Keybinds in a cool image 😎', true)
                .addField('kspforums', 'The link to the Kerbal Space Program Forums', true)
                .addField('kspmods', 'Sends links to the most trusted KSP modding websites', true)
                .addField('vismodsdecide', 'Helps you decide on what visual mods to get for KSP', true)

                interaction.reply({embeds: [kspEmbed], ephemeral: true})
            }
            break;
            case 'funhelp' : {
                const funEmbed = new MessageEmbed()
                .setTitle('Fun Commands')
                .setDescription('Fun commands for the bot')
                .addField('8ball', '8ball command, ask it a question and it will give you an answer!', true)
                .addField('reddit', 'Get a random post from any subreddit', true)
                .addField('dadjoke', 'Get a random (awful) dad joke!')
                .addField('random-urban', 'Get a random urban dictionary post!', true)

                interaction.reply({embeds: [funEmbed], ephemeral: true,})
            }
            break;
            case 'modhelp' : {
                const modEmbed = new MessageEmbed()
                .setTitle('Moderation Commands')
                .setDescription('Moderation commands for the bot (Moderators only)')
                .addField('ban/unban', 'Bans and unbans a user', true)
                .addField('mute and unmute', 'Mutes and unmutes users', true)
                .addField('activity', 'Changes the bots activity (BOT OWNER ONLY', true)
                .addField('announcement', 'Makes an announcement to the announcement channel (ONLY WORKS IN THE SPACE LOUNGE)', true)
                .addField('clear', 'Clears a certain amount of messages from a channel or user', true)
                .addField('dmuser', 'Allows you to DM a user', true)
                .addField('poll', 'Starts a poll!', true)
                .addField('reboot', 'Restarts the bot (BOT OWNER ONLY)', true)
                .addField('role', 'Allows you to add a role to a user', true)
                .addField('send-message', 'Allows you to send a message to another channel', true)

                interaction.reply({embeds: [modEmbed], ephemeral: true})
            }
        }
    }
}