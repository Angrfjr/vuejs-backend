import { Sequelize } from "sequelize";

const db = new Sequelize('sensus','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;