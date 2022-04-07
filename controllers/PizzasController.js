

//Importe o conteúdo do arquivo Pizzas.json para uma variável chamada pizzas. @done(22-04-06 22:04)
let pizzas = require('../database/Pizzas.json');

//No arquvo PizzasController.js crie um objeto literal vazio e o exporte utilizando o module.exports @done(22-04-06 15:25)
module.exports = {
    listar: (req,res) => {
        res.render('pizzas.ejs', {pizzas, busca:''});              
    }}