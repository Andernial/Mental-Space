import { DataTypes } from "sequelize";
import { sequelize as database } from "../database/connection.js";



export const RelaxingSongsEntity = database.define('Song', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
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
