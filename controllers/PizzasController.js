

//Importe o conteúdo do arquivo Pizzas.json para uma variável chamada pizzas. @done(22-04-06 22:04)
let pizzas = require('../database/Pizzas.json');

//No arquvo PizzasController.js crie um objeto literal vazio e o exporte utilizando o module.exports @done(22-04-06 15:25)
module.exports = {
    listar: (req,res) => {
        res.render('pizzas.ejs', {pizzas, busca:''});              
    },

    mostrar: (req, res) => {
        //Capturar o id da pizza desejada pelo usuário (req.params.id) numa variável id @done(22-04-07 16:36)
         let id = req.params.id
         //Determining the position
        let position = pizzas.findIndex(p => p.id == id);
         // Guardando a pizza da posição na variável pizza
         let pizza = pizzas[position];
         res.render('pizza.ejs',{pizza});
    }
}