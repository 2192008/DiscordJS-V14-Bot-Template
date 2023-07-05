const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    structure: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with pong!'),
    run: async (client, interaction, args) => {

        await interaction.reply({
            content: 'Pong! ' +  client.ws.ping
        });

    }
};
