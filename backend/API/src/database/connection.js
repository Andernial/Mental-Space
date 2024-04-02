import dotenv from 'dotenv';
import { Sequelize } from "sequelize";

dotenv.config();



const dbUser= process.env.DB_USERNAME
const dbPassword = process.env.DB_PASSWORD
const database = process.env.DATABASE
const dbHost = process.env.DB_HOST
const dbPort = process.env.DB_PORT




export const sequelize = new Sequelize(database, dbUser, dbPassword,{
    host: dbHost,
    port: dbPort,
    dialect: 'mysql'

})


export async function testConnection(){
    try {
        await sequelize.authenticate()
        console.log('conexão estabelecida com sucesso')
    } catch (error) {
        console.log(error)
    }
}