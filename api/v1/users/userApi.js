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


const nodemailer = require('nodemailer');
const configuration = require('../../../configuration/config');

async function send(to, subject, emailInfo) {
    let transporter = nodemailer.createTransport({
        host: configuration.email.host,
        port: configuration.email.port,
        secure: configuration.email.secure,
        auth: {
            user: configuration.email.auth.user,
            pass: configuration.email.auth.pass,
        },
     });

     html = `
            <body style='backgorund-color: #222;'>
                <div style='text-align: center; padding: 10px;'>
                    <h1>${emailInfo.title}</h1>
                    <p>${emailInfo.titleDescription}</p>
                </div>
                <div style='background-color: #c2c2f2; padding: 20px;'>
                    <h2 style='text-center'>${emailInfo.bodyTitle}</h2>
                    <div style='padding: 10px;'>
                        ${emailInfo.bodyDescription}
                    </div>
                    <div>
                        <a style='${emailInfo.bodyLinkStyles}' href='${emailInfo.bodyLink}'>${emailInfo.bodyLinkText}</a>
                    </div>
                </div>
                <div>
                    <small style='text-align: center;'>&copy; copyright justSupport 2021. All rights reserved!</small>
                </div>
            </body>
        `;

    let info = await transporter.sendMail({
        from: configuration.email.info.from + `<${configuration.email.info.formEmail}>`,
        to: to,
        subject: subject,
        html: html
    });

}

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

router.get("/:id", async(req, res, next) => {
    var username = req.query.username;
    var email = req.query.email;

    var user = await User.findOne({
        $and: [
            { username: username},
            { email: email }
        ]
    })
    .catch((error) => {
        console.log(error);
        payload.errorMessage = "Something went wrong.";
        res.status(200).render("register", payload);
    })

    if(user == null) {
        res.status(200).send({msg: "return"})
    } else {
        var emailInfo = {
            title: "justSupport",
            titleDescription: "The best support tool out there!",
            bodyTitle: "Password Reset",
            bodyDescription: "Password Reset Has Been Requested!",
            bodyLinkStyles: "backgorund-color: #222; color: #fff; font-weight: bold; padding 5px; width: 200px;",
            bodyLink: configuration.siteLink + "/reset/password/" + username,
            bodyLinkText: "Reset Password"
        }
         if(!user.sentEmail) {
            send(email, 'Password Reset Requested', emailInfo)
         } else {
             return res.status(200).send({msg: "email sent"})
         }
         res.status(200).send({msg: "return"})
    }
});

router.post("/:id", async(req, res, next) => {
    var username = req.body.username;
    var password = req.body.password;

    var user = await User.findOne({
        $or: [
            { username: username },
            { email: username },
            { discord: username }
        ]
    })
    .catch((error) => {
        console.log(error);
        payload.errorMessage = "Something went wrong.";
        res.status(200).render("register", payload);
    })

    if(user == null) {
        return res.status(200).send({msg: "bad creds"});
    } else {
        if(!user.validated) {
            return res.status(200).send({msg: "validation incomplete", name: user.firstname + " " + user.lastname});
        } else {
            var result = await bcrypt.compare(password, user.password);

            if(result === true) {
                req.session.user = user;
                return res.status(200).send({msg: "login done"});
            } else {
                return res.status(200).send({msg: "bad creds"});
            }
        }
    }
})

router.post("/", async (req, res, next) => {
    
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
            var emailInfo = {
                title: "justSupport",
                titleDescription: "The best support tool out there!",
                bodyTitle: "New Account Created",
                bodyDescription: `Hello ${user.firstname} ${user.lastname}`,
                bodyLinkStyles: "backgorund-color: #222; color: #fff; font-weight: bold; padding 5px; width: 200px;",
                bodyLink: configuration.siteLink + "/verify/user/" + user.username,
                bodyLinkText: "Verify Account"
            }
            if(!sentEmail) {
                send(email, 'New Account Created', emailInfo)
            }
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