const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.port || 5000;
const requireDir = require('require-dir');
const mongoose = require('mongoose');

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());

requireDir('./models');
const Pastel = mongoose.model('Pastel');
const Cliente = mongoose.model('Cliente');


// added routes 
app.use('/api', require('./routes'));

app.listen(port, ()=> {
    console.log(`app running in http://localhost:${port}`);
});