import { Router } from 'express'
import { May22Blog } from '../models/UserModel.js'
import { userGetAll, userGetById, userGetByIdAndDelete, userGetByIdAndLogin, userGetByIdAndSignin } from '../controllers/UserController.js'
export const UserRouter = Router()



UserRouter.get("/",userGetAll)
UserRouter.get("/:id",userGetById)
UserRouter.delete("/:id",userGetByIdAndDelete)
UserRouter.post("/signin",userGetByIdAndSignin)
UserRouter.post("/login",userGetByIdAndLogin)



