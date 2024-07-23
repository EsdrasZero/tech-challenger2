import { IUser } from "@/entities/model/user.interface";
import { IUserRepository } from "@/repositories/user.repository.interface";

export class CreateUserUseCase{
  constructor (private readonly UserRepository: IUserRepository) {}

  async handler (user: IUser): Promise<IUser> {
    return this.UserRepository.create(user);
  }

}
