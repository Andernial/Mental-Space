import express from "express"
import { verifyJwt } from "../middlewares/auth.js"
import { deleteADM, deleteMessage, deleteUser, loginAdm, logoutAdm, registerAdm, registerFirstAdm, showAllUsers, updateAdm } from "../controller/adm.controller.js"
// import { createAdm, deletePost, verifyAdm ,deleteAdm} from "../controller/AdmController.js"
const AdmRouter = express.Router()

AdmRouter.post('/registerAdm-first', registerFirstAdm)

AdmRouter.post('/create-adm',verifyJwt('adm'), registerAdm )

AdmRouter.post('/login-adm', loginAdm )

AdmRouter.get('/logout-adm', verifyJwt('adm'), logoutAdm)

AdmRouter.get('/showAll-users', verifyJwt('adm'), showAllUsers)

AdmRouter.patch('/update-adm', verifyJwt('adm'), updateAdm)

AdmRouter.delete('/delete-message/:id', verifyJwt('adm'), deleteMessage)

AdmRouter.delete('/delete-adm/:id', verifyJwt('adm'), deleteADM  )

AdmRouter.delete('/delete-user/:id', verifyJwt('adm'), deleteUser )


export { AdmRouter }