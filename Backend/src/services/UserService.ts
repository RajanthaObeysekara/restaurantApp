// services/user.service.ts

import User from "../models/UserModel";

export async function createUser(
  username: string,
  email: string,
  password: string
): Promise<User | null> {
  return await User.create({ username, email, password });
}

export async function getUser(id: String): Promise<User | null> {
    const user = await User.findOne({ where: { id: id } }) as User;
    return user.toJSON()
}
