const { stringify } = require('querystring');
const mongoose = require('../database');
const ClienteSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true, 
    }, 
    email: {
        type: String, 
        required: true,
    },
    phone: {
        type: Number, 
        required: true,
    }, 
    createAt: {
        type: Date, 
        default: Date.now, 
    }
});
mongoose.model('Cliente', ClienteSchema);





/*
-------------
 CLIENTE
------------
  id: number
  name: string, 
  email: string,
  phone: number 
 */