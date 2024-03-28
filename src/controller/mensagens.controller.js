
import { LikeEntity } from "../entities/Like.entity.js"
import { UserEntity } from "../entities/User.entity.js"
import { MensagemEntity } from "../entities/mensagens.entity.js"
import { MensagemService } from "../service/mensagens.service.js"
import { ERRORS, SUCCESS } from "../shared/messages.js"


const instanceOfMessageService = new MensagemService()



const createMessage = async (req, res) => {
    try {
        const {  message } = req.body
        const userid = req.userid
        const result = await instanceOfMessageService.createMessageService(userid,message)

        

        res
            .status(201)
            .json({ resultado: `Mensagem ${SUCCESS.CREATED}`, mensagem: result })
    } catch (error) {

        if(error.name === 'SequelizeValidationError' ){
            const errorMessage = error.errors.map(err => err.message)
            return res.status(422).json({error: errorMessage})
        }

        if(error.name === 'SequelizeUniqueConstraintError'){
            const errorMessage = error.errors.map(err => err.message)
           return  res.status(409).json({error: errorMessage})
        }

        res.status(400).json(error.message)
    }

}

const addLike = async (req,res) =>{
    try {
        const { messageid } = req.params
        

        const userid = req.userid

        const result = await instanceOfMessageService.togleLike(userid,messageid)

        if(result === 'like adicionado'){
            return res.status(200).json({message: 'like adicionado'})
        }
        res.status(200).json({message: 'like removido'})

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao adicionar like' });
    }
}

const showAllMessages = async (req,res) => {
    try {
        const result = await instanceOfMessageService.showMessagesService() 

        if(result !== 'não encontrada'){
            return  res.status(200).json({messages: result})
        }

        res.status(404).json({messages: `mensagem ${ERRORS.NOT_FOUND}`})
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const updateMessage = async (req,res) =>{
    try {
        const { messageid } = req.params
        const { message } = req.body
        const id = req.userid
        
        if(!message){
            return res.status(400).json({message: 'dados faltando'})
        }

        const result = await instanceOfMessageService.updateMessageService(id,messageid,message)

        if(result === 'não encontrada'){
            return res.status(404).json({message: `mensagem ${ERRORS.NOT_FOUND}`})
        }

        res.status(200).json({sucess: `mensagem ${SUCCESS.UPDATED} `, message: result})

    } catch (error) {
        res.status(400).json(error.message)
    }
}


export { createMessage, addLike, showAllMessages, updateMessage }