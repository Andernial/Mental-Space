import { ERRORS, SUCCESS } from '../shared/messages.js';
import { AdmService } from '../service/adm.service.js';



const instanceOfAdm = new AdmService();



const loginAdm = async (req, res) => {
    try {
        const { name, password } = req.body

        const adm = await instanceOfAdm.LoginAdmService(name, password)

        if (adm === 'não encontrada') {
            return res.status(401).json({ message: `adm ${ERRORS.NOT_FOUND}` })

        }

        res
            .status(200)
            .json({ message: `logado com sucesso`, adm })
    } catch (error) {

        res.status(400).json(error.message)
    }



};

const registerFirstAdm = async (req, res) => {
    try {
        const { name, password } = req.body
        const result = await instanceOfAdm.RegisterFirstAdm(name, password)

        if (!name || !password) {
            return res.json({ message: 'dados faltando' })
        }

        if (result === 'banco ja contem adms') {
            return res.status(401).json({ message: 'BANCO JÀ CONTEM ADMS!' })
        }

        res.status(201).json({ message: `adm ${SUCCESS.CREATED}`, adm: result })
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const registerAdm = async (req, res) => {
    try {
        const { name, password } = req.body
        const adm = await instanceOfAdm.RegisterAdmService(name, password)

        if (!name || !password) {
            return res.json({ message: 'dados faltando' })
        }

        if (adm.name === 'SequelizeUniqueConstraintError') {
            return res.status(400).json({ message: `nome de adm ${ERRORS.ALREADY_EXIST}` });
        }

        res
            .status(201)
            .json({ message: `adm ${SUCCESS.CREATED}`, adm: adm })
    } catch (error) {
        res.status(400).json(error.message)
    }

};

const logoutAdm = async (req, res) => {
    try {
        const token = req.headers['x-acess-token']


        const tokenValidation = await instanceOfAdm.LogoutAdmService(token)

        if (tokenValidation.name === 'SequelizeUniqueConstraintError') {
            return res.status(422).json({ message: `erro de logout, token ${ERRORS.ALREADY_EXIST} na blacklist` });
        }

        if (tokenValidation.name === 'SequelizeValidationError') {
            return res.status(422).json({ message: `erro de logout, token ${ERRORS.NOT_FOUND}` });
        }

        res
            .status(201)
            .json({ message: `token ${SUCCESS.UPDATED}`, BlackListedToken: tokenValidation })
    } catch (error) {
        res.status(400).json(error.message)
    }



};

const showAllUsers = async (req, res) => {
    try {
        const result = await instanceOfAdm.showAllUserService()

        if (result === 'não encontrada') {
            return res.status(404).json({ error: `usuario ${ERRORS.NOT_FOUND}` })
        }

        return res.status(200).json({ users: result })
    } catch (error) {
        res.status(400).json(error.message)
    }
}


const updateAdm = async (req, res) => {
    try {
        const { name, email, password } = req.body

        if (!name && !email && !password) {
            return res.status(400).json({ message: 'campos vazios' })
        }
        const id = req.userid

        const result = await instanceOfAdm.updateAdmService(id, name, email, password)

        res.status(200).json({ message: `adm ${SUCCESS.UPDATED}`, adm: result })


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

const deleteMessage = async (req, res) => {
    try {
        const { id } = req.params

        const result = await instanceOfAdm.deleteMessageService(id)

        if (result === 'mensagem não encontrada') {
            return res.status(404).json({ error: `mensagem ${ERRORS.NOT_FOUND}` })
        }

        res.status(200).json({ message: `mensagem ${SUCCESS.DELETED}` })

    } catch (error) {
        res.status(400).json(error.message)
    }
}

const deleteADM = async (req, res) => {
    try {
        const { id } = req.params
        const result = await instanceOfAdm.deleteAdmService(id)

        if (result === 'não encontrada') {
            return res.status(404).json({ error: `adm ${ERRORS.NOT_FOUND}` })
        }

        res.status(200).json({ message: `adm ${SUCCESS.DELETED}` })
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params
        const result = await instanceOfAdm.deleteUserService(id)

        if (result === 'não encontrada') {
            return res.status(404).json({ error: `usuario ${ERRORS.NOT_FOUND}` })
        }

        res.status(200).json({ message: `usuario ${SUCCESS.DELETED}` })
    } catch (error) {
        res.status(400).json(error.message)
    }
}


export { loginAdm, registerAdm, logoutAdm, updateAdm, deleteMessage, deleteADM, deleteUser, showAllUsers, registerFirstAdm };