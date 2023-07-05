const { connect } = require("mongoose");
const config = require("../JSON/config.json");
const { log } = require("../helpers/functions");

module.exports = async () => {
    log('Started connecting to MongoDB...', 'warn');

    await connect(config.handler.mongodb.uri).then(() => {
        log('MongoDB is connected to the atlas!', 'done')
    });
};