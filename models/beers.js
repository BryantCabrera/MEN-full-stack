const mongoose = require('mongoose');

var commentSchema = new Schema({
    content: String
  }, {
    timestamps: true
});

const beerSchema = new mongoose.Schema({
    name: {type: String, reuired: true},
    style: String,
    bars: [{type: mongoose.Schema.Types.ObjectId, ref: 'Bar'}],
    comments: [commentSchema]
}, {
    timestamps: true
});

const Beer = mongoose.model('Beer', beerSchema);

module.exports = Beer;