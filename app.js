const express = require('express');
const config = require('./configuration/config');
const color = require('colors');
const loginMiddleware = require('./middleware/loginMiddleware');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');
var mongoose = require('mongoose');

if(config.mongoDBLocal && config.mongoDBNoAuth) {
    var db = "mongodb://" + config.mongoDBHost + ":" + config.mongoDBPort + "/" + config.mongoDBName;
} else {
    var db = "mongodb://" + config.mongoDBUser + ":" + config.mongoDBPass + "@" + config.mongoDBHost + ":" + config.mongoDBPort + "/" + config.mongoDBName;
}

var connect = mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true});

if(connect) {
    console.log(`MongoDB has connected using: ${db} and is looking for models in the models folder.`.brightGreen);
} else {
    console.log(`MongoDB could not be connected to using: ${db} please check your configuration file located in configuration/config.js`.brightRed);
}

const app = express();

app.set("view engine", 'pug');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "public/assets")));

app.use(session({
    secret: "jsdfghohg5643298324erofduhg",
    resave: true,
    saveUninitialized: false
}))

const server = app.listen(config.sitePort, config.serverAddress, () => {
    if(config.DeveloperMode) {
        console.log("--------------------------------------------------------------------------------------------------------------------------".brightYellow);
        console.log("----------                                          Warning                                                    ----------".brightYellow);
        console.log("--------------------------------------------------------------------------------------------------------------------------".brightYellow);
        console.log(`justSupport is currently running in Development Mode. On Server: ${config.serverAddress}:${config.sitePort} Version: ${config.version}`.brightYellow);
        console.log("--------------------------------------------------------------------------------------------------------------------------".brightYellow);
        console.log("----------                                          Warning                                                    ----------".brightYellow);
        console.log("--------------------------------------------------------------------------------------------------------------------------".brightYellow);
    } else {
        console.log("--------------------------------------------------------------------------------------------------------------------------".brightGreen);
        console.log("----------                                        Server Startup                                                ----------".brightGreen);
        console.log("--------------------------------------------------------------------------------------------------------------------------".brightGreen);
        console.log(`justSupport is currently running in production Mode. On Server: ${config.serverAddress}:${config.sitePort} Version: ${config.version}`.brightGreen);
        console.log("--------------------------------------------------------------------------------------------------------------------------".brightGreen);
        console.log("----------                                        Server Startup                                                ----------".brightGreen);
        console.log("--------------------------------------------------------------------------------------------------------------------------".brightGreen);
    }
});

//set Routes
const loginRoute = require('./routes/loginRoute');
const registerRoute = require('./routes/registerRoute');
const resetRoute = require('./routes/resetRoute');

const userApiRoute = require('./api/v1/users/userApi');
// Get Routes

app.use("/login", loginRoute);
app.use("/register", registerRoute);
app.use("/reset", resetRoute);
// Get API Routes

app.use("/userApi", userApiRoute);

app.get("/",loginMiddleware.requireLogin , (req, res, next) => {
    var payload = {
        pageTitle: "Home",
        userLoggedIn: req.session.user,
        userLoggedInJs: JSON.stringify(req.session.user),
    }

    res.status(200).render("home", payload);
});