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
                },
                {
                    name: 'System commands',
                    value: 'systemhelp'
                },
                {
                    name: 'Utility commands',
                    value: 'utilhelp'
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
                .addField('connect4', 'Play connect 4 against another in the server!', true)
                .addField('fish', 'Go fish!', true)
                .addField('guessthepokemon', 'Guess that pokemon!', true)
                .addField('rps', 'Play rock, paper, scissors!', true)
                .addField('slots', 'Play slots!', true)
                .addField('snake', 'Play a classic game of snake!', true)
                .addField('trivia', 'Can you get the right answer in trivia?', true)
                .addField('ttt', 'Play tic, tac, toe against another in the server!', true)
                .addField('wyr', 'Play would you rather!', true)

                interaction.reply({embeds: [funEmbed], ephemeral: true,})
            }
            break;
            case 'modhelp' : {
                const modEmbed = new MessageEmbed()
                .setTitle('Moderation Commands')
                .setDescription('Moderation commands for the bot (Moderators only)')
                .addField('ban', 'Bans and a user', true)
                .addField('timout and untimeout', 'Mutes and unmutes users', true)
                .addField('activity', 'Changes the bots activity (BOT OWNER ONLY', true)
                .addField('announcement', 'Makes an announcement to the announcement channel (ONLY WORKS IN THE SPACE LOUNGE)', true)
                .addField('clear', 'Clears a certain amount of messages from a channel or user', true)
                .addField('dmuser', 'Allows you to DM a user', true)
                .addField('poll', 'Starts a poll!', true)
                .addField('reboot', 'Restarts the bot (BOT OWNER ONLY)', true)
                .addField('role', 'Allows you to add a role to a user', true)
                .addField('send-message', 'Allows you to send a message to another channel', true)
                .addField('dm-role', 'Dm a selected role', true)
                .addField('kick', 'Kick a misbehaving user', true)
                .addField('warnings', 'Add a warn to a user, check a users warns, remove a warn and remove all warns from a user', true)
                .addField('emmit', 'Emmit events', true)

                interaction.reply({embeds: [modEmbed], ephemeral: true})
            }
            break;
            case 'systemhelp' : {
                const systemEmbed = new MessageEmbed()
                .setTitle('System commands')
                .setDescription('System commands for the bot')
                .addField('botinfo', 'Gets info on the bot', true)
                .addField('bugreport', 'Report a bug in the bot', true)
                .addField('music', 'Complete music system with soundcloud, spotify and youtube capability', true)
                .addField('suggest', 'Suggest a feature for the bot', true)

                interaction.reply({embeds: [systemEmbed], ephemeral: true})
            }
            break;
            case 'utilhelp' : {
                const utilEmbed = new MessageEmbed()
                .setTitle('Utility commands')
                .setDescription('Utility commands for the bot')
                .addField('avatar', 'Get a user\'s avatar', true)
                .addField('invite', 'Generate and track invites', true)
                .addField('ticket-panel', 'Open a ticket to get help from staff', true)
                .addField('translate', 'Translate any text to any language!', true)
                .addField('userinfo', 'Get info on a selected user', true)
                .addField('apply', 'Apply for a moderator position', true)

                interaction.reply({embeds: [utilEmbed], ephemeral: true})
            }
            break;
            case 'otherhelp' : {
                const otherEmbed = new MessageEmbed()
                .setTitle('Other Commands')
                .setDescription('Other commands for the bot')
                .addField('ascii', 'Create Ascii Text!', true)
                .addField('calculator', 'Open up a calculator!', true)
                .addField('corona/covid', 'Get covid info!', true)
                .addField('diceroll', 'Roll a 6 sided die', true)
                .addField('discord-together', 'Start a discord together activity', true)
                .addField('emojify', 'Turn any text into a string of emojis!', true)
                .addField('enlarge', 'Enlarge emojis', true)
                .addField('random', 'Get a random number', true)
                .addField('reverse', 'Reverse text!', true)

                interaction.reply({embeds: [otherEmbed], ephemeral: true})
            }
            break;
        }
    }
}
