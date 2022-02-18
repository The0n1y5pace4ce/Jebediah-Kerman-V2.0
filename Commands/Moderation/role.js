const { Message, guild, message, CommandInteraction } = require('discord.js');

module.exports = {
    name: "role",
    description: "Add or remove the role from the member",
    Permissions: "MANAGE_ROLES", // The "Perms" param maybe different for you, so don't forget to change that in line 56 and 71! 
    options: [
        {
            name: "type",
            description: "Choose between adding or removing the role from member",
            type: "STRING",
            required: true,
            choices: [
                {
                    name: "add",
                    value: "add"
                },
                {
                    name: "remove",
                    value: "remove"
                }
              
            ]
        },
        {
            name: "role",
            description: "Mention the role",
            type: "ROLE",
            required: true
        },
        {
            name: "member",
            description: "Mention the member",
            type: "USER",
            required: true
        }
    ],
    /**
     * 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     * @param {arguments} arguments 
     */
   async execute(interaction, guild, client) {
        const type = interaction.options.getString('type');
        const rolee = interaction.options.getRole('role');
        const target = interaction.options.getMember('member');

        switch(type) {
        case "add" : {
        if(target.id === interaction.member.id) {
        return interaction.reply({ content: `You cannot add roles to yourself.`, ephemeral: false });
        } else if(target.roles.highest.position > interaction.member.roles.highest.position) {
          return interaction.reply({ content: `This member have a superior role!`})
        } else if(target.permissions.has(this.Perms)) {
            return interaction.reply({ content: `You cannot add roles to someone with the \`${this.Perms}\` permission.`});
        } else {
        await target.roles.add(rolee).catch(console.error);
        interaction.reply({ content: `Added ${rolee} to ${target}`, allowedMentions: { users: []}})
                }
        }
                break;
                case "remove" : {
                    if(target.roles.highest.position > interaction.member.roles.highest.position) {
                return interaction.reply({ content: `This member have a superior role!`})
        } else if(!target.roles.cache.has(`${rolee.id}`)) { // If member does not have the role
        return interaction.reply({ content: `${target} does not have this role.`, allowedMentions: { users: []}});
        } else if(target.id === interaction.member.id) {
          return interaction.reply({ content: `You cannot remove roles from yourself.`, ephemeral: false });
        } else if(target.permissions.has(this.Perms)) {
            return interaction.reply({ content: `You cannot take roles from members with the \`${this.Perms}\` permission.`});
        } else {
            await target.roles.remove(rolee).catch(console.error);
        interaction.reply({ content: `Removed ${rolee} from ${target}`, allowedMentions: { users: []}})
        }
                      break
                    }
                }
              }
           }
