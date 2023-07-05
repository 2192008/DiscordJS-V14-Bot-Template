const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const config = require('../../../JSON/config.json');
const GuildSchema = require('../../../modals/GuildSchema');

module.exports = {
    structure: new SlashCommandBuilder()
        .setName('help')
        .setDescription('View all the possible commands!'),
    run: async (client, interaction, args) => {

        await interaction.deferReply();

        const prefix = (await GuildSchema.findOne({ guild: interaction.guildId }))?.prefix || config.handler.prefix;

        const mapIntCmds = client.applicationcommandsArray.map((v) => `\`/${v.name}\`: ${v.description}`);
        const mapPreCmds = client.collection.prefixcommands.map((v) => `\`${prefix}${v.structure.name}\` (${v.structure.aliases.length > 0 ? v.structure.aliases.map((a) => `**${a}**`).join(', ') : 'None'}): ${v.structure.description || '[No description was provided]'}`);

        await interaction.followUp({
            embeds: [
                new EmbedBuilder()
                    .setTitle('Help command')
                    .addFields(
                        { name: 'Slash commands', value: `${mapIntCmds.join('\n')}` },
                        { name: 'Prefix commands', value: `${mapPreCmds.join('\n')}` }
                    )
            ]
        });

    }
};
