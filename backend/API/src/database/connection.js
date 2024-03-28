import { Sequelize } from "sequelize";


export const sequelize = new Sequelize('Space', 'root', '',{
    host: "localhost",
    dialect: "mysql"

})


export async function testConnection(){
    try {
        await sequelize.authenticate()
        console.log('conexão estabelecida com sucesso')
    } catch (error) {
        console.log(error)
    }
}