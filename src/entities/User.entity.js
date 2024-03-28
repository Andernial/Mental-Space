import { DataTypes } from "sequelize";
import { sequelize as database } from "../database/connection.js";



export const UserEntity = database.define('User',{
    id:{
        type: DataTypes.UUID,
        defaultValue: database.Sequelize.UUIDV4,
        primaryKey:true

    },
    name:{
        type: DataTypes.STRING(9),
        allowNull: false,
        validate: {
            notEmpty:{
                msg: "nome não pode ser vazio!"
            },
            len: {
                args: [4, 9],
                msg: "nome deve ter entre 4 a 9 caracteres"
            }
        }
    
    },
    email:{
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
            notEmpty:{
                msg: "email não pode ser vazio!"
            }
        },
    
        unique: {
            msg: 'Este endereço de e-mail já está em uso.'
        }
    },
    password:{
        type: DataTypes.STRING(32),
        allowNull:false,
        validate: {
            notEmpty:{
                msg: "senha não pode ser vazio!"
            }
        },
    
        
    }

})