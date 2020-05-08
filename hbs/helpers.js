const hbs = require('hbs');

hbs.registerHelper('getAnio', () => {
    const date = new Date().getFullYear();
    return date;
});

hbs.registerHelper('getName', (nombre) => {

    let palabras = nombre.split(' ');
    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1);
    });
    return palabras.join(' ');
})