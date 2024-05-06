const express = require('express');
const router = express.Router();
const reviews = require('../Db/reviews.js');

router.get('/', (req, res) => {
        res.send(reviews);
    });
module.exports = router