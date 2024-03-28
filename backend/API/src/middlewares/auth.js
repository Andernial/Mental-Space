import jwt from 'jsonwebtoken'
import { BlackListedTokenEntity } from '../entities/BlackListedToken.entity.js'
export const SECRET = 'anderApi'

export const verifyJwt = (rolePermission) => {
    return async (req, res, next ) =>{
        const token = req.headers['x-acess-token']
        const verifyPromise = (jwt.verify)
        await BlackListedTokenEntity.sync()
       
    
        try{
            const decoded = verifyPromise(token, SECRET)
            const inBlackList = await BlackListedTokenEntity.findByPk(token)
    
            
       
            if(inBlackList){
                return res.status(401).json({message: 'token invalido!'}).end()
            }
    
           if(decoded.role !== rolePermission){
            return res.status(401).json({message: 'permissão não suficiente!'}).end()
           }
    
            req.role = decoded.role
            req.userid = decoded.userid
            next();
        }catch(error){
            console.log(error)
            res.status(401).end()
        }
    }
}
    