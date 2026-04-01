import express from 'express'
import { getCurrentUser } from '../controllers/user.controller.js'
import isAuth from '../middleware/isAuth.js'


const userRouter = express.Router()
userRouter.get("/me", isAuth, getCurrentUser)
userRouter.get("/gen",  getCurrentUser)

export default userRouter