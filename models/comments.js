const mongoose = require('mongoose');

const cmntSchema = new mongoose.Schema({
    content: String
});

const Cmnt = mongoose.model('Cmnt', cmntSchema);

module.exports = Cmnt;