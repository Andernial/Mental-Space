import express from "express";
import { addLike, createMessage, deleteMessage, showAllMessages, showMyMessages, updateMessage } from "../controller/mensagens.controller.js";
import { verifyJwt } from "../middlewares/auth.js";
// import { createNewMessage, messagelist, addLike} from "../controller/MensagensController.js";
const MensagensRouter = express.Router();


MensagensRouter.post("/create-message", verifyJwt('user'),createMessage )

MensagensRouter.patch("/toggle-like/:messageid",verifyJwt('user'), addLike )

MensagensRouter.patch("/update-message/:messageid",verifyJwt('user'), updateMessage )

MensagensRouter.delete("/delete-message/:messageid",verifyJwt('user'), deleteMessage )

MensagensRouter.get("/mensagensDeApoio", showAllMessages)

MensagensRouter.get("/my-messages", verifyJwt('user'), showMyMessages)

export {MensagensRouter}