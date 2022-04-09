

//Importe o conteúdo do arquivo Pizzas.json para uma variável chamada pizzas. @done(22-04-06 22:04)
let pizzas = require('../database/Pizzas.json');

//No arquvo PizzasController.js crie um objeto literal vazio e o exporte utilizando o module.exports @done(22-04-06 15:25)
module.exports = {
    listar: (req,res) => {
        res.render('pizzas.ejs', {pizzas, busca:''});              
    },

    mostrar: (req, res) => {

        var idNext;
        var idPrevious;
        //Capturar o id da pizza desejada pelo usuário (req.params.id) numa variável id @done(22-04-07 16:36)
         let id = req.params.id
         //Determining the position
        let position = pizzas.findIndex(p => p.id == id);
         // Guardando a pizza da posição na variável pizza
         let pizza = pizzas[position];
           // Se a posição da pizza encontrada for a última do array idProxima
        // deve receber o id da primeira pizza. Caso contrário, idProxima
        // deve ter o id da pizza da posição seguinte 
        if(position == pizzas.length - 1){
            idNext = pizzas[0].id
        } else {
            idNext = pizzas[position + 1].id;
        }
             
        if(posicao == 0){
            idPrevious = pizzas[pizzas.length - 1].id;
        } else {
            idPrevious = pizzas[posicao - 1].id;
        }        
            res.render('pizza.ejs',{pizza, idPrevious, idNext});
    },

    buscar: (req, res) => {
        let searchVarietyPizza = req.query.q;
        console.log(req.query);
        if(searchVarietyPizza == ''){
            res.redirect('/');
        } else {
            let resultVarietyPizza = pizzas.filter(p=>p.nome.toUpperCase().includes(searchVarietyPizza.toUpperCase()))
            res.render('pizzas.ejs',{pizzas: resultVarietyPizza, busca: searchVarietyPizza});
        }
}}