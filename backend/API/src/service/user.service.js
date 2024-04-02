import { UserEntity } from "../entities/User.entity.js"
import  jwt  from "jsonwebtoken"
import { SECRET } from "../middlewares/auth.js"
import { BlackListedTokenEntity } from "../entities/BlackListedToken.entity.js"



export class UserService{
    async registerUserService(name,  email, password){
        try {
            await UserEntity.sync()

            
            const newUser = await UserEntity.create({
                 name,email,password
             })

             return newUser
             

        } catch (error) {
            throw error
           
        }
    }

    async loginUserService(email,password){
        try {
            await UserEntity.sync()

            const user = await UserEntity.findOne({
                where: {
                    email,
                    password
                }
               })

            
               if(user){
                 const token = jwt.sign({userid : user.id, role: 'user'}, SECRET, { expiresIn: "10h" })
                 const object = { token: token, name: user.name, email: user.email, id: user.id}
                 return object 
                
               }
               return 'não encontrado'

        } catch (error) {
            console.log(error)
            throw error 
        }
    }

    async logoutUserService(token){
        try {
            await BlackListedTokenEntity.sync()
           

            const BlackList = await BlackListedTokenEntity.create({token})

            
            return  BlackList

        } catch (error) {
            throw error
        }
    }

    async updateUserService(id,name,email,password){
        try {
            await UserEntity.sync()
            
            await UserEntity.update({name,email,password}, {
                where:{
                    id
                }
            })
                const updatedUser = await UserEntity.findByPk(id,{
                    attributes:{
                        exclude: ["id"]
                    }
                })
              return  updatedUser
        } catch (error) {
            throw error
        }
    }
}