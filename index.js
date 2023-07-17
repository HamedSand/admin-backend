require('dotenv').config();
const express = require('express');
const cors = require('cors');
// crear el servidor de express
const app = express();
const { dbConnection } = require('./database/config.js');
//Configurar cors
app.use(cors());
//Base de datos
dbConnection();
//rutas
app.get('/', (req,res)=>{
    res.json({
        ok: true,
        msg:'hola mundo'
    });
});

app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en puerto ' + process.env.PORT);
});