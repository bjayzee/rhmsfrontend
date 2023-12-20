const mongoose = require('mongoose');


const stockSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    },
    numbersAvailable: {
        type: Number,
        require: true
    }
})

exports.Stock = mongoose.model('Stock', stockSchema);