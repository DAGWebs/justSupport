//
//      THIS PROJECT WAS CREATED TO HELP ME LEARN NODE AND EXPRESS
//      TO USE THIS CONFIGURATION FILE YOU NEED TO RENAME TO config.js
//      THIS IS THE FIRST PROJECT I HAVE EVER DONE USING NODE AND EXPRESS
//      IF YOU WANT TO MODIFIY FEEL FREE TO DO SO
//
const config = {
    serverAddress: 'CHANGE ME', //This will set your host for your config
    sitePort: 3000, //this is your server port
    DeveloperMode: true, //changes between dev and production modes
    version: "1.0.0", //Allows for version controll
    appName: "CHANGE ME", //sets your APPLICATION NAME
    appTheme: "CHANGE ME", //SETS THE THEME YOUR WANT
    mongoDBHost: "CHANGE ME", //YOUR DATABASE HOST FOR MONGODB
    mongoDBPort: "CHANGE ME", //DATABSE PORT FOR MONGODB
    mongoDBName: "CHANGE ME", //DATABSE NAME FOR MONGO DB
    mongoDBUser: "CHANGE ME", //DATABSE URSER FOR MONGO DB
    mongoDBPass: "CHANGE ME",//DATABSE PASSWORD FOR MONGO DB
    mongoDBLocal: true, //ENABLE if you are using MONGODB LOCALY ONLY
    mongoDBNoAuth: true, //ENABLE ONLY IF YOU ARE NOT USING AUTHENTICATION WITH MONGO DB AND MONGODBLOCAL IS SET TO TRUE AS WELL
    email: {
        host: "CHANGE ME", //EMAIL HOSTNAME
        Port: 465,//EMAIL PORT
        secure: "TLS",//EMAIL SECURITY FOR TLS OR SSL OR SET TO FALSE
        isAuth: true, //USING AUTHENTICATION FOR EMAIL
        auth: {
            user: "CHANGE ME", //AUTHINTICATION USERNAME/EMAIL
            pass: "CHANGE ME" //AUTHITICATION PASSWORD
        },
        info: {
            from: 'CHANGE ME', //SETS THE EMAIL FROM NAME
            formEmail: "CHANGE ME" //SETS THE FROM EMAIL AND REPLYTO
        }
    }
}

module.exports = config;