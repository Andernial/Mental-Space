
import { relaxamentoService } from "../service/relaxamento.service.js"
import { ERRORS } from "../shared/messages.js"


const instanceOfRelaxamentoService = new relaxamentoService()

const selectRandomUrl = async (req, res) => {
    try {
        const result = await instanceOfRelaxamentoService.selectRandomMusicService()

        if (result === 'não encontrada') {
            return res.status(404).json({ message: `musicas ${ERRORS.NOT_FOUND}` })
        }
        res.status(200).json({ result })
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const selectRandomSound = async (req, res) => {
    try {
        const result = await instanceOfRelaxamentoService.selectRandomSoundService()

        if (result === 'não encontrada') {
            return res.status(404).json({ message: `Sons ${ERRORS.NOT_FOUND}` })
        }
        res.status(200).json({ result })
    } catch (error) {
        res.status(400).json(error.message)
    }
}

// }

// function selectRandomUrlSound() {

//     let randomNumber = Math.floor(Math.random() * (soundUrl.length))
//     let selectedUrl = soundUrl[randomNumber]
//     return selectedUrl
// }



export { selectRandomUrl, selectRandomSound }