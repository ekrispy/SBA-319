const express = require('express');
const router = express.Router();
const HappyHour = require('../Db/HappyHourMenu.js');

router.get('/', (req, res) => {
        res.send(HappyHour);
    });
module.exports = router