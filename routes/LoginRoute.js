const express = require('express');

const {
    getLogin,
    postLogin
} = require('../controllers/loginController');

const router = express.Router();

router
    .route("/")
    .get(getLogin);

module.exports = router;