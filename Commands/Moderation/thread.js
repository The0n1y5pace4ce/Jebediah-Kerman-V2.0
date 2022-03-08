const { CommandInteraction, MessageEmbed } = require("discord.js");

module.exports = {
    name: 'thread',
    description: 'Thread System!',
    permission: 'MANAGE_GUILD',
    options: [
        {
            name: 'create',
            description: 'Create a thread',
            type: 'SUB_COMMAND',
            options: [
                {
                    name: 'thread_name',
                    description: 'Enter the name for the thread',
                    type: 'STRING',
                    required: true,
                },
                {
                    name: 'reason',
                    description: 'Enter the reason to create the thread',
                    type: 'STRING',
                    required: true,
                }
            ]
        },
        {
            name: 'delete',
            description: 'Delete a thread',
            type: 'SUB_COMMAND',
            options: [
                {
                    name: 'delete_thread_name',
                    description: 'Enter the name of the thread you wish to delete',
                    type: 'STRING',
                    required: true
                }
            ]
        },
        {
            name: 'join',
            description: 'Add the bot to a thread',
            type: 'SUB_COMMAND',
            options: [
                {
                    name: 'join_thread_name',
                    description: 'Enter the name of the thread you would like to join',
                    type: 'STRING',
                    required: true,
                }
            ]
        },
        {
            name: 'leave',
            description: 'Make the bot leave a thread',
            type: 'SUB_COMMAND',
            options: [
                {
                    name: 'leave_thread_name',
                    description: 'Enter the name of the thread to leave',
                    type: 'STRING',
                    required: true,
                }
            ]
        },
        {
            name: 'archive',
            description: 'Archive a thread',
            type: 'SUB_COMMAND',
            options: [
                {
                    name: 'archive_thread_name',
                    description: 'Enter the name of the thread you wish to archive',
                    type: 'STRING',
                    required: true,
                }
            ]
        },
        {
            name: 'unarchive',
            description: 'unArchive a thread',
            type: 'SUB_COMMAND',
            options: [
                {
                    name: 'unarchive_thread_name',
                    description: 'Enter the name of the thread you wish to unarchive',
                    type: 'STRING',
                    required: true,
                }
            ]
        },
        {
            name: 'add_member',
            description: 'Add a member to a thread',
            type: 'SUB_COMMAND',
            options: [
                {
                    name: 'add_thread_name',
                    description: 'Enter the thread name you would like to add the member to',
                    type: 'STRING',
                    required: true
                },
                {
                    name: 'add_member',
                    description: 'Choose the member you would like to add',
                    type: 'USER',
                    required: true
                }
            ]
        },
        {
            name: 'remove_member',
            description: 'Add a member to a thread',
            type: 'SUB_COMMAND',
            options: [
                {
                    name: 'remove_thread_name',
                    description: 'Enter the thread name you would like to remove the member from',
                    type: 'STRING',
                    required: true
                },
                {
                    name: 'remove_member',
                    description: 'Choose the member you would like to remove',
                    type: 'USER',
                    required: true
                }
            ]
        }
        
    ],
    execute(interaction) {
        const Sub = interaction.options.getSubcommand(['create', 'delete']);
        if(Sub === 'create'){
            const name1 = interaction.options.getString('thread_name');
            const result = name1.join('-');
            const Reason = interaction.options.getString('result');

            const threadCreated = new MessageEmbed()
            .setTitle('Thread Created')
            .setColor('GREEN')
            .setDescription(`Thread name: ${result}\n Thread Created Reason: ${Reason}\n Thread Created By: ${interaction.member.tag}`)

            const thread = await channel.threads.create({
                name: `${result}`,
                autoArchiveDuration: 60,
                reason: `${Reason}`,
            })
            console.log(`Created thread: ${thread.name}`);
            interaction.reply({embeds: [threadCreated]})
        } else if(Sub === 'delete') {
            const name = interaction.options.getString('delete_thread_name');
            const result1 = name.join('-');

            const threadDeleted = new MessageEmbed()
            .setTitle('Thread Deleted')
            .setColor('RED')
            .setDescription(`Thread Deleted: ${result}\n Deleted By: ${interaction.user.tag}`)

            if (result1 != null)
            return interaction.reply({content: '⛔️ Could not find thread', ephemeral: true})

            const thread = channel.threads.cache.find(x => x.name === `${result1}`);
            await thread.delete();
            interaction.reply({embeds: [threadDeleted]})
        } else if(Sub === 'join') {
            const name2 = interaction.options.getString('join_thread_name');
            const result2 = name2.join('-');

            if (result2 != null)
            return interaction.reply({content: '⛔️ Could not find thread', ephemeral: true})

            const thread = channel.threads.cache.find(x => x.name === `${result2}`);
            if (thread.joinable) await thread.join();
            interaction.reply({content: 'Bot has joined thread'})
        } else if(Sub === 'leave'){
            const name3 = interaction.options.getString('leave_thread_name');
            const result3 = name3.join('-');

            if (result3 != null)
            return interaction.reply({content: '⛔️ Could not find that thread', ephemeral: true})

            const thread = channel.threads.cache.find(x => x.name === `${result3}`);
            await thread.leave();
            interaction.reply({content: 'Successfully left the thread'})
        } else if(Sub === 'archive') {
            const name4 = interaction.options.getString('archive_thread_name');
            const result4 = name4.join('-');

            if (result4 != null)
            return interaction.reply({content: '⛔️ Could not find thread', ephemeral: true})

            const thread = channel.threads.cache.find(x => x.name === `${result4}`);
            await thread.setArchived(true);
            interaction.reply({content: 'Thread Archived'})
        } else if(Sub === 'unarchive') {
            const name5 = interaction.options.getString('unarchive_thread_name');
            const result5 = name4.join('-');

            if (result5 != null)
            return interaction.reply({content: '⛔️ Could not find thread', ephemeral: true})

            const thread = channel.threads.cache.find(x => x.name === `${result5}`);
            await thread.setArchived(false);
            interaction.reply({content: 'Thread unArchived'})
        } else if(sub === 'add_member'){
            const memberAdd = interaction.options.getUser('add_member');
            const name6 = interaction.options.getString('add_thread_name');
            const result6 = name6.join('-');

            if (result6 != null)
            return interaction.reply({content: '⛔️ Could not find thread', ephemeral: true})

            const thread = channel.threads.cache.find(x => x.name === `${result6}`);
            await thread.members.add(`${memberAdd.id}`);
        } else if(sub === 'remove_member'){
            const memberRemove = interaction.options.getUser('remove_member');
            const name7 = interaction.options.getString('remove_thread_name');
            const result7 = name7.join('-');

            if (result7 != null)
            return interaction.reply({content: '⛔️ Could not find thread', ephemeral: true})

            const thread = channel.threads.cache.find(x => x.name === `${result7}`);
            await thread.members.remove(`${memberRemove.id}`);
        }
    }
}