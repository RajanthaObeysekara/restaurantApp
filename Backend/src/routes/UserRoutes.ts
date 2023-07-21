import express, { Router } from "express";
import { UserController } from "../conttrtollers/UserController";

const userRouter:Router = express.Router();

// create user
userRouter.post('/',UserController.createUser)
userRouter.get('/:id',UserController.getUser)

export default userRouter