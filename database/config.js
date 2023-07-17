const mongoose = require('mongoose');

const dbConnection = async () => {
    try{
        await mongoose.connect(process.env.DB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('Db online');

    } catch(error){
        console.log(error);
        throw new Error('Error en el inicio de la Base de datos, revisar logs');
    }
}

module.exports = {
    dbConnection
}