const express = require('express');
const router = express.Router();
// const restaurants = require('../Db/resturants.js');

//get all restaurtants
router.get('/', (req, res) => {
        res.json({mssg: 'get all resturants'});
    });

// get single restuarant
router.get('/:id', (req,res)=>{
    res.json({mssg: 'get a single resturant'})
});

//post new workout
router.post('/', (req, res) => {
    res.json({mssg: 'post new workout'});
});
// delete a workout
router.delete('/:id', (req,res)=>{
    res.json({mssg: 'delete a workout'})
});
// update a workout
router.patch('/:id', (req,res)=>{
    res.json({mssg: 'update a  resturant'})
});

module.exports = router