const express = require('express');
const app = express();
const hbs = require('hbs');

require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

//Express HSB engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'Gloria Lule'
    });

})

app.get('/about', (req, res) => {

    res.render('about', {
        nombre: 'Gloria Lule'
    });

})

app.get('/data', (req, res) => {

    res.send('Hola Data');

})

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port}`);
});