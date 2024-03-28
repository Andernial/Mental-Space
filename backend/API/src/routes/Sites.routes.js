import express from "express"
import { returnSites, returnSitesDeAjuda } from "../controller/sites.controller.js"
// import { returnUrl, returnUrlHelp } from "../controller/SitesController.js"
const SiteRouter = express.Router()


SiteRouter.get("/ajuda", returnSitesDeAjuda)

SiteRouter.get("/abrangendo-tema", returnSites)



export { SiteRouter }