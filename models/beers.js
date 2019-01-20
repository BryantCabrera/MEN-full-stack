const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    content: String
  }, {
    timestamps: true
});

const beerSchema = new mongoose.Schema({
    name: {type: String, reuired: true},
    style: String,
    bars: String,
    // [{type: mongoose.Schema.Types.ObjectId, ref: 'Bar'}],
    comments: String
    // [commentSchema]
}, {
    timestamps: true
});

const Beer = mongoose.model('Beer', beerSchema);

module.exports = Beer;