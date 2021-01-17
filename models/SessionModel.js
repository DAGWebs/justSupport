'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var sessionSchema = new Schema({
    sessionName: {
        type: String,
        required: true
    },
    sessionValue: {
        type: String,
        required: true
    },
    sessionUser: {
        type: Schema.Types.ObjectId
    },
    userAgent: {
        type: Array
    }
},{timestamps: true});

module.exports = mongoose.model('Session', sessonSchema);