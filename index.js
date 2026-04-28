//inicialmente pra esse projeto instalei dois pacotes, o express e o express-handlebars (para melhor estrutura de paginação)
//o raciocínio agora é, preciso importar esses pacotes para poder usar no meu site

import express from 'express';
import {engine} from 'express-handlebars';

//agora vamos fazer eles utilizaveis através de variáveis que se refiram a esses pacotes
//dei o nome de app por me basear na documentação do npm express-handlebars. 
//A partir disso, todas as chamadas de rotas vão chamar como app.algumacoisa
const app = express();

console.log("inicio do server")

//escolho a engine que vai ser usada
//ext é de extension name, no caso eu estou chamando de hbs e não de handlebars. Por isso que o node não tava achando os arquivos
app.engine('hbs', engine({extname: 'hbs', defaultLayout: 'main'}));

//definindo qual é a pasta que contem meus arquivos estáticos. Sem isso aqui, nem css funciona
app.use(express.static('public'));

//defino a engine padrão para que eu não precise informar quando tiver que utilizar
app.set('view engine', 'hbs');

//tenho que dizer onde estão minhas páginas que serão renderizadas
app.set('views', './views');

//agora posso configurar minhas rotas com os métodos get e post
//rotas
app.get('/', (req, res) => {
    try {
        res.render('inicial');
    } catch(error) {
        console.error().send("ocorreu um erro na renderização");
    }
});

app.get('/home', (req, res) => {
    try {
        res.render('home');
    } catch(error) {
        console.error(error).send("ocorreu um erro ao renderizar a página");
    }
});




console.log("server rodando");

app.listen(8081);