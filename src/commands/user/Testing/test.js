const { ContextMenuCommandBuilder } = require('discord.js');

module.exports = {
    structure: new ContextMenuCommandBuilder()
        .setName('Test User command')
        .setType(2),
    run: async (client, interaction) => {

        await interaction.reply({
            content: 'Hello user context command!'
        });

    }
};