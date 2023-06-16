const Sequelize = require('sequelize');

const DB_NAME = 'bibliotequa';

const DB_USER = 'root';

const DB_PASS = '1006576210';



export const database = new Sequelize(
    DB_NAME,
    DB_USER,
    DB_PASS,

    {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    }

);


async function generateDb() {
    //crea la base de dato cada ves que se carga el servidor
    await database.sync({ force: false })
    console.log('Base de datos y tablas creada');
}

generateDb();
