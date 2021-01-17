const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require("body-parser")
const colors = require("colors");
const User = require('../../../models/UserModel');
const bcrypt = require('bcrypt');
const md5 = require('blueimp-md5');
const { exists } = require('../../../models/UserModel');
const sendEmail = require('../../../functions/sendEmail');

app.use(bodyParser.urlencoded({ extended: false }));

router.get("/", async (req, res, next) => {
    req.body.username;
    var user = await User.findOne({
        $or: [
            { username: username },
            { email: email },
            { discord: discord }
        ]
    })
    .catch((error) => {
        console.log(error);
        payload.errorMessage = "Something went wrong.";
        res.status(400).render("auth/register", payload);
    });
});

router.post("/", async (req, res, next) => {
    console.log(req.body);
    
    var username = req.body.username;
    var email = req.body.email;
    var firstname = req.body.fname;
    var lastname = req.body.lname;
    var discord = req.body.discord;
    var password = bcrypt.hashSync(req.body.password, 10);
    var validationCode = md5(username + email + firstname + lastname + discord + password);
    var user = await User.findOne({
        $or: [
            { username: username },
            { email: email },
            { discord: discord }
        ]
    })
    .catch((error) => {
        console.log(error);
        payload.errorMessage = "Something went wrong.";
        res.status(200).render("register", payload);
    });
    var user = {
        username: username,
        email: email,
        firstname: firstname,
        lastname: lastname,
        discord: discord,
        password: password,
        validationCode: validationCode
    }
    var user = await User.findOne({
        $or: [
            { username: username },
            { email: email },
            { discord: discord }
        ]
    })
    .catch((error) => {
        console.log(error);
        payload.errorMessage = "Something went wrong.";
        res.status(200).render("register", payload);
    });

    if(user == null) {
        User.create(user)
        .then(() => {
            console.log('success');
            const nodemailer = require('nodemailer');
                const configuration = require('../../../configuration/config');

                async function send(to, subject, text=false, html=true) {
                    let transporter = nodemailer.createTransport({
                        host: configuration.email.host,
                        port: configuration.email.port,
                        secure: configuration.email.secure,
                        auth: {
                            user: configuration.email.auth.user,
                            pass: configuration.email.auth.pass,
                        },
                    });

                    let info = await transporter.sendMail({
                        from: configuration.email.info.from + `<${configuration.email.info.formEmail}>`,
                        to: to,
                        subject: subject,
                        text: text,
                        html: html
                    });

                }
            send(email, 'Thanks For Registering', '', "<h1>Thanks For Registering For The Site</h1>")
           return res.status(200).send({msg: 'success'});
        });
    } else {
        if (email == user.email) {
            return res.status(200).send({msg: "email in use"})
        } else if(username == user.username) {
            return res.status(200).send({msg: "username in use"});
        } else if(discord == user.discord) {
            return res.status(200).send({msg: "discord in use"});
        }
    }
});

    

async function getUsers(filter) {
    var results = await Post.find(filter)
    .sort({"createdAt": -1})
    .catch((err) => {
        console.log(err);
    })

    results = await User.populate(results, { path: "replyTo.postedBy"});

    return await User.populate(results, { path: "retweetData.postedBy"});
    
 }

module.exports = router;