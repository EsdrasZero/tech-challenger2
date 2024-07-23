import { IUser } from "@/entities/model/user.interface";


export interface IUserRepository {
  create(user: IUser) : Promise<IUser>;
  signin(username: string) : Promise<IUser | null>;
}
