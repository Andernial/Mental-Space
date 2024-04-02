import { Router } from "express";
import { LogoutUser, loginUser, registerUser, updateUser} from "../controller/user.controller.js";
// import { createPost, editPost } from "../controller/Post.controller.js";
import { verifyJwt } from "../middlewares/auth.js";

const UserRouter = Router();

UserRouter.post('/create-user', registerUser) 

UserRouter.post('/login-user', loginUser)

UserRouter.get('/logout-user', verifyJwt('user'), LogoutUser)

UserRouter.patch('/update-user', verifyJwt('user'), updateUser)


// UserRouter.post('/post', verifyJwt, createPost)

// UserRouter.patch('/update-post', verifyJwt, editPost)






export {UserRouter}