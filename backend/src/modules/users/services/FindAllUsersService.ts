import { inject, injectable } from "tsyringe";
import IUsersRepository from "../repositories/IUsersRepository";
import User from "../infra/typeorm/entities/User";

@injectable()
export default class FindAllUsersService {
  constructor(
    @inject("UsersRepository")
    private users_repository: IUsersRepository
  ) {}

  public async find_all(): Promise<User[] | undefined> {
    const users = await this.users_repository.find_all();

    const new_users = users.map((user) => {
      delete user.password;

      return user;
    });

    return new_users;
  }
}
