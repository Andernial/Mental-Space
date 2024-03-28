import { SiteEntity } from "../entities/Site.entity.js"
import { SiteAjudaEntity } from "../entities/SitesAjuda.entity.js"


export class SiteService{
    async returnSiteService(){
        try {
            await SiteEntity.sync()

            const allSites = await SiteEntity.findAll()

           
            if(!allSites.length){
                return 'não encontrada'
            }

            return allSites

        } catch (error) {
            throw error
        }
    }

    async returnSiteDeAjudaService(){
        try {
            await SiteAjudaEntity.sync()

            const allSites = await SiteAjudaEntity.findAll()

           
            if(!allSites.length){
                return 'não encontrada'
            }

            return allSites

        } catch (error) {
            throw error
        }
    }
}