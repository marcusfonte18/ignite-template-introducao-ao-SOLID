/* eslint-disable prettier/prettier */
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User[] {
    console.log(user_id)
    const user = this.usersRepository.findById(user_id)

    if (!user) {
      throw new Error(`User does not admin`)
    }

    if (!user.admin) {
      throw new Error(`User isnt an admin`)
    }

    const users = this.usersRepository.list();

    return users;
  }
}

export { ListAllUsersUseCase };
