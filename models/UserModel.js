'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    discord: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    validated: {
        type: Boolean,
        default: false
    },
    validationCode: {
        type: String,
        unique: true,
        required: true
    },
    isLoggedin: {
        type: Boolean,
        default: false
    },
    profilePic: {
        type: String,
        default: "img/default/profile/default.jpg"
    },
    sentEmail: {
        type: Boolean,
        default: true
    }
},{timestamps: true});

module.exports = mongoose.model('User', userSchema);