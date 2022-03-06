const { CommandInteraction, Client , MessageEmbed } = require('discord.js');

module.exports = {
    name: 'invite',
    description: 'Invite generator and tracker',
    options: [
        {
            name: 'generate',
            description: 'generate an invite',
            type: 'SUB_COMMAND'
        }, {
            name: 'tracker',
            description: 'track a users invites',
            type: 'SUB_COMMAND',
            options: [
                {
                    name: 'user',
                    description: 'select someone',
                    type: 'USER',
                    required: false
                }
            ]
        }
    ],
    /**
     * 
     * @param {CommandInteraction} interaction 
     * @param {Client} client 
     */
    async execute(interaction, client) {
        const { options, guild } = interaction;
        const Sub = options.getSubcommand(['generate', 'tracker']);
        if(Sub === 'generate') {
            const code = await interaction.channel.createInvite({ maxAge: 0, maxUses: 0 });
            interaction.reply({
                content: `Here is your invite\n ${code}`,
                ephemeral: true
            })
        } else if(Sub === 'tracker') {
            const user = options.getUser('user') || interaction.user;

            const member = guild.members.cache.get(user.id);

            let inv = await guild.invites.fetch();

            let invss = inv.filter(a => a.inviter && a.inviter.id === member.id);

            if(invss.size <= 0) {
                const emb = new MessageEmbed()
                .setColor(config.embedColor)
                .setDescription(`❌ ${user} has no invites`)
                .setTimestamp()

                interaction.reply({
                    embeds: [emb]
                })
            } else {
                let invCodes = invss.map(x => x.code).join(' | ')
                let i = 0;
                invss.forEach(invz => i +=invz.uses);
                const embb = new MessageEmbed()
                .setColor(config.embedColor)
                .setDescription(`${user} has ${i} invites\n Invite codes:\n\`\`\`${invCodes}\`\`\``)
                .setTimestamp()

                interaction.reply({
                    embeds: [embb]
                })
            }
        }
    }
}
//credits to Nickolas#8053
