const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

/*configuracion de la vista*/
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//base de datos
mongoose.connect('mongodb://127.0.0.1:27017/usuarios_db');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
db.once('open', () => {
  console.log('Conectado a la base de datos de MongoDB');
});

// Rutas para los controladores
const userRouter = require('./routes/userRoute');
app.use('/compas', userRouter);
const PORT = process.env.PORT || 3000;
app.listen(3000, ()=>{
    console.log("escuchando con exito", 3000);
})