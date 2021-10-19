const express = require('express');
const routes = express.Router();

const PastelController = require('./controllers/PastelController');

routes.get('/pastel', PastelController.index);
routes.post('/pastel', PastelController.save);
routes.delete('/pastel/:id', PastelController.destroy);
routes.get('/pastel/id', PastelController.show);
routes.put('/pastel/:id', PastelController.update);



//Clientes
const ClienteController = require('./controllers/ClienteController');

routes.get('/cliente', ClienteController.index);
routes.post('/cliente', ClienteController.save);
routes.delete('/cliente/:id', ClienteController.destroy);
routes.get('/cliente/id', ClienteController.show);
routes.put('/cliente/:id', ClienteController.update);

module.exports = routes;