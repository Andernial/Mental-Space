import jwt from 'jsonwebtoken';
import { AdmEntity } from "../entities/Adm.entity.js";
import { SECRET } from '../middlewares/auth.js';
import { BlackListedTokenEntity } from '../entities/BlackListedToken.entity.js';
import { MensagemEntity } from '../entities/mensagens.entity.js';

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
    
};