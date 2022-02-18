const { MessageEmbed, WebhookClient, GuildMember } = require('discord.js');

module.exports = {
    name: 'guildMemberRemove',
    /**
     * 
     * @param {GuildMember} member 
     */
    execute(member) {

        const { user, guild } = member;

        const Logger = new WebhookClient({
            id: 'WEBHOOK_ID',
            token: 'WEBHOOK_TOKEN'
        });

        const Welcome = new MessageEmbed()
        .setColor('RED')
        .setAuthor(user.tag, user.avatarURL({dynamic: true, size: 512,}))
        .setThumbnail(user.avatarURL({dynamic: true, size: 512,}))
        .setDescription(`
        ${member} Has left the community\n
        Joined: <t:${parseInt(member.joinedTimestamp / 1000)}:R>\nLatest Member Count **${guild.memberCount}**`)
        .setFooter(`ID: ${user.id}`)

        Logger.send({embeds: [Welcome]})


    }
}