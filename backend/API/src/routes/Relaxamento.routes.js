import express from 'express';
import { selectRandomSound, selectRandomUrl } from '../controller/relaxamento.controller.js';
// import { selectRandomUrlMusic, selectRandomUrlSound } from '../controller/RelaxamentoController.js';
const RelaxamentoRouter = express.Router()

RelaxamentoRouter.get("/random-music", selectRandomUrl )

RelaxamentoRouter.get("/random-sound", selectRandomSound )

export { RelaxamentoRouter }