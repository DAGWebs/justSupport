const express = require('express');

const {
    getRegister,
    postRegister
} = require('../controllers/registerController');

const router = express.Router();

router
    .route("/")
    .get(getRegister)
    .post(postRegister);

module.exports = router;