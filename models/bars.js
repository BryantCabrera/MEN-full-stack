const mongoose = require('mongoose');

const barSchema = new mongoose.Schema({
    name: {type: String, required: true},
    location: String,
    beers: [{type: mongoose.Schema.Types.ObjectId, ref: 'Beer'}]
}, {
    timestamps: true
});

const Bar = mongoose.model('Bar', barSchema);

module.exports = Bar;