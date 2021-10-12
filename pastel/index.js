const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var cors = require('cors')

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());


const DB = {
    pastel: [
        {id: 10, name: 'Pastel de Frango', price: 8},
        {id: 20, name: 'Pastel de Carne', price: 5},
        {id: 30, name: 'Pastel de Queijo', price: 10},
        {id: 40, name: 'Pastel de Queijo com Goiabada', price: 10},
        {id: 50, name: 'Pastel de Frango com catupiry', price: 10}
    ]
}

app.get('/', (req, res) => {
    res.json({ message: 'ops, não existe dados nessa rota'})
});


// retorna todos os pasteis
app.get('/api/pasteis', (req, res) => {
    res.statusCode = 200;
    res.json(DB.pastel)
});

// retorna um pastel com ID
app.get('/api/pastel/:id', (req, res) => {
    const id = req.params.id;
    if (isNaN(id)) {
        res.send('O ID informado não é numero, por favor corrija');
    } else {
        const idpastel = parseInt(req.params.id);
        const pastel = DB.pastel.find(index => index.id === idpastel);
        if (pastel !== undefined) {
            res.statusCode = 200;
            res.json(pastel);
        } else {
            res.sendStatus(404);
        }
    }
});

//salva um registro de um pastel
app.post('/api/pastel', (req, res) => {
    const { name, price } = req.body;
    DB.pastel.push({
        id: Math.floor(Math.random() * (150 - 50)) + 3,
        name,
        price
    });
    res.send('Novo cadastro de cliente salvo com sucesso.');
});


// remove um registro de um cliente
app.delete('/api/pastel/:id', (req, res) => {
    const id = req.params.id;
    if (isNaN(id)) {
        res.sendStatus(400)
        res.json('Ops, não foi informado um número válido');
    } else {
        const pastel = DB.pastel.findIndex(index => index.id === parseInt(id));
        if (pastel === -1) {
            res.sendStatus(404);
        } else {
            DB.pastel.splice(pastel, 1);
            res.sendStatus(200);
            res.send({ message: 'Cadastro deletado!' })
        }
    }
});



app.listen(8000, ()=> {
    console.log('app running in http://localhost:8000');
});