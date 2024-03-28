import { DataTypes } from "sequelize";
import { sequelize as database } from "../database/connection.js";



export const AdmEntity = database.define('Adm',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:'campo não pode ser vazio!'
            },
            len: {
                args:[4,20],
                msg: "Esse campo deve ter entre 4 e 10 caracteres"
            }
        }
    },
    password:{
        type: DataTypes.INTEGER,
        allowNull:false,
        validate: {
            notEmpty:{
                msg:'campo não pode ser vazio!'
            },
            len: {
                args:[4,30],
                msg: "Esse campo deve ter entre 4 e 30 caracteres"
            }
        }
    }
})