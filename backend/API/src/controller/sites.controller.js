import { SiteService } from "../service/site.service.js"
import { ERRORS } from "../shared/messages.js"



const instaceOfSiteService = new SiteService()

const returnSites = async (req, res) => {
    try {
        const result = await instaceOfSiteService.returnSiteService()


        if (result == 'não encontrada') {
            return res.status(404).json({ message: `erro ${ERRORS.NOT_FOUND}` })
        }

        res.status(200).json({ sites: result })
    } catch (error) {
        res.status(400).json(error.message)
    }
}


const returnSitesDeAjuda = async (req, res) => {
    try {
        const result = await instaceOfSiteService.returnSiteDeAjudaService()


        if (result == 'não encontrada') {
            return res.status(404).json({ message: `erro ${ERRORS.NOT_FOUND}` })
        }

        res.status(200).json({ sites: result })
    } catch (error) {
        res.status(400).json(error.message)
    }
}


export { returnSites, returnSitesDeAjuda }