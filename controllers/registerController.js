const configuration = require('../configuration/config');

exports.getRegister = (req, res, next) => {
    var payload = {
        pageTitle: "Register",
        appName: configuration.appName,
        appTheme: configuration.appTheme
    }

    res.status(200).render("auth/register", payload);
}

exports.postRegister = (req, res, next) => {
    var payload = {
        pageTitle: "Register",
        appName: configuration.appName,
        appTheme: configuration.appTheme
    }

    res.status(200).render("auth/register", payload);
}