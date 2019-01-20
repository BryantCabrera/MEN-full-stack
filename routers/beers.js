const express = require('express');
const router = express.Router();

//model data
const Beer = require('../models/beers');
const Bar = require('../models/bars');

//Index Route
router.get('/', (req, res) => {
    Beer.find({}, (err, allBeers) => {
        if (err) {
            res.send(err);
        } else {
            res.render('../views/beer/index.ejs', {
                beers: allBeers
            });
        }
    });
});

//New Route
router.get('/new', (req, res) => {
    res.render('../views/beer/new.ejs');
});

//Create Route
router.post('/', (req, res) => {
    Beer.create(req.body, (err, createdBeer) => {
        if (err) {
            res.send(err);
        } else {
            console.log(createdBeer + ' => this is the newly created beer.');
            res.redirect('/beers');
        }
    });
});

//Edit Route
router.get('/:id/edit', (req, res) => {
    
});

//Update Route
router.put('/:id', (req, res) => {
    
});

//Show Route
router.get('/:id', (req, res) => {
    
});

//Delete Route
router.delete('/:id', (req, res) => {
    
});

module.exports = router;