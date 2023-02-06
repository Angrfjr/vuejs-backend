import { Sequelize } from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const User = db.define('users',{
    nama:DataTypes.STRING,
    umur:DataTypes.INTEGER,
    nik:DataTypes.INTEGER,
    alamat:DataTypes.STRING,
    status:DataTypes.STRING
},{
    freezeTableName:true
});

export default User;

(async()=>{
    await db.sync();
})();