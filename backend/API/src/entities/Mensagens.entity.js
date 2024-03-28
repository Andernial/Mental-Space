
import { DataTypes } from "sequelize";
import { sequelize as database } from "../database/connection.js";
import { UserEntity } from "./User.entity.js";


export const MensagemEntity = database.define('Mensagem',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    author:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:'campo não pode ser vazio!'
            },
            len: {
                args:[4,10],
                msg: "Esse campo deve ter entre 4 e 10 caracteres"
            }
        }
    },
    message:{
        type: DataTypes.TEXT,
        allowNull:false,
        validate: {
            notEmpty:{
                msg:'campo não pode ser vazio!'
            },
            max:{
                args: [10,200],
                msg: "campo não pode passar de 200 caracteres"
            }
        }
    },
    likes:{
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
})


MensagemEntity.belongsTo(UserEntity, {
    constraint: true,
    foreignKey: "userid",
})