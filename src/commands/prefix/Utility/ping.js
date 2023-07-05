module.exports = {
    structure: {
        name: 'ping',
        description: 'Replies with Pong!',
        aliases: ['p']
    },
    run: async (client, message, args) => {

        await message.reply({
            content: 'Pong! ' +  client.ws.ping
        });

    }
};
