const mongoose = require('mongoose');

//^ =========== creating a schema definition

const logSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    entry: {
        type: String,
        required: true
    },
    shipIsBroken: Boolean
})

//^ =========== creating a model

const Log = mongoose.model('Log', logSchema);

module.exports = Log;