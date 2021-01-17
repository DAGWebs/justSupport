const config = require('../configuration/config');
const configuration = require('../configuration/config');

exports.getReset = (req, res, next) => {
    
    var payload = {
        pageTitle: "Reset Password",
        appName: configuration.appName,
        appTheme: configuration.appTheme
    }

    if(req.session && req.session.user) {
        return res.redirect('/dashboard');
    } else {
        res.status(200).render("auth/reset", payload);
    }
}