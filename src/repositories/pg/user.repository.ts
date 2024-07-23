import { database } from './../../lib/pg/db';
import { IUser } from "@/entities/model/user.interface";
import { IUserRepository } from "../user.repository.interface";

export class UserRepository implements IUserRepository {

  async create({ username, password }: IUser): Promise<IUser> {
    const result = await database.clientInstance?.query(
      `INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *`,
      [username, password]
    );
    return result?.rows[0];
  }


  async signin(username: string): Promise<IUser | null> {
    const result = await database.clientInstance?.query(
      `
        SELECT * FROM "user"
        WHERE "user".username = $1
        `,
      [username]
    );
    return result?.rows[0];
  }

}
