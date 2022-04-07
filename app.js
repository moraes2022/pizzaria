//Importe o express @done(22-04-06 14:44)
const express = require('express');

//Importe a biblioteca nativa path. @done(22-04-06 16:07)
const path = require('path');


//No arquivo app.js importe o roteador recém criado para uma constante chamada PizzasRouter. @done(22-04-06 15:17)
const PizzasRouter = require('./routes/PizzasRouter');

//Crie um aplicação web com o express e guarde-a numa constante app. @done(22-04-06 14:44)
const app = express();

//Configure a aplicação para que ela utilize o EJS como template engine @done(22-04-06 16:08)
app.set('view engine', 'ejs');

// Configure a aplicação para que ela reconheça a pasta public como a pasta de arquivos públicos e estáticos @done(22-04-06 16:10)
app.use(express.static(path.join(__dirname, 'public')));

//Crie uma rota get para o endereço '/'. @done(22-04-06 14:47)
//No arquivo app.js, remova a rota app.get criada na Fase 2. @done(22-04-06 21:25)
//app.get('/', function (req, res) {
    //res.send('Olá, visitante!')
  //})

//Utilize o PizzasRouter como roteador da aplicação. Dica: app.use(____) @done(22-04-06 15:21)
  app.use('/', PizzasRouter);


  //Escreva uma linha que iniciará o servidor na porta 3000 (app.listen) @done(22-04-06 14:52)
app.listen(3000)
    console.log("Servidor rodando na porta 3000")
