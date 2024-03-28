import { DataTypes } from "sequelize";
import { sequelize as database } from "../database/connection.js";



export const SiteEntity = database.define('Site', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'campo não pode ser vazio!'
            },
            len: {
                args: [10, 50],
                msg: "Esse campo deve ter entre 10 e 50 caracteres"
            }
        }
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'campo não pode ser vazio!'
            },
            max: {
                args: [10, 200],
                msg: "campo não pode passar de 200 caracteres"
            }
        }
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'campo não pode ser vazio !'
            },

            isURL: {
                protocols: ['http', 'https'],
                require_protocol: true,
                msg: 'O campo deve ser uma URL válida'
            },


        }
    }
})

