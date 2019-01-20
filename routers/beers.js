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
    Beer.findById(req.params.id, (err, foundBeer) => {
        if(err) {
            res.send(err);
        } else {
            console.log(foundBeer);
            res.render('../views/beer/edit.ejs', {
                beer: foundBeer
            });
            console.log('editing');
        }
    });
});

//Update Route
router.put('/:id', (req, res) => {
    Beer.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, foundBeer) => {
        if(err) {
            res.send(err);
        } else {
            console.log(`${foundBeer} \n edit made.` );
            res.redirect('/beers');
        }
    });
});

//Show Route
router.get('/:id', (req, res) => {
    Beer.findById(req.params.id, (err, foundBeer) => {
        if (err) {
            res.send(err);
        } else {
            console.log(foundBeer);
            res.render('../views/beer/show.ejs', {
                beer: foundBeer
            });
        }
    });
});

//Delete Route
router.delete('/:id', (req, res) => {
    Beer.findOneAndRemove(req.params.id, (err, deletedBeer) => {
        if(err) {
            res.send(err);
        } else {
            console.log(deletedBeer);
            res.redirect('/beers');
        }
    });
});

module.exports = router;