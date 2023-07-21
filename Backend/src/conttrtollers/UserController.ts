import { Request, Response } from "express";
import { createUser, getUser } from "../services/UserService";

export class UserController {
  static async createUser(req: Request, res: Response) {
    const { name, email, password } = req.body;
    const newUser = await createUser(name, email, password);
    res.status(201).json(newUser);
  }

  static async getUser(req: Request, res: Response) {
    const userId: String = req.params.id; // check null id exception
    if (userId) {
      const user = await getUser(userId);
      res.json(user)
    } else {
        console.log('user not found')
      return null
    }
  }
}
