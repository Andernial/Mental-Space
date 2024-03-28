
import { ERRORS, SUCCESS } from "../shared/messages.js"
import { UserService } from "../service/user.service.js"






const instanceOfUserService = new UserService()


const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body

        const result = await instanceOfUserService.registerUserService(name, email, password)

        res
            .status(200)
            .json({ usuario: result })
    } catch (error) {
        if (error.name === 'SequelizeValidationError') {
            const errorMessage = error.errors.map(err => err.message)
            return res.status(422).json({ error: errorMessage })
        }

        if (error.name === 'SequelizeUniqueConstraintError') {
            const errorMessage = error.errors.map(err => err.message)
            return res.status(409).json({ error: errorMessage })
        }

        res.status(500).json(error)
    }

}
const loginUser = async (req, res) => {
    try {

        const { email, password } = req.body
        const result = await instanceOfUserService.loginUserService(email, password)


        if (result === 'não encontrado') {
            return res.status(401).json({ message: `usuario ${ERRORS.NOT_FOUND}` })
        }
        res.status(200).json({ auth: true, token: result })

    } catch (error) {
        res.status(400).json(error.message)
    }
}

const LogoutUser = async (req, res) => {
    try {
        const usertoken = req.headers['x-acess-token']

        const result = await instanceOfUserService.logoutUserService(usertoken)

        res.json(result)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const updateUser = async (req, res) => {
    try {
        const { name, email, password } = req.body

        if(!name && !email && !password){
            return res.status(400).json({message: 'campos vazios'})
        }
        const id = req.userid

        const result = await instanceOfUserService.updateUserService(id,name,email,password)

        res.status(200).json({message: `usuario ${SUCCESS.UPDATED}`,usuario: result})
    
      
    } catch (error) {
        
        if (error.name === 'SequelizeValidationError') {
            const errorMessage = error.errors.map(err => err.message)
            return res.status(422).json({ error: errorMessage })
        }

        if (error.name === 'SequelizeUniqueConstraintError') {
            const errorMessage = error.errors.map(err => err.message)
            return res.status(409).json({ error: errorMessage })
        }

        res.status(400).json(error.message)
    }
}



export { registerUser, loginUser, LogoutUser, updateUser }