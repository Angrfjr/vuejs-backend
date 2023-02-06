import { Sequelize } from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const Feedback = db.define('feedback',{
    email:DataTypes.STRING,
    firstName:DataTypes.STRING,
    masukan:DataTypes.STRING,
    phoneNumber:DataTypes.INTEGER,
    kecamatan:DataTypes.STRING
},{
    freezeTableName:true
});

export default Feedback;

(async()=>{
    await db.sync();
})();