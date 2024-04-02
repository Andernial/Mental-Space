import jwt from 'jsonwebtoken';
import { AdmEntity } from "../entities/Adm.entity.js";
import { SECRET } from '../middlewares/auth.js';
import { BlackListedTokenEntity } from '../entities/BlackListedToken.entity.js';
import { MensagemEntity } from '../entities/mensagens.entity.js';
import { UserEntity } from '../entities/User.entity.js';

export class AdmService{
    async LoginAdmService(name,password){
        try {
            await AdmEntity.sync()
            
            const adm = await AdmEntity.findOne({
             where: {
                 name,
                 password
             }
            })
        
            if(adm){ 
                const token = jwt.sign({userid : adm.id, role: 'adm'}, SECRET, { expiresIn: "10h"  })
                return  {auth : true, token}
                
            }

            return 'não encontrada'
      
        } catch (error) {
            throw error
        }
    };

    async RegisterAdmService(name,password){
     
        try {
              await AdmEntity.sync()
               const newAdm = await AdmEntity.create({
                name,password
               })
               return(newAdm)
        }
         catch (error) {
            throw error
        }
    };

    async RegisterFirstAdm(name,password){
        try {
            await AdmEntity.sync()

            const allAdm = await AdmEntity.findAll()
            console.log('adms no banco: ', allAdm)

            if(allAdm.length){
                return 'banco ja contem adms'
            }

            const newAdm = await AdmEntity.create({
             name,password
            })

            return newAdm
        } catch (error) {
            throw error
        }
    }
    
    async LogoutAdmService(token){
       
        try {
            await BlackListedTokenEntity.sync()
            const blacklist = await BlackListedTokenEntity.create({token})
    
            return blacklist
        } catch (error) {
            throw error 
        }
    }

    async updateAdmService(id,name,email,password){
        try {
            await AdmEntity.sync()
            
            await AdmEntity.update({name,email,password}, {
                where:{
                    id
                }
            })
                const updatedAdm = await AdmEntity.findByPk(id,{
                    attributes:{
                        exclude: ["id"]
                    }
                })
              return  updatedAdm
        } catch (error) {
            throw error
        }
    }

    async deleteMessageService(id){
        try {
            await AdmEntity.sync()
            await MensagemEntity.sync()

            const message = await MensagemEntity.findByPk(id)

            if(!message){
                return 'mensagem não encontrada'
            }

            await message.destroy()

            return 'deleted'

        } catch (error) {
            throw error
        }
    }

    async deleteAdmService(id){
        try {
            await AdmEntity.sync()

            const result = await AdmEntity.findByPk(id)

            if(!result){
                return 'não encontrada'
            }

            await result.destroy()

            return 'deleted'

        } catch (error) {
            throw error
        }
    }

    async deleteUserService(id){
        try {
            await AdmEntity.sync()
            await UserEntity.sync()
            await MensagemEntity.sync()

            const userMessages = await MensagemEntity.findAll({
                where:{
                    userid: id
                }
            })
            
            const result = await UserEntity.findByPk(id)

            if(!result){
                return 'não encontrada'
            }

            if(userMessages){
                for (let message of userMessages) {
                    await message.destroy();
                }
            }

            await result.destroy()

            return 'deleted'

        } catch (error) {
            throw error
        }
    }

    async showAllUserService(){
        try {
            await UserEntity.sync()

            const allUsers = await UserEntity.findAll()

            if(!allUsers){
                return 'não encontrada'
            }

            return allUsers
        } catch (error) {
            throw error
        }
    }
    
};