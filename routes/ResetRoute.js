const express = require('express');

const {
    getReset
} = require('../controllers/resetController');

const router = express.Router();

router
    .route("/")
    .get(getReset);

module.exports = router;