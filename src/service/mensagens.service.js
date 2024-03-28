import { UserEntity } from "../entities/User.entity.js"
import { MensagemEntity } from "../entities/mensagens.entity.js"
import { LikeEntity } from "../entities/Like.entity.js"


export class MensagemService{
    async createMessageService(userid,message){
        try {
           await MensagemEntity.sync()

           const authordata = await UserEntity.findByPk(userid)
            const author = authordata.name
            
                console.log(userid)
            const newMensagemEntity = await MensagemEntity.create({
                author, message,userid
            })

            return newMensagemEntity


        } catch (error) {
            throw error
        }


    } 
    
    async togleLike(userid,messageid){
        try {
            await LikeEntity.sync()

          
            const message = await MensagemEntity.findByPk(messageid)

            
            const userAlreadyLiked = await LikeEntity.findOne({
                where:{
                    userid,messageid
                }
            })

    
            if (userAlreadyLiked) {
                
                await userAlreadyLiked.destroy();
                await message.decrement('likes')
                return 'like removido'
              } 
              await LikeEntity.create({userid, messageid })
              await message.increment('likes');

                return 'like adicionado'
              
            
              

        } catch (error) {
            throw error
        }
    }

    async showMessagesService(){
        try {
            MensagemEntity.sync()
            const mensagens = await MensagemEntity.findAll({
                attributes:{
                    exclude: ["userid"]
                }
            })

            if(mensagens){
                return mensagens
            }
            return 'não encontrada'
        } catch (error) {
            throw error
        }
    }

    async updateMessageService(id,messageid,message){
        try {
            MensagemEntity.sync()
            const messageExists = await MensagemEntity.findOne({
                where:{
                    userid: id,
                    id: messageid
                }
            })

            if(!messageExists){
                return 'não encontrada'
            }

            await MensagemEntity.update({message},{
                where:{
                    userid: id,
                    id: messageid
                }
            })
            const updatedMessage = await MensagemEntity.findByPk(messageid, {
                attributes:{
                    exclude: ['userid']
                }
            })
            return updatedMessage

        } catch (error) {
            throw error
        }
    }

}


