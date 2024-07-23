import { IUser } from "@/entities/model/user.interface";
import { IUserRepository } from "@/repositories/user.repository.interface";

export class SigninUserUseCase {
  constructor(private readonly UserRepository: IUserRepository) { }

  async handler(username: string): Promise<IUser | null> {
    return this.UserRepository.signin(username);
  }

}
