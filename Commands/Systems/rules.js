const { CommandInteraction, MessageEmbed, WebhookClient } = require('discord.js');

module.exports = {
    name: 'rules',
    description: 'Lists the rules of the server',
    permission: 'ADMINISTRATOR',
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    execute(interaction) {

        const Rules = new WebhookClient({
            id: 'RULES_WEBHOOK_ID',
            token: 'RULES_WEBHOOK_TOKEN'
        });
        const rulesEmbed = new MessageEmbed()
        .setTitle('TheSpaceAces Server Rules')
        .setDescription('These are the rules of my server')
        .addField('Rule 1', 'Trolling - Disrupting the chat, making a nuisance out of yourself, deliberately making others uncomfortable, or otherwise attempting to start trouble.', true,)
        .addField('Rule 2', 'Serious Offenses - This category includes doxxing, sending viruses, DDosing and more. These will result in an instant ban without exception.', true,)
        .addField('Rule 3', 'Harassment - Targeting users and berating them nonstop is a punishable offense and taken seriously, please do not do this.', true,)
        .addField('Rule 4', 'Language - Cursing is allowed. Usage of excessive vulgar language is prohibited.', true,)
        .addField('Rule 5', 'Discord TOS - As highlighted in Discords Terms of Service, if any of these is broken it will almost certainly result in a ban if by any chance you have not read Discords Terms of Service, it includes (but is not limited to) using any discord client modification, such as BetterDiscord, being Underage (below 13) or evading bans.', true,)
        .addField('Rule 6', 'Unnecessary pings - This includes helpers, moderators, and admins. Doing so will result in a punishment. Your\'e allowed to ping me whenever though.', true,)
        .addField('Rule 7', 'Incitement - The encouragement the breaking of rules, inciting others to be blatantly rude and offensive, or otherwise promoting and/or encouraging conflicts between other members.', true,)
        .addField('Rule 8', 'Spam - Spamming chat with several redundant or repeated messages that disrupts the server is prohibited. This includes bot text and emoji spam. Please do not do this, nobody likes it.', true,)
        .addField('Rule 9', 'NSFW - Posting any directly NSFW content such as porn will result in an immediate ban. Mild instances will result in the message being deleted a possible punishment. NSFW is not just limited to gifs or images, discussing overly explicit content is also considered NSFW', true,)
        
        
        Rules.send({embeds: [rulesEmbed]})
        interaction.reply({content: 'Rules sent!', ephemeral: true,})
    }
}