/* YOU CAN TEST WITH POSTMAN */
//https://www.youtube.com/watch?v=tAmQZwMXvoE

const express = require('express');
const app = express();


let isLogin = () => true;//true or false

//Middleware: = next Interseptador mientra se hacen las 
//Ejemplo Si estas Logueado o No de ser correcto Sigue el codigo de no Se detiene co  un output
app.use((req, res, next) => {
    if (isLogin()) {
        next();//Se invoca cuando detecta y\cumple las condiciones te dispara la opcion
    } else {
        res.send('You dont have permision');// Si no se cumple el login en true  entra aqui
    }
});

// Metodos soportados por las operaciones HTTP
// Operaciones mas comunes para API RESTFull

//GET: Obtiene datos
app.get('/', (req, res) => {
    res.send(`This a GET ${req.method}`);
});

//POST: Escribe datos
app.post('/', (req, res) => {
    res.send(`This a POST ${req.method}`);
});

//PUT: Actualiza datos
app.put('/', (req, res) => {

    res.send(`This a PUT ${req.method}`);
});

//DELETE: Elimina datos
app.delete('/', (req, res) => {
    res.send(`This a DELETE ${req.method}`);
});



app.listen(8000, () => {
    console.log(' Example Listen by port 8000');
});