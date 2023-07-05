const { log } = require("../../helpers/functions");

module.exports = {
    event: 'ready',
    once: true,
    run: (client) => {
        log('Logged in as: ' + client.user.tag, 'done');
    }
};