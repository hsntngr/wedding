const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const brideSchema = new Schema({
    name: String,
    surname: String,
    phone: String,
    adress: String,
    weddingDate: Date,
    weddingHour: Date,
    weddingTestDate: Date,
    weddingTestHour: Date,
    hennaDate: Date,
    hennaHour: Date,
    sale: Boolean,
    rent: Boolean,
    zero: Boolean,
    used: Boolean,
    weddingDressTake: Date,
    weddingDressGive: Date,
    total: Number,
    downPayment: Number,
    remaining: Number,


    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('bride', brideSchema);