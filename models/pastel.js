const { stringify } = require('querystring');
const mongoose = require('../database');
const PastelSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true, 
    }, 
    flavour: {
        type: String, 
        required: true,
    },
    price: {
        type: Number, 
        required: true,
    }, 
    createAt: {
        type: Date, 
        default: Date.now, 
    }
});
mongoose.model('Pastel', PastelSchema);





/*
-------------
 PASTEL
------------
  id: number
  name: string, 
  price: number, 
 */