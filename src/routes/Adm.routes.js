import express from "express"
import { verifyJwt } from "../middlewares/auth.js"
import { deleteMessage, loginAdm, logoutAdm, registerAdm, updateAdm } from "../controller/adm.controller.js"
// import { createAdm, deletePost, verifyAdm ,deleteAdm} from "../controller/AdmController.js"
const AdmRouter = express.Router()

AdmRouter.post('/create-adm',verifyJwt('adm'), registerAdm )

AdmRouter.get('/login-adm', loginAdm )

AdmRouter.get('/logout-adm', verifyJwt('adm'), logoutAdm)

AdmRouter.patch('/update-adm', verifyJwt('adm'), updateAdm)

AdmRouter.delete('/delete-message/:id', verifyJwt('adm'), deleteMessage)


export { AdmRouter }