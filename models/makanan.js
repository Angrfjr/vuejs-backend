import { Sequelize } from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const Data = db.define('makanan',{
    nama:DataTypes.STRING,
    image:DataTypes.STRING,
    harga:DataTypes.INTEGER,
},{
    freezeTableName:true
});

export default Data;

(async()=>{
    await db.sync();
})();