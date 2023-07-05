const { Client, Partials, Collection, GatewayIntentBits } = require("discord.js");
const config = require('../JSON/config.json');
const commands = require("../handlers/commands");
const events = require("../handlers/events");
const deploy = require("../handlers/deploy");
const mongoose = require("../handlers/mongoose");

module.exports = class extends Client {
    collection = {
        interactioncommands: new Collection(),
        prefixcommands: new Collection(),
        aliases: new Collection()
    };
    applicationcommandsArray = [];

    constructor() {
        super({
            intents: [Object.keys(GatewayIntentBits)],
            partials: [Object.keys(Partials)],
            ws: {
                properties: {
                    browser: 'Discord iOS',
                },
            }
        });
    };

    start = async () => {
        await this.login(config.client.token);

        commands(this);
        events(this);
        mongoose();

        if (config.handler.deploy) deploy(this, config);
    };
};