import { IUser } from "./model/user.interface";

export class User implements IUser {
  id?: number | undefined;
  username: string;
  password: string;

}
