//Importe o express. @done(22-04-06 15:06)
const express = require("express");

//Crie um roteador e armazene-o numa constante router @done(22-04-06 15:13)
const router = express.Router();

//Importe o PizzasController @done(22-04-06 21:14)
const PizzasController = require('../controllers/PizzasController');

//Crie uma rota get para '/' direcionando a requisição para PizzasController.listar @done(22-04-06 21:15)
router.get('/', PizzasController.listar);
router.get('/pizzas/busca', PizzasController.buscar);
router.get('/pizzas/:id', PizzasController.mostrar);

//Exporte essa constante @done(22-04-06 15:14)
module.exports = router;