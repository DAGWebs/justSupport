const config = require('../configuration/config');
const configuration = require('../configuration/config');

exports.getLogin = (req, res, next) => {
    
    var payload = {
        pageTitle: "Login",
        appName: configuration.appName,
        appTheme: configuration.appTheme
    }

    if(req.session && req.session.user) {
        return res.redirect('/dashboard');
    } else {
        res.status(200).render("auth/login", payload);
    }
}