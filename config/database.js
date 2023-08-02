import { Sequelize } from "sequelize";

const db = new Sequelize('koperasi','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;