import { sequelize } from "../database/connection.js";
import { RelaxingSongsEntity } from "../entities/RelaxingMusic.entity.js";
import { RelaxingSoundEntity } from "../entities/RelaxingSoundEntity.js"


export class relaxamentoService{
    async selectRandomMusicService(){
        try {
            await RelaxingSongsEntity.sync()

            const randomSong = await RelaxingSongsEntity.findAll({
                order: sequelize.fn('random()'),
                 limit: 1
            })

            if(!randomSong.length){
                return 'não encontrada'
            }

            return randomSong

        } catch (error) {
            throw error
        }
    }
    async selectRandomSoundService(){
        try {
            await RelaxingSoundEntity.sync()

            const randomSound = await RelaxingSoundEntity.findAll({
                order: sequelize.fn('random()'),
                 limit: 1
            })

            if(!randomSound.length){
                return 'não encontrada'
            }

            return randomSound

        } catch (error) {
            throw error
        }
    }

}