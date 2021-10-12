const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var cors = require('cors')

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());


const DB = {
    clientes: [
        {id: 01, name: 'José Paulo', email: 'zepaulo@gmail.com', end: 'rua são paulo, 300', bairro: 'itaum', city: 'joinville', state: 'sc', zipcode: 89201000},
        {id: 02, name: 'Enzo Silva', email: 'zozosilva@yahoo.com', end: 'rua santiago, 88', bairro: 'bucarein', city: 'jlle', state: 'sc', zipcode: 89201000},
        {id: 03, name: 'Marieta Cornélia', email: 'marieta@hotmail.com', end: 'av. paulo gomes, 100', bairro: 'petropolis', city: 'joinville', state: 'sc', zipcode: 89201000},
        {id: 04, name: 'Loren Impsu', email: 'lo2000@gmail.com', end: 'lameda margarida, q2 l5', bairro: 'Ana Julia', city: 'Joinville', state: 'SC', zipcode: 89201000},
        {id: 05, name: 'Mercedes Schulz', email: 'schulz@hotmail.com', end: 'rua bom retiro, 123', bairro: 'copacabana', city: 'rio de janeiro', state: 'RJ', zipcode: 18922000}        
    ]
}

//rota base 

app.get('/', (req, res) => {
    res.json({ message: 'ops, não existe dados nessa rota'})
});

// retorna todos os clientes
app.get('/api/clientes', (req, res) => {
    res.statusCode = 200;
    res.json(DB.clientes)
});

// retorna um cliente com ID
app.get('/api/clientes/:id', (req, res) => {
    const id = req.params.id;
    if (isNaN(id)) {
        res.send('O ID informado não é numero, por favor corrija');
    } else {
        const idClientes = parseInt(req.params.id);
        const cliente = DB.clientes.find(index => index.id === idClientes);
        if (cliente !== undefined) {
            res.statusCode = 200;
            res.json(cliente);
        } else {
            res.sendStatus(404);
        }
    }
});

//salva um registro de um cliente
app.post('/api/cliente', (req, res) => {
    const { name, email, end, bairro, city, state, zipcode } = req.body;
    DB.clientes.push({
        id: Math.floor(Math.random() * (50 - 0)) + 3,
        name,
        email, 
        end, 
        bairro, 
        city, 
        state, 
        zipcode
    });
    res.send('Novo cadastro de cliente salvo com sucesso.');
});

//atualiza o cadastro
// app.put('/api/cliente/:id', (req, res) => {
//     const id = req.params.id;
//     const { name, email, end, bairro, city, state, zipcode } = req.body;
//     DB.clientes.put({
//         id:id,
//         name:name,
//         email:email, 
//         end: end, 
//         bairro: bairro, 
//         city: city, 
//         state: state, 
//         zipcode: zipcode
//     });
// });

// remove um registro de um cliente
app.delete('/api/cliente/:id', (req, res) => {
    const id = req.params.id;
    if (isNaN(id)) {
        res.sendStatus(400)
        res.json('Ops, não foi informado um número válido');
    } else {
        const cliente = DB.clientes.findIndex(index => index.id === parseInt(id));
        if (cliente === -1) {
            res.sendStatus(404);
        } else {
            DB.clientes.splice(cliente, 1);
            res.sendStatus(200);
            res.send({ message: 'Cadastro deletado!' })
        }
    }
});



app.listen(8000, ()=> {
    console.log('app running in http://localhost:8000');
});