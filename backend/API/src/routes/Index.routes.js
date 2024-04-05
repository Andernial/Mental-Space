import { Router } from "express";
import { SiteRouter } from "./Sites.routes.js";
import { RelaxamentoRouter } from "./Relaxamento.routes.js";
import { MensagensRouter } from "./Mensagens.routes.js";
import { AdmRouter } from "./Adm.routes.js";
import { UserRouter } from "./User.routes.js";

const routers = Router()

routers.use('/Sites', SiteRouter)
routers.use('/Relaxing', RelaxamentoRouter)
routers.use('/Messages', MensagensRouter)
routers.use('/Adm', AdmRouter)
routers.use('/User', UserRouter)



export { routers }